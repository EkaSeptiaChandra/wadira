import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KontakKamiPage } from './kontak-kami.page';

describe('KontakKamiPage', () => {
  let component: KontakKamiPage;
  let fixture: ComponentFixture<KontakKamiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KontakKamiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KontakKamiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
