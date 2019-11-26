import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Beranda',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Tentang Kami',
      url: '/about-us',
      icon: 'people'
    },
    {
      title: 'Visi Dan Misi',
      url: '/visi-misi',
      icon: 'medal'
    },
    {
      title: 'Core Values',
      url: '/core-values',
      icon: 'aperture'
    },
    {
      title: 'Strategi Bisnis',
      url: '/strategi-bisnis',
      icon: 'briefcase'
    },
    {
      title: 'Legalitas',
      url: '/legalitas',
      icon: 'ribbon'
    },
    {
      title: 'Kontak Kami',
      url: '/kontak-kami',
      icon: 'call'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
