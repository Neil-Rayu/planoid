<script>
  export let todoTime;
  export let todo;
  import { bind } from 'svelte/internal';
  import { addTodo, setRange } from '../stores/todoStore';
  import RangeSelector from './RangeSelector.svelte';
  //export let flag = [];\
  let todoBlock;
  function onInsert() {
    document.createElement('form');

    todoBlock.appendChild();
  }
  let taskName;
  let taskLength;
  let todoRange;

  function onSubmit() {
    let newTodo = {
      name: taskName,
      importantFlag: true,
      urgentFlag: true,
      idNum: todo.idNum + 1,
      id: 'insertedID' + (todo.idNum + 1),
      urgentImportantId: 'UI' + (todo.idNum + 1),
      backburnerId: 'Backburner' + (todo.idNum + 1),
      range: todoRange,
      date: todo.date
    };
    addTodo(todo);
  }
  let insert;
  let visible = false;
  function openInsert() {
    insert.style.visibility = 'visible';
  }
</script>

{#if todo != null}
  <div class="todo-wrapper">
    <div id={todo.id} class="todo-chunk" bind:this={todoBlock}>
      <div class="bottom-content">
        <span> <span style="color: #ffc00a; font-weight:bolder;">- </span>{todoTime}:</span>
        <input type="text" value={todo.name} />
      </div>
      <img
        on:click={onInsert}
        class="down-arrow"
        src="../static/Down_Facing-Insert.svg"
        alt="Insert Below"
      />
    </div>

    <div class="insert-box" bind:this={insert}>
      <div class="range-input">
        <input type="text" bind:value={taskName} placeholder="Task Name" />
        <RangeSelector bind:todoRange />
      </div>
      <input type="button" on:click={onSubmit} value="Submit" />
    </div>
  </div>
{:else}
  <div class="todo-wrapper">
    <div id={todoTime} class="todo-chunk">
      <div class="bottom-content">
        <span><span style="color: #ffc00a; font-weight:bolder;">- </span>{todoTime}:</span>
        <input type="text" placeholder="add a task" />
      </div>
      <img
        class="down-arrow"
        on:click={openInsert}
        src="../static/Down_Facing-Insert.svg"
        alt="Insert Below"
      />
    </div>
    <div class="insert-box" bind:this={insert}>
      <div class="range-input">
        <input type="text" bind:value={taskName} placeholder="Task Name" />
        <RangeSelector bind:todoRange />
      </div>
      <input type="button" on:click={onSubmit} value="Submit" />
    </div>
  </div>
{/if}

<style lang="scss">
  .todo-wrapper {
    display: flex;

    .insert-box {
      visibility: hidden;
    }

    .todo-chunk {
      display: flex;
      flex-direction: column;
      width: 30%;
      &:last-child {
        .down-arrow {
          display: none;
        }
      }
      &:not(:last-child) {
        .down-arrow {
          visibility: hidden;
          cursor: pointer;
        }
        &:hover {
          .down-arrow {
            visibility: visible;
          }
        }
      }
      .bottom-content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        &:not(:last-child) {
          margin-bottom: 3px;
        }

        span {
          color: white; /* Change the color */
        }
        input {
          margin-left: 3%;
          appearance: none;
          background-color: #121212;
          color: white;
          border: none;
          font-size: medium;
        }
      }
    }
  }
</style>
