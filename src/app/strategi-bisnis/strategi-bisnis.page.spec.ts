import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StrategiBisnisPage } from './strategi-bisnis.page';

describe('StrategiBisnisPage', () => {
  let component: StrategiBisnisPage;
  let fixture: ComponentFixture<StrategiBisnisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrategiBisnisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StrategiBisnisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
