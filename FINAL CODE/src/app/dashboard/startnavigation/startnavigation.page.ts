import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { LaunchNavigator, LaunchNavigatorOptions } from '@awesome-cordova-plugins/launch-navigator/ngx';
import { AreasComponent } from '../areas/areas.component';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-startnavigation',
  templateUrl: './startnavigation.page.html',
  styleUrls: ['./startnavigation.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, SharedModule],
  providers: [LaunchNavigator]
})
export class StartnavigationPage implements OnInit {

  isAlertOpen: boolean = false;
  public alertButtons = ['OK'];
  reportText!: string;

  source: any = [16.402218, 120.569668] // source lat,long

  destination!: any;
  selectedDestination!: any;

  constructor(private launchNavigator: LaunchNavigator, private modalController: ModalController, private commonService: CommonService) {
    this.resetDestination()
   }

  ngOnInit() {
    this.getCurrentPosition();
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


  submitReport() {
    this.isAlertOpen = !this.isAlertOpen;
    this.reportText = ''
  }

  navigate() {

    if (this.destination.Barangay === "") {
      this.commonService.showToast("Please select destination")
      return;
    }
    let options: LaunchNavigatorOptions = {
      start: this.source,
      app: this.launchNavigator.APP.GOOGLE_MAPS
   };
   
    this.launchNavigator.navigate(this.selectedDestination, options)
      .then(
       success => this.resetDestination(),
       error => console.log('error occurred')
    );
  }

  async presentAreaModal() {
    const modal = await this.modalController.create({
      component: AreasComponent,
      cssClass: 'areas',
    });

    modal.onDidDismiss().then((data: any) => {
      this.destination = data.data.selectedArea;
      this.selectedDestination = [data.data.selectedArea.Y, data.data.selectedArea.X];
      console.log(this.destination)
    });
    return await modal.present();
  }

  getCurrentPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.source = [position.coords.latitude, position.coords.longitude];
        },
        () => {
          console.log('error')
        }
      );
    }
  }
}
