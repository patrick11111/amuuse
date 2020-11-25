import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AuthsPage } from './auths.page';

describe('AuthsPage', () => {
  let component: AuthsPage;
  let fixture: ComponentFixture<AuthsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AuthsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
