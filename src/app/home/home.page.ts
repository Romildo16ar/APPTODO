import { Component } from '@angular/core';
import {
  AlertController,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonButton,
  IonButtons,
  IonList,
  IonItem,
  IonLabel,
  IonCheckbox,
  IonIcon,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  checkmarkOutline,
  closeOutline,
  createOutline,
  trashOutline,
} from 'ionicons/icons';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoService, Todo } from '../todo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonInput,
    IonButton,
    IonButtons,
    IonList,
    IonItem,
    IonLabel,
    IonCheckbox,
    IonIcon,
  ],
})
export class HomePage {
  todos: Todo[] = [];
  newTitle = '';
  editId: number | null = null;
  editTitle = '';

  constructor(
    private todoService: TodoService,
    private alertController: AlertController,
  ) {
    // No Ionic standalone os ícones precisam ser registrados manualmente.
    addIcons({ createOutline, trashOutline, checkmarkOutline, closeOutline });
    this.loadTodos();
  }

  loadTodos() {
    this.todos = this.todoService.getTodos();
  }

  addTodo() {
    if (this.newTitle.trim()) {
      this.todoService.addTodo(this.newTitle.trim());
      this.newTitle = '';
      this.loadTodos();
    }
  }

  toggleDone(id: number) {
    this.todoService.toggleDone(id);
    this.loadTodos();
  }

  // ----- Update -----

  startEdit(todo: Todo) {
    this.editId = todo.id;
    this.editTitle = todo.title;
  }

  saveEdit() {
    if (this.editId !== null && this.editTitle.trim()) {
      this.todoService.editTodo(this.editId, this.editTitle.trim());
      this.cancelEdit();
      this.loadTodos();
    }
  }

  cancelEdit() {
    this.editId = null;
    this.editTitle = '';
  }

  // ----- Delete -----

  async confirmDelete(todo: Todo) {
    const alert = await this.alertController.create({
      header: 'Excluir tarefa',
      message: `Deseja realmente excluir "${todo.title}"?`,
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Excluir',
          role: 'destructive',
          handler: () => this.deleteTodo(todo.id),
        },
      ],
    });
    await alert.present();
  }

  deleteTodo(id: number) {
    if (this.editId === id) this.cancelEdit();
    this.todoService.deleteTodo(id);
    this.loadTodos();
  }
}
