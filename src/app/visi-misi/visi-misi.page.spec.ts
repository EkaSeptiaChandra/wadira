import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VisiMisiPage } from './visi-misi.page';

describe('VisiMisiPage', () => {
  let component: VisiMisiPage;
  let fixture: ComponentFixture<VisiMisiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisiMisiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VisiMisiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
