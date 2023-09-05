import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private toastController: ToastController, private router: Router) { }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom', // You can adjust the position as per your preference
    });
    toast.present();
  }

  isValidEmail(email: string) {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
    return !!email.match(regex);
  }

  signOut() {
    localStorage.removeItem('is_logged_in');
    this.router.navigate(['/']);
  }

  saveHistory(text: String) {
    let history: any = localStorage.getItem('history');
    if (history) {
      history = JSON.parse(history);
      history.push({
        text: text,
        dateTime: new Date()
      });

    } else {
      history = [{
        text: text,
        dateTime: new Date()
      }]
    }
    localStorage.setItem('history', JSON.stringify(history))
  }

  getHistory () {
    let history: any = localStorage.getItem('history');
    if (history) {
      return JSON.parse(history);
    } 

    return [];
  }
}
