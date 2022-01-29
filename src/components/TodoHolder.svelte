<script>
  import UnchangeTodo from './UnchangeTodo.svelte';
  import { todoData } from '../stores/todoStore.js';
  import Todo from './Todo.svelte';

  export let title;
</script>

<div class="todo-container">
  <span class="title">{title}</span>
  <hr style="width: 100%;" />
  {#if title === 'Urgent & Important'}
    <ul class="todo-list">
      {#each $todoData as todo}
        {#if todo.urgentFlag == true && todo.importantFlag == true}
          <UnchangeTodo bind:todoText={todo.name} bind:todoId={todo.urgentImportantId} />
        {/if}
      {/each}
    </ul>
  {:else}
    <ul class="todo-list">
      {#each $todoData as todo}
        {#if todo.importantFlag == true && todo.urgentFlag != true}
          <UnchangeTodo bind:todoText={todo.name} bind:todoId={todo.backburnerId} />
        {/if}
      {/each}
    </ul>
  {/if}
</div>

<style lang="scss">
  .todo-container {
    --background: rgba(255, 255, 255, 0.05);
    --width: 50%;
    --height: 50%;
    --border-radius: 10px;
    background: var(--background);
    width: var(--width);
    height: var(--height);
    border-radius: var(--border-radius);
    position: relative;
    padding: 30px 45px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 2%;
    margin-right: 2%;
    .todo-list {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      width: 100%;

      list-style: none;
      --background: #121212;
      --text: #fff;
      --check: #ffc00a;
      --disabled: #414856;
    }
  }
</style>
