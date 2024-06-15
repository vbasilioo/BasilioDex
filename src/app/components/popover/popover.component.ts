import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent {

  constructor(
    private popoverController: PopoverController,
    private navCtrl: NavController
  ) { }

  close(option: string){
    this.popoverController.dismiss({
      dismissed: true,
      option
    });
  }

  goToFavorites(){
    this.navCtrl.navigateForward('favorites');
    this.close('favorites');
  }
}
