import { Injectable } from '@angular/core';

export interface Todo {
  id: number;
  title: string;
  done: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [];
  private nextId = 1;

  // Read
  getTodos(): Todo[] {
    return [...this.todos];
  }

  // Create
  addTodo(title: string): void {
    this.todos.push({ id: this.nextId++, title, done: false });
  }

  toggleDone(id: number): void {
    const todo = this.todos.find((t) => t.id === id);
    if (todo) todo.done = !todo.done;
  }

  // Update
  editTodo(id: number, title: string): void {
    const todo = this.todos.find((t) => t.id === id);
    if (todo) todo.title = title;
  }

  // Delete
  deleteTodo(id: number): void {
    this.todos = this.todos.filter((t) => t.id !== id);
  }
}
