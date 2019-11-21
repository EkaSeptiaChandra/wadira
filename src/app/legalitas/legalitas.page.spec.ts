import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LegalitasPage } from './legalitas.page';

describe('LegalitasPage', () => {
  let component: LegalitasPage;
  let fixture: ComponentFixture<LegalitasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalitasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LegalitasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
