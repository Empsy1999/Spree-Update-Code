import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { AREAS } from 'src/app/utils/constants';
import { Place } from 'src/app/utils/interfaces';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class AreasComponent implements OnInit {

  areas: Place[] = AREAS

  selectedArea!: Place;
  constructor(private modalController: ModalController) { }

  ngOnInit() { }

  selectArea(area: Place) {
    this.selectedArea = area;
    this.dismiss();
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true,
      'selectedArea': this.selectedArea
    });
  }

}
