import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeaturesinfoPage } from './featuresinfo.page';

describe('FeaturesinfoPage', () => {
  let component: FeaturesinfoPage;
  let fixture: ComponentFixture<FeaturesinfoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FeaturesinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
