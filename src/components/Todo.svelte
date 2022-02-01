<script>
  import { todoData, toggleImportantFlag, toggleUrgentFlag } from '../stores/todoStore';

  export let todoText;
  export let todoId;
  //export let flag = [];

  let TodoHolder;
  let important;
  let urgent;

  let idNum = $todoData.findIndex((t) => t.id === todoId);

  function addImportant() {
    toggleImportantFlag(idNum);
    important.style.color = true ? '#ffc00a' : '#fff';
    $todoData = $todoData;
    // $urgentImportantTodo.find(
    //   ($urgentImportantTodo) => $urgentImportantTodo.id === todoId
    // ).importantFlag = true;
  }
  function addUrgent() {
    toggleUrgentFlag(idNum);
    urgent.style.color = true ? '#ffc00a' : '#fff';
    $todoData = $todoData;
    // $urgentImportantTodo.find(
    //   ($urgentImportantTodo) => $urgentImportantTodo.id === todoId
    // ).urgentFlag = true;
  }
</script>

<div class="todo-container">
  <div class="task-wrapper">
    <input id={todoId} type="checkbox" />
    <label for={todoId}>{todoText}</label>
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
      &::before {
        width: 0px;
        right: 60%;
        transform-origin: right bottom;
      }
      &::after {
        width: 0px;
        left: 40%;
        transform-origin: left bottom;
      }
      &:checked {
        &::before {
          animation: check-01 0.4s ease forwards;
        }
        &::after {
          animation: check-02 0.4s ease forwards;
        }
        + label {
          color: var(--disabled);
          animation: move 0.3s ease 0.1s forwards;
          &::before {
            background: var(--disabled);
            animation: slice 0.4s ease forwards;
          }
          &::after {
            animation: firework 0.5s ease forwards 0.1s;
          }
        }
      }
    }

    @keyframes move {
      50% {
        padding-left: 8px;
        padding-right: 0px;
      }
      100% {
        padding-right: 4px;
      }
    }

    @keyframes slice {
      60% {
        width: 100%;
        left: 4px;
      }
      100% {
        width: 100%;
        left: -2px;
        padding-left: 0;
      }
    }

    @keyframes check-01 {
      0% {
        width: 4px;
        top: auto;
        transform: rotate(0);
      }
      50% {
        width: 0px;
        top: auto;
        transform: rotate(0);
      }
      51% {
        width: 0px;
        top: 8px;
        transform: rotate(45deg);
      }
      100% {
        width: 5px;
        top: 8px;
        transform: rotate(45deg);
      }
    }

    @keyframes check-02 {
      0% {
        width: 4px;
        top: auto;
        transform: rotate(0);
      }
      50% {
        width: 0px;
        top: auto;
        transform: rotate(0);
      }
      51% {
        width: 0px;
        top: 8px;
        transform: rotate(-45deg);
      }
      100% {
        width: 10px;
        top: 8px;
        transform: rotate(-45deg);
      }
    }

    @keyframes firework {
      0% {
        opacity: 1;
        box-shadow: 0 0 0 -2px var(--check), 0 0 0 -2px var(--check), 0 0 0 -2px var(--check),
          0 0 0 -2px var(--check), 0 0 0 -2px var(--check), 0 0 0 -2px var(--check);
      }
      30% {
        opacity: 1;
      }
      100% {
        opacity: 0;
        box-shadow: 0 -15px 0 0px var(--check), 14px -8px 0 0px var(--check),
          14px 8px 0 0px var(--check), 0 15px 0 0px var(--check), -14px 8px 0 0px var(--check),
          -14px -8px 0 0px var(--check);
      }
    }
  }
</style>
