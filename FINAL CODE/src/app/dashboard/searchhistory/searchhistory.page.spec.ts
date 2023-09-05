import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchhistoryPage } from './searchhistory.page';

describe('SearchhistoryPage', () => {
  let component: SearchhistoryPage;
  let fixture: ComponentFixture<SearchhistoryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SearchhistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
