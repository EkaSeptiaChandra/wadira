import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
  {
    path: 'visi-misi',
    loadChildren: () => import('./visi-misi/visi-misi.module').then( m => m.VisiMisiPageModule)
  },
  {
    path: 'core-values',
    loadChildren: () => import('./core-values/core-values.module').then( m => m.CoreValuesPageModule)
  },
  {
    path: 'strategi-bisnis',
    loadChildren: () => import('./strategi-bisnis/strategi-bisnis.module').then( m => m.StrategiBisnisPageModule)
  },
  {
    path: 'produk-layanan',
    loadChildren: () => import('./produk-layanan/produk-layanan.module').then( m => m.ProdukLayananPageModule)
  },
  {
    path: 'struktur-organisasi',
    loadChildren: () => import('./struktur-organisasi/struktur-organisasi.module').then( m => m.StrukturOrganisasiPageModule)
  },
  {
    path: 'legalitas',
    loadChildren: () => import('./legalitas/legalitas.module').then( m => m.LegalitasPageModule)
  },
  {
    path: 'kontak-kami',
    loadChildren: () => import('./kontak-kami/kontak-kami.module').then( m => m.KontakKamiPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
