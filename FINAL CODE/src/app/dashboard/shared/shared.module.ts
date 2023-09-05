import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomTabsComponent } from '../common/bottom-tabs/bottom-tabs.component';
import { RouterModule } from '@angular/router';
import { PreferencesComponent } from '../common/preferences/preferences.component';



@NgModule({
  declarations: [BottomTabsComponent, PreferencesComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [BottomTabsComponent, PreferencesComponent]
})
export class SharedModule { }
