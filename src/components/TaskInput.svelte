<script lang="ts">
  import Todo from './Todo.svelte';
  import { todoData, addTodo, persist } from '../stores/todoStore';
  import { userStore } from '../stores/userStore';
  import { collection, query, where, onSnapshot } from 'firebase/firestore';
  import { onDestroy, onMount } from 'svelte';

  let date = new Date().toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  let todoText: string;
  $: idNumber = totalTodos > 0 ? $todoData.at(-1).idNum + 1 : 0;
  $: totalTodos = $todoData.length;
  $: todoId = 'main-todo-' + idNumber;
  $: todoUrgentImportantId = 'urgent-important-todo-' + idNumber;
  $: todoBackburnerId = 'backburner-' + idNumber;
  let inner;

  const timeData = [];
  const locData = [];
  let todoImportantFlag = false;
  let todoUrgentFlag = false;

  $: todos = [];
  let unsubscribe;
  $: onMount(() => {
    const q = query(collection($userStore.database, 'todos'), where('user', '==', $userStore.user));
    unsubscribe = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.data().name);
        todos = [...todos, doc.data().name];
      });
    });
  });
  console.log(todos);
  function onSumbit() {
    persist(todoText);
    todoText = '';
  }

  function openTask() {
    inner.style.clipPath = 'circle(75%)';
  }

  function closeTask() {
    inner.style.clipPath = 'circle(0%)';
  }
  onDestroy(unsubscribe);
</script>

<main>
  <div class="task-content">
    <div class="date-container">Today - {date}</div>
    <div on:click={openTask} class="add-task-open">Add Task (+)</div>
    <div id="task-wrapper">
      {#each todos as todo}
        <!-- {#if !todo.reocurringEvent} -->
        <Todo bind:todo />
        <!-- {/if} -->
      {/each}
    </div>
    <div bind:this={inner} class="input-container">
      <form action="" method="" class="taskForm" on:submit|preventDefault={onSumbit}>
        <input
          bind:value={todoText}
          type="text"
          id="task-input"
          name="task-input"
          placeholder="Format: (task name, length, location)"
        />
        <input type="Submit" name="submit" value="Add" class="add-task-button" />
        <input on:click={closeTask} type="button" class="cancel-task" value="Cancel" />
      </form>
    </div>
  </div>
</main>

<style lang="scss">
  main {
    width: 80%;
  }
  .task-content {
    width: 75%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 3%;
  }

  #task-wrapper {
    --background: #121212;
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
  }

  .input-container {
    width: 100%;
    margin-top: 1%;
    display: flex;
    flex-direction: column;
    background-color: rgb(255, 255, 255, 0.1);
    clip-path: circle(0% at 0% 0%);
    transition: clip-path 0.5s ease-in-out;
    height: 20%;
    padding-left: 0.5%;
    padding-bottom: 0.5%;
    padding-top: 0.5%;
    border-radius: 3px;
    box-shadow: -2px -2px 13px 8px rgba(0, 0, 0, 0.5);
  }

  #task-input {
    text-align: start;
    border: none;
    appearance: none;
    outline: none;
    background: none;
    width: 99%;
    height: 60%;
    border-radius: 3px;
    color: white;
  }

  .add-task-open {
    &:hover {
      color: #ffc00a;
    }
  }

  .add-task-button {
    border-radius: 3px;
    width: 10%;
    margin-top: 5%;
    background-color: #ffc00a;
    opacity: 60%;
  }
  .add-task-button:hover {
    opacity: 100%;
    transition: opacity 0.2s ease;
  }

  .cancel-task {
    border-radius: 3px;
    outline: none;
    background-color: rgb(255, 255, 255, 0);
    appearance: none;
    border: 6px;
    border-color: #ffffff;
    color: #ffffff;
  }
  .cancel-task:hover {
    background-color: rgb(255, 255, 255, 1);
    color: #000;
    transition: background-color 0.2s ease, color 0.2s ease;
  }
</style>
