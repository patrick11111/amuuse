import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YourbookingsPage } from './yourbookings.page';

describe('YourbookingsPage', () => {
  let component: YourbookingsPage;
  let fixture: ComponentFixture<YourbookingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourbookingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YourbookingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
