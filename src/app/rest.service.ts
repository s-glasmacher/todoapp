import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ToDoItem } from './models/todoItem';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  url: string = "http://localhost:5000/"

  constructor(
    private http: HttpClient
  ) { }

  getAllToDos(): Observable<ToDoItem[]>{
    return this.http.get<ToDoItem[]>(this.url)
        .pipe(
          map(data => {
            let allToDos = [];
            for(let item of data) {
              allToDos.push(new ToDoItem(item.description));
            }
            return allToDos;
          })
        );
  }

  // work in progress: the body of the request can't be properly read by python-flask
  postToDo(newItem: ToDoItem): Observable<ToDoItem> {
    return this.http.post<ToDoItem>(this.url, JSON.stringify(newItem))
        .pipe(
          map(data => {
            let returned = new ToDoItem(data.description);
            returned.id = data.id;
            return returned;
          })
        );
  }
}
