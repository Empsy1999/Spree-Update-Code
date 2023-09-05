import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AreasComponent } from '../areas/areas.component';
import { LaunchNavigator } from '@awesome-cordova-plugins/launch-navigator/ngx';
import { CommonService } from 'src/app/services/common.service';
import { LaunchNavigatorOptions } from 'uk.co.workingedge.phonegap.plugin.launchnavigator';
import { CRIME_TYPES, AREAS, } from 'src/app/utils/constants';
import { MapComponent } from '../map/map.component';
import { Place } from 'src/app/utils/interfaces';

declare var google: any;

@Component({
  selector: 'app-viewsaferroute',
  templateUrl: './viewsaferroute.page.html',
  styleUrls: ['./viewsaferroute.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule, SharedModule],
  providers: [LaunchNavigator]
})
export class ViewsaferroutePage implements OnInit {

  origin: any = { lat: 16.402218, lng: 120.569668 };

  crimes = CRIME_TYPES;
  areas: Place[] = AREAS;


  newRoutes: any[] = [];
  destination!: any;
  arrival!: any;

  alternateRoute: any = '';
  selectedCrime: any = '';
  routes: any = [];
  avoidHighRisk: boolean = false;
  avoidTrafic: boolean = false;
  showSafeRoute: boolean = false;
  showRiskLevel: boolean = false;

  constructor(private modalController: ModalController, private launchNavigator: LaunchNavigator, private commonService: CommonService) {
    this.destination = {
      DateComtd: '',
      TimeComtd: "",
      Barangay: "",
      PlaceType: "",
      X: 0,
      Y: 0,
      CrimeCategory: ''
    }
  }

  ngOnInit() {
  }

  getDirection() {
      debugger;
    const directionsDisplay = new google.maps.DirectionsRenderer()

    //Pass in origin and destination details
    const request = {
      origin: this.origin,
      destination: this.arrival,
      travelMode: google.maps.TravelMode.DRIVING,
      provideRouteAlternatives: true,
    };

    //Add a variable to call the directions service
    const directionsService = new google.maps.DirectionsService();


    //Send the request to the directionService to get the route
    directionsService.route(request, (response: any, status: any) => {

      if (status == google.maps.DirectionsStatus.OK) {
        //Set the directionsDisplay to the map object
        // directionsDisplay.setMap(map);


        // directionsDisplay.setDirections(response);
        this.calculateAndDisplayRoute(response);

        this.commonService.saveHistory(this.destination.Barangay);
        // const { routes } = response;
        // for (const route of routes) {
        //   const { legs } = route;
        //   if (legs.length) {
        //     this.routes.push(legs[0]?.end_address);
        //   }
        // }
      }
    })
  };



  // Takes the response from google directions service
  calculateAndDisplayRoute(dir: any) {

    console.log(dir);
    this.newRoutes = [];
    const areasByType = this.areas.filter(a => a.CrimeCategory === this.selectedCrime);


    // Analuze each route from api to check if it is under crime marker
    dir.routes.forEach((route : { overview_path: any}) => {
      let conflictPoints = 0
      
      route.overview_path.forEach((point: { lat: () => any; lng: () => any; }) =>
      {
        
        /* Passes lat and long to this function to check if there is a conflict you can decide how many
        conflictPoints are danger and how many are medium danger, right now only two things are getting checked wrong or correct
        */
        if(this.isPointInAreas(point.lat(), point.lng(), areasByType))
            conflictPoints = ++conflictPoints;
      }
      )
      

      /*
      Here you can create three sort of types Safe, Medium Safe and Unsafe
      based on the count of conflictPoints
      */
      if(conflictPoints){
        let path = {
          overview_path: route.overview_path,
          type: 'UnSafe'
        }

        this.newRoutes.push(path);
      }
      else{
        let path = {
          overview_path: route.overview_path,
          type: 'Safe'
        }

        this.newRoutes.push(path);
      }
    })


    // Here the map component is called with the data
    this.callMapComponent();
  }

  async callMapComponent(){

    let routeOptions = {
      origin: this.origin,
      destination: this.arrival,
      paths: this.newRoutes
    }

    const modal = await this.modalController.create({
      component: MapComponent,
      cssClass: 'areas',
      componentProps: {
        crimeType: this.selectedCrime,
        routeOptions: routeOptions
      }
    });

    modal.onDidDismiss().then((data: any) => {
      console.log('data', data);
    });

    await modal.present();
  }

  isPointInAreas(lat: any, lng: any, areas: any) : boolean {
  
    let conflicts = 0;
    
    areas.forEach((area: { Y: any; X: any; }) => {
      
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

  async presentAreaModal() {
    const modal = await this.modalController.create({
      component: AreasComponent,
      cssClass: 'areas',
    });

    modal.onDidDismiss().then((data: any) => {
      this.destination = data.data.selectedArea;
      this.arrival = { lat: this.destination.Y, lng: this.destination.X }
      // this.placeMarker(this.destination.Y, this.destination.X)
      // this.getDirection();
    });
    return await modal.present();
  }

  navigate() {

    if (this.destination.Barangay === "") {
      this.commonService.showToast("Please select destination")
      return;
    }

    if (this.selectedCrime === "") {
      this.commonService.showToast("Please select crime type")
      return;
    }

    this.getDirection();
    // let options: LaunchNavigatorOptions = {
    //   start: this.destination.Barangay,
    //   app: this.launchNavigator.APP.GOOGLE_MAPS,
    //   extras: {

    //   }
    // };

    // if (!this.avoidTrafic) {
    //   options.transportMode = this.launchNavigator.TRANSPORT_MODE.DRIVING
    //   options.extras = {
    //     drivingOptions: {
    //       trafficModel: 'pessimistic'
    //     }
    //   }
    // }

    // this.launchNavigator.navigate(this.alternateRoute, options)
    //   .then(
    //     success => this.resetDestination(),
    //     error => alert(error)
    //   );
  }

  resetDestination() {
    this.destination = {
      DateComtd: '',
      TimeComtd: "",
      Barangay: "",
      PlaceType: "",
      X: 0,
      Y: 0,
      CrimeCategory: ''
    }
  }
}
