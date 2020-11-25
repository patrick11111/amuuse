import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StarsdetailsPage } from './starsdetails.page';

describe('StarsdetailsPage', () => {
  let component: StarsdetailsPage;
  let fixture: ComponentFixture<StarsdetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarsdetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StarsdetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
