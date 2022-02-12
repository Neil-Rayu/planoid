<script>
  import UnchangeTodo from './UnchangeTodo.svelte';
  import { todoData } from '../stores/todoStore';
  import Todo from './Todo.svelte';

  export let title;
</script>

<div class="todo-container">
  <span class="title">{title}</span>
  <hr style="width: 100%;" />
  <ul class="todo-list">
    {#each $todoData as todo}
      {#if title === 'Urgent & Important' && todo.urgentFlag == true && todo.importantFlag == true}
        <UnchangeTodo bind:todo bind:idPrefix={title} />
      {:else if title === 'Backburner (Important, but not Urgent)' && todo.importantFlag == true && todo.urgentFlag != true}
        <UnchangeTodo bind:todo bind:idPrefix={title} />
      {/if}
    {/each}
  </ul>
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
    overflow: auto;
    overflow-x: hidden;

    .todo-list {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;

      list-style: none;
      --background: #121212;
      --text: #fff;
      --check: #ffc00a;
      --disabled: #414856;
    }
  }
</style>
