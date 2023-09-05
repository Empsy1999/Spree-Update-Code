import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { DashboardModule } from "../dashboard.module";
import { SharedModule } from '../shared/shared.module';

@Component({
    selector: 'app-zprofile',
    templateUrl: './zprofile.page.html',
    styleUrls: ['./zprofile.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule, RouterModule, SharedModule]
})
export class ZprofilePage implements OnInit {

  profile!: any;
  validIdPicture: any;
  fileContents: any;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    let user = localStorage.getItem('user');
    if (user) {
      user = JSON.parse(user);
      this.profile = user;
    }
  }

  signOut() {
    this.commonService.signOut();
  }

  uploadImage() {
    
  }
  onFileChange(event: any) {
    const files = event.target.files;
    if (files && files.length > 0) {
      this.validIdPicture = files[0];

      const fileReader = new FileReader();
      fileReader.onload = async (e) => {
        this.fileContents = fileReader.result;
      };
      fileReader.readAsDataURL(this.validIdPicture);
    }
  }
}
