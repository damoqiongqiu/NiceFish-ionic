import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { WeChatApp } from './app.component';
import { MsgList } from '../pages/msg-list/msg-list';
import { Contacts } from '../pages/contacts/contacts';
import { Discover } from '../pages/discover/discover';
import { AboutMe } from '../pages/about-me/about-me';
import { PopoverPage } from '../pages/msg-list/popover-page';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    WeChatApp,
    MsgList,
    Contacts,
    Discover,
    AboutMe,
    PopoverPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(WeChatApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    WeChatApp,
    MsgList,
    Contacts,
    Discover,
    AboutMe,
    PopoverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
