import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailReviewPage } from './detail-review.page';

describe('DetailReviewPage', () => {
  let component: DetailReviewPage;
  let fixture: ComponentFixture<DetailReviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailReviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailReviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
