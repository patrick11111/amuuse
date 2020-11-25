import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BecomeastarsPage } from './becomeastars.page';

describe('BecomeastarsPage', () => {
  let component: BecomeastarsPage;
  let fixture: ComponentFixture<BecomeastarsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BecomeastarsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BecomeastarsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
