import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tasks: any[] = [];

  addTask(task: string) {
    this.tasks.push({
      id: this.tasks.length,
      task: task,
    });
    console.log(this.tasks);
  }

  removeTask(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
