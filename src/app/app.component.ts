import { Component } from '@angular/core';

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

  constructor() {
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    // this.nav.setRoot(page.component);
  }
}
