import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, OnChanges, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { MAP_STYLES } from 'src/app/utils/constants';
import { AreasComponent } from '../areas/areas.component';
import { Place } from 'src/app/utils/interfaces';

declare var google: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule, FormsModule],
})
export class DashboardPage implements OnInit {

  @ViewChild('map')
  mapRef!: any;
  newMap!: any;
  mapStyles = MAP_STYLES;

  @ViewChild('autocomplete')
  autocompleteInput!: any;

  userPosition: any;

  destination: Place;

  suggestedRoutes: boolean = false;

  userAddress: string = 'Asin Road';

  constructor(private router: Router, private commonService: CommonService, public modalController: ModalController) {
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
    const isLoggedIn = localStorage.getItem('is_logged_in');
    if (!isLoggedIn) {
      this.router.navigate(['/home']);
      return;
    }
  }

  ionViewDidEnter() {
    setTimeout(async () => {
      await this.createMap();
      // this.initAutocomplete();

    }, 1500);
  }


  goToAbout() {
    this.router.navigate(['/about'])
  }

  signOut() {
    this.commonService.signOut();
  }

  async createMap() {
    this.newMap = new google.maps.Map(document.getElementById('map'), {
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
      streetViewControlOptions: {
        position: google.maps.ControlPosition.RIGHT_CENTER,
      },
      fullscreenControl: false,
      styles: this.mapStyles
    });
  }

  initAutocomplete() {
    // const options = {
    //   fields: ["formatted_address", "geometry", "name"],
    //   strictBounds: false,
    //   types: ["establishment"],
    // };

    const circle = new google.maps.Circle({ center: new google.maps.LatLng(16.402218, 120.569668), radius: 12000 })
    const autocomplete = new google.maps.places.Autocomplete(this.autocompleteInput.nativeElement, { types: ['geocode'], bounds: circle.getBounds(), strictBounds: true });

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      console.log(place);

      const { location } = place?.geometry;
      const latLng = { lat: location.lat(), lng: location.lng() }
      console.log({ latLng })
      const marker = new google.maps.Marker({
        map: this.newMap,
        icon: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png'
      });
      marker.setPosition(location)

      const bounds = new google.maps.LatLngBounds();
      bounds.extend(latLng);
      this.newMap.fitBounds(bounds);

    });
  }

  placeMarker(lat: Number, lng: Number) {
    const latLng = { lat, lng }

    const marker = new google.maps.Marker({
      map: this.newMap,
      icon: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png'
    });
    marker.setPosition(latLng)

    const bounds = new google.maps.LatLngBounds();
    bounds.extend(latLng);
    this.newMap.fitBounds(bounds);
  }

  getCurrentPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log('-----position---', position)
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          this.userPosition = pos;
          this.newMap.setCenter(pos);
          this.placeMarker(pos.lat, pos.lng);

          let geocoder = new google.maps.Geocoder();
          let latlng = new google.maps.LatLng(pos.lat, pos.lng);

          geocoder.geocode({ 'latLng': latlng }, (results: any, status: any) => {
            if (status == google.maps.GeocoderStatus.OK) {
              if (results[0]) {
                this.userAddress = results[0].formatted_address;
              } 
              
            } 
          });
        },
        () => {
          console.log('error')
        }
      );
    }
  }

  async presentAreaModal() {
    const modal = await this.modalController.create({
      component: AreasComponent,
      cssClass: 'areas',
    });

    modal.onDidDismiss().then((data: any) => {
      this.destination = data.data.selectedArea;
      this.placeMarker(this.destination.Y, this.destination.X);
      this.getSuggestedRoute();
      this.commonService.saveHistory(this.destination.Barangay)
     
    });
    return await modal.present();
  }

  ignoreSuggestedRoutes() {
    this.suggestedRoutes = false;
    this.commonService.showToast('Suggested Routes ignored');
  }

  applySuggestedRoutes() {
    this.suggestedRoutes = true;
    this.commonService.showToast('Suggested Routes applied');
  }

  getSuggestedRoute() {
    if (!this.suggestedRoutes || !this.userAddress || !this.destination) return;
    let directionsService = new google.maps.DirectionsService();
    let directionsRenderer = new google.maps.DirectionsRenderer();

    directionsRenderer.setMap(this.newMap);

    var request = {
      origin: this.userAddress,
      destination: this.destination.Barangay,
      travelMode: 'DRIVING'
    };

    directionsService.route(request, function (result: any, status: string) {
      if (status == 'OK') {
        directionsRenderer.setDirections(result);
      }
    });

  }
}
