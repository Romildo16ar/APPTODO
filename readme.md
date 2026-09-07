# Projeto TODO Ionico v7

Criado para a pós-graduação em Desenvolvimento Web e Mobile do IFSEMG. Todos os direitos reservados. Consulte o autor ([Flávio Augusto de Freitas](mailto:flavio.freitas@ifsudestemg.edu.br)) se quiser usar o projeto.

## Como executar o projeto

1. Clone o projeto
2. Instale a pasta `node_modules` executando `npm install`
3. Instale o CLI Ionic executando `npm install @ionic/cli`
4. Execute o projeto com `ionic serve`

> Se tudo correr bem o projeto deve abrir no navegador seu principal.


## Tarefa avaliativa — CRUD completo

O projeto entregue implementava apenas o **Create** (adicionar tarefa) e o **Read**
(listar tarefas). Como tarefa avaliativa, implementei as duas letras que faltavam:

- **U — Update (Editar):** o botão `EDITAR` troca o texto da tarefa por um campo de
  edição na própria linha da lista, com os botões `SALVAR` e `CANCELAR`. Também é
  possível salvar com **Enter** ou cancelar com **Esc**.
- **D — Delete (Excluir):** o botão `EXCLUIR` remove a tarefa, pedindo confirmação
  antes através de um `ion-alert`.

Aparência da lista:

```
☐ Fazer compras     [EDITAR] [EXCLUIR]
☑ Fazer deveres     [EDITAR] [EXCLUIR]
  [____________]    [SALVAR] [CANCELAR]   <- linha em modo de edição
```

### Arquivos alterados

| Arquivo | Alteração |
|---|---|
| `src/app/todo.service.ts` | Métodos `editTodo()` (Update) e `deleteTodo()` (Delete); `getTodos()` passou a devolver uma cópia da lista, para o componente não alterar o estado do serviço por acidente. |
| `src/app/home/home.page.ts` | Estado de edição (`editId` / `editTitle`) com `startEdit()`, `saveEdit()` e `cancelEdit()`; `confirmDelete()` usando o `AlertController`; registro dos ícones com `addIcons()`. |
| `src/app/home/home.page.html` | Botões `EDITAR` / `EXCLUIR` / `SALVAR` / `CANCELAR`, alternância entre modo de leitura e modo de edição, atalhos de teclado e mensagem para lista vazia. |
| `src/app/home/home.page.scss` | Estilo da mensagem de lista vazia e ajuste do tamanho dos botões. |


