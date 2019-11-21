import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProdukLayananPage } from './produk-layanan.page';

describe('ProdukLayananPage', () => {
  let component: ProdukLayananPage;
  let fixture: ComponentFixture<ProdukLayananPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdukLayananPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProdukLayananPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
