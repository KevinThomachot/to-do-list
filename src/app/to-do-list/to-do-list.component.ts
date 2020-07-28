import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  tasks: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addTask(taskInput): void {

    this.tasks.push(taskInput);
  }

  removeTask(tasks) {
    this.tasks.splice(tasks, 1)
  }

}
