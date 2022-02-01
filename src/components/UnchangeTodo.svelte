<script>
  import { DateInput } from 'date-picker-svelte';
  import { addDate } from '../stores/todoStore';
  export let todoText;
  export let todoId;
  let todoDate;
  //export let flag = [];
  let dateToggle = false;
  function toggle() {
    dateToggle = !dateToggle;
  }
  function onSubmit() {
    addDate(todoDate, todoId);
  }
</script>

<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

<div class="task-container">
  <li id={todoId}>{todoText}</li>
  <span class="material-icons" on:click={toggle}> calendar_month </span>
  {#if dateToggle}
    <div class="calendar">
      <DateInput bind:value={todoDate} format={'yyyy/MM/dd'} />
      <input type="text" id="time-span-input" placeholder="Formate: x:xx-x:xx" />
      <input type="button" on:click={onSubmit} value="Submit" />
    </div>
  {/if}
</div>

<style lang="scss">
  .task-container {
    display: flex;
    justify-content: space-between;
    width: 80%;
    li {
      &:not(:last-child) {
        margin-bottom: 3px;
      }
      &:before {
        content: '\2022'; /* Add content: \2022 is the CSS Code/unicode for a bullet */
        color: #ffc00a; /* Change the color */
        font-weight: bold; /* If you want it to be bold */
        display: inline-block; /* Needed to add space between the bullet and the text */
        width: 1em; /* Also needed for space (tweak if needed) */
        margin-left: -1em; /* Also needed for space (tweak if needed) */
      }
    }
    .calendar {
      display: flex;
      flex-direction: column;
    }
  }
</style>
