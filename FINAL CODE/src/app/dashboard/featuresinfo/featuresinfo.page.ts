import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-featuresinfo',
  templateUrl: './featuresinfo.page.html',
  styleUrls: ['./featuresinfo.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, SharedModule, RouterModule]
})
export class FeaturesinfoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
