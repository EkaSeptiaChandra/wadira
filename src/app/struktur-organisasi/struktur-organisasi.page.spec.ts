import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StrukturOrganisasiPage } from './struktur-organisasi.page';

describe('StrukturOrganisasiPage', () => {
  let component: StrukturOrganisasiPage;
  let fixture: ComponentFixture<StrukturOrganisasiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrukturOrganisasiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StrukturOrganisasiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
