import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-searchhistory',
  templateUrl: './searchhistory.page.html',
  styleUrls: ['./searchhistory.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, SharedModule, RouterModule]
})
export class SearchhistoryPage implements OnInit {
  history: any = [];

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    // this.history = this.commonService.getHistory()
  }

  ionViewDidEnter() {
    this.history = this.commonService.getHistory()
  }

  


}
