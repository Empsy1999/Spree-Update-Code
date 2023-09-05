import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowcrimePage } from './showcrime.page';

describe('ShowcrimePage', () => {
  let component: ShowcrimePage;
  let fixture: ComponentFixture<ShowcrimePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ShowcrimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
