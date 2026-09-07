import {
  AlertController,
  CommonModule,
  Component,
  FormsModule,
  Injectable,
  IonButton,
  IonButtons,
  IonCheckbox,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-C3FJ4KSH.js";
import "./chunk-7JBBV5MQ.js";
import "./chunk-T5LCTCQ6.js";
import "./chunk-OM7KRGIS.js";
import "./chunk-WNZXVH2S.js";
import "./chunk-HWNEMDPT.js";
import "./chunk-2JIYNMFY.js";
import "./chunk-ELTLXXM6.js";
import "./chunk-7GPIVXJN.js";
import "./chunk-CEAAMTO4.js";
import "./chunk-256GWCFY.js";
import "./chunk-5EU4VLVR.js";
import "./chunk-GZ5BDCOT.js";
import "./chunk-HUY7ESWV.js";
import "./chunk-GXFEW35R.js";
import {
  __async
} from "./chunk-QHQP2P2Z.js";

// node_modules/ionicons/dist/esm-es5/utils-2c56d1c8.js
var CACHED_MAP;
var getIconMap = function() {
  if (typeof window === "undefined") {
    return /* @__PURE__ */ new Map();
  } else {
    if (!CACHED_MAP) {
      var t = window;
      t.Ionicons = t.Ionicons || {};
      CACHED_MAP = t.Ionicons.map = t.Ionicons.map || /* @__PURE__ */ new Map();
    }
    return CACHED_MAP;
  }
};
var addIcons = function(t) {
  Object.keys(t).forEach((function(e) {
    addToIconMap(e, t[e]);
    var r = e.replace(/([a-z0-9]|(?=[A-Z]))([A-Z0-9])/g, "$1-$2").toLowerCase();
    if (e !== r) {
      addToIconMap(r, t[e]);
    }
  }));
};
var addToIconMap = function(t, e) {
  var r = getIconMap();
  var n = r.get(t);
  if (n === void 0) {
    r.set(t, e);
  } else if (n !== e) {
    console.warn('[Ionicons Warning]: Multiple icons were mapped to name "'.concat(t, '". Ensure that multiple icons are not mapped to the same icon name.'));
  }
};

// node_modules/ionicons/icons/index.mjs
var checkmarkOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var closeOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M368 368L144 144M368 144L144 368' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var createOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path d='M459.94 53.25a16.06 16.06 0 00-23.22-.56L424.35 65a8 8 0 000 11.31l11.34 11.32a8 8 0 0011.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38zM399.34 90L218.82 270.2a9 9 0 00-2.31 3.93L208.16 299a3.91 3.91 0 004.86 4.86l24.85-8.35a9 9 0 003.93-2.31L422 112.66a9 9 0 000-12.66l-9.95-10a9 9 0 00-12.71 0z'/></svg>";
var trashOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M80 112h352' class='ionicon-stroke-width'/><path d='M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";

// src/app/todo.service.ts
var _TodoService = class _TodoService {
  constructor() {
    this.todos = [];
    this.nextId = 1;
  }
  // Read
  getTodos() {
    return [...this.todos];
  }
  // Create
  addTodo(title) {
    this.todos.push({ id: this.nextId++, title, done: false });
  }
  toggleDone(id) {
    const todo = this.todos.find((t) => t.id === id);
    if (todo)
      todo.done = !todo.done;
  }
  // Update
  editTodo(id, title) {
    const todo = this.todos.find((t) => t.id === id);
    if (todo)
      todo.title = title;
  }
  // Delete
  deleteTodo(id) {
    this.todos = this.todos.filter((t) => t.id !== id);
  }
};
_TodoService.\u0275fac = function TodoService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TodoService)();
};
_TodoService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TodoService, factory: _TodoService.\u0275fac, providedIn: "root" });
var TodoService = _TodoService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TodoService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/home/home.page.ts
function HomePage_ion_item_14_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-input", 11);
    \u0275\u0275twoWayListener("ngModelChange", function HomePage_ion_item_14_ng_container_1_Template_ion_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.editTitle, $event) || (ctx_r1.editTitle = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function HomePage_ion_item_14_ng_container_1_Template_ion_input_keyup_enter_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.saveEdit());
    })("keyup.escape", function HomePage_ion_item_14_ng_container_1_Template_ion_input_keyup_escape_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cancelEdit());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "ion-buttons", 12)(3, "ion-button", 13);
    \u0275\u0275listener("click", function HomePage_ion_item_14_ng_container_1_Template_ion_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.saveEdit());
    });
    \u0275\u0275element(4, "ion-icon", 14);
    \u0275\u0275text(5, " SALVAR ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ion-button", 15);
    \u0275\u0275listener("click", function HomePage_ion_item_14_ng_container_1_Template_ion_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cancelEdit());
    });
    \u0275\u0275element(7, "ion-icon", 16);
    \u0275\u0275text(8, " CANCELAR ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editTitle);
  }
}
function HomePage_ion_item_14_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-checkbox", 17);
    \u0275\u0275listener("ionChange", function HomePage_ion_item_14_ng_template_2_Template_ion_checkbox_ionChange_0_listener() {
      \u0275\u0275restoreView(_r3);
      const todo_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleDone(todo_r4.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "ion-label");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ion-buttons", 12)(4, "ion-button", 18);
    \u0275\u0275listener("click", function HomePage_ion_item_14_ng_template_2_Template_ion_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const todo_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startEdit(todo_r4));
    });
    \u0275\u0275element(5, "ion-icon", 19);
    \u0275\u0275text(6, " EDITAR ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ion-button", 20);
    \u0275\u0275listener("click", function HomePage_ion_item_14_ng_template_2_Template_ion_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const todo_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDelete(todo_r4));
    });
    \u0275\u0275element(8, "ion-icon", 21);
    \u0275\u0275text(9, " EXCLUIR ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const todo_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("checked", todo_r4.done);
    \u0275\u0275advance();
    \u0275\u0275classProp("done", todo_r4.done);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(todo_r4.title);
  }
}
function HomePage_ion_item_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item");
    \u0275\u0275template(1, HomePage_ion_item_14_ng_container_1_Template, 9, 1, "ng-container", 10)(2, HomePage_ion_item_14_ng_template_2_Template, 10, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const todo_r4 = ctx.$implicit;
    const viewMode_r5 = \u0275\u0275reference(3);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.editId === todo_r4.id)("ngIfElse", viewMode_r5);
  }
}
function HomePage_p_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1, "Nenhuma tarefa cadastrada.");
    \u0275\u0275elementEnd();
  }
}
var _HomePage = class _HomePage {
  constructor(todoService, alertController) {
    this.todoService = todoService;
    this.alertController = alertController;
    this.todos = [];
    this.newTitle = "";
    this.editId = null;
    this.editTitle = "";
    addIcons({ createOutline, trashOutline, checkmarkOutline, closeOutline });
    this.loadTodos();
  }
  loadTodos() {
    this.todos = this.todoService.getTodos();
  }
  addTodo() {
    if (this.newTitle.trim()) {
      this.todoService.addTodo(this.newTitle.trim());
      this.newTitle = "";
      this.loadTodos();
    }
  }
  toggleDone(id) {
    this.todoService.toggleDone(id);
    this.loadTodos();
  }
  // ----- Update -----
  startEdit(todo) {
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
    this.editTitle = "";
  }
  // ----- Delete -----
  confirmDelete(todo) {
    return __async(this, null, function* () {
      const alert = yield this.alertController.create({
        header: "Excluir tarefa",
        message: `Deseja realmente excluir "${todo.title}"?`,
        buttons: [
          { text: "Cancelar", role: "cancel" },
          {
            text: "Excluir",
            role: "destructive",
            handler: () => this.deleteTodo(todo.id)
          }
        ]
      });
      yield alert.present();
    });
  }
  deleteTodo(id) {
    if (this.editId === id)
      this.cancelEdit();
    this.todoService.deleteTodo(id);
    this.loadTodos();
  }
};
_HomePage.\u0275fac = function HomePage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HomePage)(\u0275\u0275directiveInject(TodoService), \u0275\u0275directiveInject(AlertController));
};
_HomePage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomePage, selectors: [["app-home"]], decls: 16, vars: 5, consts: [["viewMode", ""], [3, "translucent"], [3, "fullscreen"], ["collapse", "condense"], ["size", "large"], ["id", "container"], ["placeholder", "Nova tarefa", 3, "ngModelChange", "keyup.enter", "ngModel"], ["expand", "block", 3, "click"], [4, "ngFor", "ngForOf"], ["class", "empty", 4, "ngIf"], [4, "ngIf", "ngIfElse"], [3, "ngModelChange", "keyup.enter", "keyup.escape", "ngModel"], ["slot", "end"], ["color", "success", 3, "click"], ["slot", "start", "name", "checkmark-outline"], ["color", "medium", 3, "click"], ["slot", "start", "name", "close-outline"], ["slot", "start", 3, "ionChange", "checked"], [3, "click"], ["slot", "start", "name", "create-outline"], ["color", "danger", 3, "click"], ["slot", "start", "name", "trash-outline"], [1, "empty"]], template: function HomePage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header", 1)(1, "ion-toolbar")(2, "ion-title");
    \u0275\u0275text(3, " Tarefas ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "ion-content", 2)(5, "ion-header", 3)(6, "ion-toolbar")(7, "ion-title", 4);
    \u0275\u0275text(8, "Tarefas");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 5)(10, "ion-input", 6);
    \u0275\u0275twoWayListener("ngModelChange", function HomePage_Template_ion_input_ngModelChange_10_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.newTitle, $event) || (ctx.newTitle = $event);
      return $event;
    });
    \u0275\u0275listener("keyup.enter", function HomePage_Template_ion_input_keyup_enter_10_listener() {
      return ctx.addTodo();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "ion-button", 7);
    \u0275\u0275listener("click", function HomePage_Template_ion_button_click_11_listener() {
      return ctx.addTodo();
    });
    \u0275\u0275text(12, "Adicionar");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "ion-list");
    \u0275\u0275template(14, HomePage_ion_item_14_Template, 4, 2, "ion-item", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, HomePage_p_15_Template, 2, 0, "p", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("translucent", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx.newTitle);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx.todos);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.todos.length === 0);
  }
}, dependencies: [
  CommonModule,
  NgForOf,
  NgIf,
  FormsModule,
  NgControlStatus,
  NgModel,
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
  IonIcon
], styles: ["\n\n#container[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 16px;\n}\n.done[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  color: #888;\n}\n.empty[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #888;\n  margin-top: 24px;\n}\nion-buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  font-size: 12px;\n  letter-spacing: 0.5px;\n}\n/*# sourceMappingURL=home.page.css.map */"] });
var HomePage = _HomePage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomePage, [{
    type: Component,
    args: [{ selector: "app-home", imports: [
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
      IonIcon
    ], template: '<ion-header [translucent]="true">\n  <ion-toolbar>\n    <ion-title> Tarefas </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]="true">\n  <ion-header collapse="condense">\n    <ion-toolbar>\n      <ion-title size="large">Tarefas</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <div id="container">\n    <ion-input\n      placeholder="Nova tarefa"\n      [(ngModel)]="newTitle"\n      (keyup.enter)="addTodo()"\n    ></ion-input>\n    <ion-button expand="block" (click)="addTodo()">Adicionar</ion-button>\n  </div>\n\n  <ion-list>\n    <ion-item *ngFor="let todo of todos">\n      <!-- Modo edicao (Update) -->\n      <ng-container *ngIf="editId === todo.id; else viewMode">\n        <ion-input\n          [(ngModel)]="editTitle"\n          (keyup.enter)="saveEdit()"\n          (keyup.escape)="cancelEdit()"\n        ></ion-input>\n        <ion-buttons slot="end">\n          <ion-button color="success" (click)="saveEdit()">\n            <ion-icon slot="start" name="checkmark-outline"></ion-icon>\n            SALVAR\n          </ion-button>\n          <ion-button color="medium" (click)="cancelEdit()">\n            <ion-icon slot="start" name="close-outline"></ion-icon>\n            CANCELAR\n          </ion-button>\n        </ion-buttons>\n      </ng-container>\n\n      <!-- Modo leitura -->\n      <ng-template #viewMode>\n        <ion-checkbox\n          slot="start"\n          [checked]="todo.done"\n          (ionChange)="toggleDone(todo.id)"\n        ></ion-checkbox>\n        <ion-label [class.done]="todo.done">{{ todo.title }}</ion-label>\n        <ion-buttons slot="end">\n          <ion-button (click)="startEdit(todo)">\n            <ion-icon slot="start" name="create-outline"></ion-icon>\n            EDITAR\n          </ion-button>\n          <ion-button color="danger" (click)="confirmDelete(todo)">\n            <ion-icon slot="start" name="trash-outline"></ion-icon>\n            EXCLUIR\n          </ion-button>\n        </ion-buttons>\n      </ng-template>\n    </ion-item>\n  </ion-list>\n\n  <p class="empty" *ngIf="todos.length === 0">Nenhuma tarefa cadastrada.</p>\n</ion-content>\n', styles: ["/* src/app/home/home.page.scss */\n#container {\n  text-align: center;\n  margin: 16px;\n}\n.done {\n  text-decoration: line-through;\n  color: #888;\n}\n.empty {\n  text-align: center;\n  color: #888;\n  margin-top: 24px;\n}\nion-buttons ion-button {\n  font-size: 12px;\n  letter-spacing: 0.5px;\n}\n/*# sourceMappingURL=home.page.css.map */\n"] }]
  }], () => [{ type: TodoService }, { type: AlertController }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomePage, { className: "HomePage", filePath: "src/app/home/home.page.ts", lineNumber: 49 });
})();
export {
  HomePage
};
//# sourceMappingURL=home.page-X4WTWOTD.js.map
