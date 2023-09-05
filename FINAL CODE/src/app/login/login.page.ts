import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { CommonService } from '../services/common.service';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {

  email!: string;
  password!: string;
  loading: boolean = false;
  constructor(
    private navCtrl: NavController,
    private commonService: CommonService,
    private firebaseService: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.back();
  }

  async submitForm() {
    if (!this.email) {
      this.commonService.showToast('Email is required');
      return;
    }

    if (!this.commonService.isValidEmail(this.email)) {
      this.commonService.showToast('Email is invalid');
      return;
    }

    if (!this.password) {
      this.commonService.showToast('Password is required');
      return;
    }

    this.loading = true;
    const user = await this.firebaseService.checkIfUserExist(this.email, this.password);
    if (user) {
      console.log('LOGIN SUCCESSFULLY');
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('is_logged_in', '1');
      this.router.navigate(['/dashboard']);
      this.loading = false;
    } else {
      this.commonService.showToast('Email or Password is invalid');
      this.loading = false;
    }
  }
}
