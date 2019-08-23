import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToDoItem } from '../models/todoItem';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private toDoItems: ToDoItem[] = [];

  constructor(
    private alertCtrl: AlertController
  ) {}

  async addToDoDialog() {
    let alert = await this.alertCtrl.create({
      header: "Add Task",
      inputs: [
        {
          name: 'label',
          type: 'text', 
          placeholder: 'description'
        }
      ], 
      buttons: [
        {
          text: 'Cancel', 
          role: 'cancel', 
          cssClass: 'secondary'
        },
        {
          text: 'Ok', 
          handler: alertData => {
            this.toDoItems.push(new ToDoItem(alertData.label));
          }
        }
      ]
    });

    await alert.present();
  }



}
