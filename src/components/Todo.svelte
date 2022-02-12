<script>
  import { todoData, toggleImportantFlag, toggleUrgentFlag } from '../stores/todoStore';

  export let todo;
  //export let flag = [];

  let TodoHolder;
  let important;
  let urgent;

  // let idNum = $todoData.findIndex((t) => t.id === todoId);

  function addImportant() {
    toggleImportantFlag(todo);
    important.style.color = todo.importantFlag ? '#ffc00a' : '#fff';
    $todoData = $todoData;
    // $urgentImportantTodo.find(
    //   ($urgentImportantTodo) => $urgentImportantTodo.id === todoId
    // ).importantFlag = true;
  }
  function addUrgent() {
    toggleUrgentFlag(todo);
    urgent.style.color = todo.urgentFlag ? '#ffc00a' : '#fff';
    $todoData = $todoData;
    // $urgentImportantTodo.find(
    //   ($urgentImportantTodo) => $urgentImportantTodo.id === todoId
    // ).urgentFlag = true;
  }
</script>

<div class="todo-container">
  <div class="task-wrapper">
    <input id={todo.id} type="checkbox" />
    <label for={todo.id}>{todo.name}</label>
  </div>
  <div class="important-icon-wrapper">
    <span bind:this={important} on:click={addImportant}>I</span>
    <span bind:this={urgent} on:click={addUrgent}>U</span>
  </div>
</div>

<style lang="scss">
  .todo-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    --background: #121212;
    --text: #fff;
    --check: #ffc00a;
    --disabled: #414856;
    .important-icon-wrapper {
      opacity: 0%;
      margin-top: 15px;
      &:hover {
        cursor: pointer;
      }
    }
    &:hover {
      .important-icon-wrapper {
        opacity: 100%;
      }
    }
    label {
      color: var(--text);
      position: relative;
      cursor: pointer;
      display: grid;
      align-items: center;
      width: fit-content;
      transition: color 0.3s ease;
      &::before,
      &::after {
        content: '';
        position: absolute;
      }
      &::before {
        height: 2px;
        width: 8px;
        left: -27px;
        background: var(--check);
        border-radius: 2px;
        transition: background 0.3s ease;
      }

      &::after {
        height: 4px;
        width: 4px;
        top: 8px;
        left: -25px;
        border-radius: 50%;
      }
    }
    input[type='checkbox'] {
      -webkit-appearance: none;
      -moz-appearance: none;
      position: relative;
      height: 15px;
      width: 15px;
      outline: none;
      border: 0;
      margin: 0 15px 0 0;
      cursor: pointer;
      background: var(--background);
      display: grid;
      align-items: center;
      &::before,
      &::after {
        content: '';
        position: absolute;
        height: 2px;
        top: auto;
        background: var(--check);
        border-radius: 2px;
      }
    }
  }
</style>
