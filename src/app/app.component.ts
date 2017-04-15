import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MsgList } from '../pages/msg-list/msg-list';
import { Contacts } from '../pages/contacts/contacts';
import { Discover } from '../pages/discover/discover';
import { AboutMe } from '../pages/about-me/about-me';

@Component({
  templateUrl: 'app.html'
})
export class WeChatApp {
  //底部的4个主Tab
  msgList: any = MsgList;
  contacts: any = Contacts;
  discover: any = Discover;
  aboutMe: any = AboutMe;

  isAndroid: boolean = false;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    this.isAndroid = platform.is('android');
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    // this.nav.setRoot(page.component);
  }
}
