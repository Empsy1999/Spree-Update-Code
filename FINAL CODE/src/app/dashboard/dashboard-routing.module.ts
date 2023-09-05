import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPage } from './dashboard/dashboard.page';
import { AboutPage } from './about/about.page';
import { ZprofilePage } from './zprofile/zprofile.page';
import { HelpandsupportPage } from './helpandsupport/helpandsupport.page';
import { ShowcrimePage } from './showcrime/showcrime.page';
import { FeaturesinfoPage } from './featuresinfo/featuresinfo.page';
import { MapComponent } from './map/map.component';
import { SearchhistoryPage } from './searchhistory/searchhistory.page';
import { ViewsaferroutePage } from './viewsaferroute/viewsaferroute.page';
import { StartnavigationPage } from './startnavigation/startnavigation.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
  },
  {
    path: 'about',
    component: AboutPage,
  },
  {
    path: 'profile',
    component: ZprofilePage,
  },
  {
    path: 'help',
    component: HelpandsupportPage,
  },
  {
    path: 'show-crime',
    component: ShowcrimePage,
  },
  {
    path: 'feature-info',
    component: FeaturesinfoPage,
  },
  {
    path: 'map',
    component: MapComponent,
  },
  {
    path: 'history',
    component: SearchhistoryPage,
  },
  {
    path: 'safe-route',
    component: ViewsaferroutePage,
  },
  {
    path: 'navigation',
    component: StartnavigationPage,
  }
];

@NgModule({
  declarations: [
    
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
