import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailProfilePage } from './detail-profile.page';

describe('DetailProfilePage', () => {
  let component: DetailProfilePage;
  let fixture: ComponentFixture<DetailProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
