import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule, FormsModule]
})
export class AboutPage implements OnInit {

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    console.log("test");
    
  }

  signOut() {
    this.commonService.signOut();
  }

}
