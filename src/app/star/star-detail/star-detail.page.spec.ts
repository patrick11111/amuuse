import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StarDetailPage } from './star-detail.page';

describe('StarDetailPage', () => {
  let component: StarDetailPage;
  let fixture: ComponentFixture<StarDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StarDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
