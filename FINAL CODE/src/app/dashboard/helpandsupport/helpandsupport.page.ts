import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-helpandsupport',
  templateUrl: './helpandsupport.page.html',
  styleUrls: ['./helpandsupport.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, SharedModule, RouterModule]
})
export class HelpandsupportPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
