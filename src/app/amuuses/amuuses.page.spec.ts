import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AmuusesPage } from './amuuses.page';

describe('AmuusesPage', () => {
  let component: AmuusesPage;
  let fixture: ComponentFixture<AmuusesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmuusesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AmuusesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
