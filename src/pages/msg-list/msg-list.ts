import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { PopoverPage } from './popover-page';

@Component({
  selector: 'msg-list',
  templateUrl: 'msg-list.html'
})
export class MsgList {
	constructor(
		private popoverCtrl: PopoverController,
		public navCtrl: NavController
	) {

  	}

  	presentPopover(ev) {
	    let popover = this.popoverCtrl.create(PopoverPage);
	    popover.present({
	      ev: ev
	    });
	}
}