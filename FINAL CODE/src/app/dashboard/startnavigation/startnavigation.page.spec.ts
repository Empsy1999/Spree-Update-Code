import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StartnavigationPage } from './startnavigation.page';

describe('StartnavigationPage', () => {
  let component: StartnavigationPage;
  let fixture: ComponentFixture<StartnavigationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StartnavigationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
