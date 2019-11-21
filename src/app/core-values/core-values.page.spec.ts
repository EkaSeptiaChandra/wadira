import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoreValuesPage } from './core-values.page';

describe('CoreValuesPage', () => {
  let component: CoreValuesPage;
  let fixture: ComponentFixture<CoreValuesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreValuesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoreValuesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
