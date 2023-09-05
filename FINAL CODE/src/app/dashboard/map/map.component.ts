import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { AREAS, CRIME_TYPES, MAP_STYLES } from 'src/app/utils/constants';
import { Place } from 'src/app/utils/interfaces';

declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class MapComponent implements OnInit {

  @ViewChild('map')
  mapRef!: any;
  newMap!: any;
  mapStyles = MAP_STYLES;

  areas: Place[] = AREAS;
  areasByType: Place[] = [];

  selectedMarker = null;

  @Input() crimeType!: string;
  @Input() density!: Number;
  @Input() showHeatMap!: string;
  @Input() showClusters!: string;
  @Input() routeOptions!: any;

  polyLines: any = [];

  latLongs!: any[];
  crimes = CRIME_TYPES;
  icon: string = 'https://maps.google.com/mapfiles/ms/icons/red-dot.png';
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    if (this.crimeType) {
      const crime = this.crimes.find(c => c.value === this.crimeType);
      if (crime) {
        this.icon = `assets/Resources/${crime.icon}`
      }
      this.areasByType = this.areas.filter(a => a.CrimeCategory === this.crimeType);
      const latLongs = this.areasByType.map(a => ({ lat: a.Y, lng: a.X }));
      this.latLongs = latLongs;
    }
  }

  ionViewDidEnter() {
    setTimeout(async () => {
      await this.createMap();
    }, 2500);
  }

  placeMarkers() {

    const latLongs = this.latLongs;

    if (latLongs.length) {
      for (let latLng of latLongs) {
        const marker = new google.maps.Marker({
          map: this.newMap,
          icon: {
            url: this.icon, // url
            scaledSize: new google.maps.Size(30, 30), // scaled size
            origin: new google.maps.Point(0, 0), // origin
            anchor: new google.maps.Point(0, 0) // anchor
          }
        });
        marker.setPosition(latLng)
      }

      const bounds = new google.maps.LatLngBounds();
      for (let latLng of latLongs) {
        bounds.extend(latLng);
      }
      this.newMap.fitBounds(bounds);
    }
  }

  async createMap() {
    this.newMap = new google.maps.Map(this.mapRef.nativeElement, {
      zoom: 6,
      center: { lat: 16.402218, lng: 120.569668 },
      // disableDefaultUI: true,
      zoomControlOptions: {
        position: google.maps.ControlPosition.LEFT_CENTER,
      },
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.VERTICAL_BAR,
        position: google.maps.ControlPosition.TOP_CENTER,
      },
      // streetViewControlOptions: {
      //   position: google.maps.ControlPosition.RIGHT_CENTER,
      //   disable: true
      // },
      fullscreenControl: false,
      styles: this.mapStyles
    });
    this.placeMarkers();


    /* This component gets called from two different parts, it checks if the routes are also defined */
    if(this.routeOptions){
      debugger;
      this.placeStartEndMarkers(this.routeOptions.origin, this.routeOptions.destination);
      this.placeRoutes();
    }
      
  }

  placeRoutes(){
    let paths = this.routeOptions.paths;

    /* Here you can set the different colors based on the type property */
    let pathToTake = paths.filter((a: { type: string; }) => a.type === 'Safe');
    let pathToAvoid = paths.filter((a: { type: string; }) => a.type === 'UnSafe');

    pathToAvoid.forEach((path: { overview_path: any; }) => {
      const polyline = new google.maps.Polyline({
        path: path.overview_path,
        strokeColor: '#FF0000', // Red color for the polyline
        strokeOpacity: 1.0,
        strokeWeight: 5
      });

      this.polyLines.push(polyline);

      polyline.setMap(this.newMap);
    })

    pathToTake.forEach((path: { overview_path: any; }, index: number) => {

      let strokeColor = index == 0 ? '#07b527' : '#2777c2';
      const polyline = new google.maps.Polyline({
        path: path.overview_path,
        strokeColor: strokeColor, // Red color for the polyline
        strokeOpacity: 1.0,
        strokeWeight: 5
      });

      this.polyLines.push(polyline);

      polyline.setMap(this.newMap);
    })

    // this.placeOriginMarker();

  }

  removePloylines(){
    this.polyLines.forEach((line: { setMap: (arg0: null) => void; }) => {
      line.setMap(null);
    })
  }

  placeStartEndMarkers(origin: any, destination: any) {
    let originMarker = new google.maps.Marker({
      map: this.newMap,
      draggable: true,
      icon: {
        // url: 'assets/map-icons/desIcon.png', // url
        url: 'assets/Resources/blue-dot.png',
        scaledSize: new google.maps.Size(30, 30), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
      }
    });
    originMarker.setPosition(origin);


    /* Sets up listener for origin marker and re checks possible routes */
    this.originMarkerListener(originMarker);

    let destinationMarker = new google.maps.Marker({
      map: this.newMap,
      draggable: true,
      icon: {
        url: 'assets/Resources/green-dot.png',
        scaledSize: new google.maps.Size(30, 30), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
      }
    });
    destinationMarker.setPosition(destination);

    /* Sets up listener for destination marker and re checks possible routes */
    this.destinationMarkerListener(destinationMarker);
  }

  async reCheckRoutes(){
    const directionsService = new google.maps.DirectionsService();
    const request = {
      origin: this.routeOptions.origin,
      destination: this.routeOptions.destination,
      travelMode: "DRIVING",
      provideRouteAlternatives: true,
    };

    
  
    directionsService.route(request, (response: any, status: any) => {
      if (status === google.maps.DirectionsStatus.OK) {
        let dir = response;

        let routes: { overview_path: any; type: string; }[] = [];

        dir.routes.forEach((route : { overview_path: any}) => {
          let conflictPoints = 0
  
        // Create a new route without the path segments to avoid
          route.overview_path.forEach((point: { lat: () => any; lng: () => any; }) =>
          {
            
            if(this.isPointInAreas(point.lat(), point.lng()))
                conflictPoints = ++conflictPoints;
          }
          )

          

          if(conflictPoints){
            let path = {
              overview_path: route.overview_path,
              type: 'UnSafe'
            }

            routes.push(path);
          }
          else{
            let path = {
              overview_path: route.overview_path,
              type: 'Safe'
            }

            routes.push(path);
          }

          
        })

        this.routeOptions.paths = routes;

        this.removePloylines();

        this.placeRoutes();

      }
    });
  }

  originMarkerListener(originMarker: any){
    // Event listener to update the latitude and longitude when the marker is dragged
    originMarker.addListener('dragend', () => {

      let origin = {
        lat: originMarker.getPosition().lat(),
        lng: originMarker.getPosition().lng()
      }

      this.routeOptions.origin = origin;

      this.reCheckRoutes();
    });
  }

  destinationMarkerListener(destinationMarker: any){
    // Event listener to update the latitude and longitude when the marker is dragged
    destinationMarker.addListener('dragend', () => {

      let destination = {
        lat: destinationMarker.getPosition().lat(),
        lng: destinationMarker.getPosition().lng()
      }

      this.routeOptions.destination = destination;

      this.reCheckRoutes();
    });
  }

  isPointInAreas(lat: any, lng: any) : boolean {
  
    let conflicts = 0;
    
    this.areasByType.forEach((area: { Y: any; X: any; }) => {
      
      const areaLat = area.Y;
      const areaLng = area.X;
      const radius = 0.0005; // Adjust as needed
      const distanceSquared = (lat - areaLat) ** 2 + (lng - areaLng) ** 2;
      // return distanceSquared <= radius ** 2;
      let isExist = distanceSquared <= radius ** 2;
      if(isExist)
        conflicts = ++conflicts;
    });
  
    return conflicts > 0;
  }

  goBack() {
    this.modalCtrl.dismiss();
    this.newMap = null;
  }
}
