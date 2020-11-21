import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YourstarprofilesPage } from './yourstarprofiles.page';

describe('YourstarprofilesPage', () => {
  let component: YourstarprofilesPage;
  let fixture: ComponentFixture<YourstarprofilesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourstarprofilesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YourstarprofilesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
