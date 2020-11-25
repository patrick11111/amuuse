import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FindyourstarsPage } from './findyourstars.page';

describe('FindyourstarsPage', () => {
  let component: FindyourstarsPage;
  let fixture: ComponentFixture<FindyourstarsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindyourstarsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FindyourstarsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
