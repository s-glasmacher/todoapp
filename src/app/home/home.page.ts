import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToDoItem } from '../models/todoItem';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private toDoItems: ToDoItem[] = [];

  constructor(
    private alertCtrl: AlertController,
    private restService: RestService
  ) {
    this.restService.getAllToDos().subscribe(data => {
        this.toDoItems = [];
        this.toDoItems.push(...data);
    },
    error => {
      console.log('Rest service threw an error', error);
    }
    );
  }

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
            let newToDo = new ToDoItem(alertData.label);
            this.restService.postToDo(newToDo).subscribe(data => {
              this.toDoItems.push(data);
            });
          }
        }
      ]
    });

    await alert.present();
  }



}
