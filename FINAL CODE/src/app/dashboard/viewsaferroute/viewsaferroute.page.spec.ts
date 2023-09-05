import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewsaferroutePage } from './viewsaferroute.page';

describe('ViewsaferroutePage', () => {
  let component: ViewsaferroutePage;
  let fixture: ComponentFixture<ViewsaferroutePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViewsaferroutePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
