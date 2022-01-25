<script>
  import Todo from './Todo.svelte';
  import { urgentImportantTodo } from '../stores/todoStore.js';

  let todoText;
  $: todoId = totalTodos
    ? 'todoHolder-' + Math.max(...$urgentImportantTodo.map((t) => t.id)) + 1
    : 1;
  $: totalTodos = $urgentImportantTodo.length;
  export let title;
</script>

<div class="todo-container">
  <span class="title">{title}</span>
  <hr style="width: 100%;" />
  {#if $urgentImportantTodo}
    {#each $urgentImportantTodo as todo}
      <Todo bind:todoText={todo.name} bind:todoId />
    {/each}
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
  }
</style>
