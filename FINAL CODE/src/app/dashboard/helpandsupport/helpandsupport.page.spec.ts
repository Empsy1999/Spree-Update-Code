import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HelpandsupportPage } from './helpandsupport.page';

describe('HelpandsupportPage', () => {
  let component: HelpandsupportPage;
  let fixture: ComponentFixture<HelpandsupportPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HelpandsupportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
