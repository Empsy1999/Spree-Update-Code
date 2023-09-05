import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
// Import the functions you need from the SDKs you need
import { NavController } from '@ionic/angular';

import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';
import { FirebaseService } from '../services/firebase.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',

  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class SignupPage implements OnInit {
  name!: string;
  email!: string;
  password!: string;
  confirmPassword!: string;
  validIdPicture!: any;
  fileContents: any;
  filePath!: string;
  image: string = '';
  loading: boolean = false;
  constructor(private navCtrl: NavController, private router: Router, private commonService: CommonService, private firebaseService: FirebaseService) {}

  ngOnInit() { }

  goBack() {
    this.navCtrl.back();
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
  submitForm = async () => {

    this.loading = true;

    if (this.name == '') {
      this.commonService.showToast('Name is required');
      this.loading = false;
      return;
    }

    if (this.email == '') {
      this.commonService.showToast('Email is required');
      this.loading = false;
      return;
    }

    if (this.password == '') {
      this.commonService.showToast('Password is required');
      this.loading = false;
      return;
    }
    if (this.confirmPassword == '') {
      this.commonService.showToast('Confirm Password is required');
      this.loading = false;
      return;
    }
    if (this.password !== this.confirmPassword) {
      this.commonService.showToast('Confirm Password is not matched');
      this.loading = false;
      return;
    }

    if (!this.validIdPicture) {
      this.commonService.showToast('Valid Picture is required');
      this.loading = false;
      return;
    }

    if (!this.commonService.isValidEmail(this.email)) {
      this.commonService.showToast('Email is invalid');
      this.loading = false;
      return;
    }
    const isEmailExists = await this.firebaseService.checkIfEmailExist(this.email);

    if (isEmailExists) {
      this.commonService.showToast('Email already taken');
      this.loading = false;
      return;
    }

    if (this.validIdPicture) {
      this.filePath = await this.firebaseService.uploadImage(this.fileContents, this.validIdPicture.name);
    }

    const user = {
      name: this.name,
      email: this.email,
      password: this.password,
      ...(this.filePath ? {image: this.filePath} : {})
    }
    try {
      await this.firebaseService.signupNewUser(user)
      this.commonService.showToast('Signup Successfully');
      this.router.navigate(['/home/login'])
    } catch (error: any) {
      this.loading = false;
      console.log('error', error);
      this.commonService.showToast(error);
    }
  }

}
