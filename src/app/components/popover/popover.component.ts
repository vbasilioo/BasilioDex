import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent {

  constructor(private popoverController: PopoverController) { }

  close(option: string){
    this.popoverController.dismiss({
      dismissed: true,
      option
    });
  }
}
