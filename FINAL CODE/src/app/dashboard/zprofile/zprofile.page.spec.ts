import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ZprofilePage } from './zprofile.page';

describe('ZprofilePage', () => {
  let component: ZprofilePage;
  let fixture: ComponentFixture<ZprofilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ZprofilePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ZprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});