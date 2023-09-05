import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CRIME_TYPES } from 'src/app/utils/constants';
import { CommonService } from 'src/app/services/common.service';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-showcrime',
  templateUrl: './showcrime.page.html',
  styleUrls: ['./showcrime.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule, SharedModule]
})
export class ShowcrimePage implements OnInit {

  crimes = CRIME_TYPES;
  selectedCrime: string = '';
  density: Number = 0;
  showHeatMap: boolean = false;
  showClusters: boolean = false;

  constructor(
    private commonService: CommonService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  onChangeHeatMap(event: any) {
    console.log({event})
  }


  async showAreasOnMap() {
    if (!this.selectedCrime) {
      this.commonService.showToast('Please select Crime Type');
      return;
    }

    console.log({
      density: this.density,
      selectedCrime: this.selectedCrime,
      showHeatMap: this.showHeatMap,
      showClusters: this.showClusters
    });

    const modal = await this.modalController.create({
      component: MapComponent,
      cssClass: 'areas',
      componentProps: {
        crimeType: this.selectedCrime,
        density: this.density,
        showHeatMap: this.showHeatMap,
        showClusters: this.showClusters
      }
    });

    modal.onDidDismiss().then((data: any) => {
      console.log('data', data);
    });
    return await modal.present();
  }
}
