import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss'],
})
export class PreferencesComponent  implements OnInit {

  constructor(private commonService: CommonService) { }

  ngOnInit() {}

  makeItOffline() {
    this.commonService.showToast('Switch your data off to use it offline')
  }

}
