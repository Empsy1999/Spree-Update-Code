import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-bottom-tabs',
  templateUrl: './bottom-tabs.component.html',
  styleUrls: ['./bottom-tabs.component.scss'],
})
export class BottomTabsComponent  implements OnInit {

  constructor(private commonService: CommonService) { }

  ngOnInit() {}

  signOut() {
    this.commonService.signOut();
  }

}
