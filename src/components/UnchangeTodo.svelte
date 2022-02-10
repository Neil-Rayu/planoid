<script>
  import { DateInput } from 'date-picker-svelte';
  import { addDate, setRange, setHasDate } from '../stores/todoStore';
  import RangeSelector from './RangeSelector.svelte';
  export let todo;
  let todoDate;
  //export let flag = [];
  let dateToggle = false;
  function toggle() {
    dateToggle = !dateToggle;
  }

  let todoRange;
  function onSubmit() {
    addDate(todoDate.toLocaleDateString(), todo);
    setRange(todoRange, todo);
  }
</script>

<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

<div class="task-container">
  <li id={todo.id}>{todo.name}</li>
  <span class="material-icons" on:click={toggle}> calendar_month </span>
  {#if dateToggle}
    <div class="calendar">
      <!-- format={'yyyy/MM/dd'} -->
      <DateInput bind:value={todoDate} format={'MM/dd/yyyy'} />
      <RangeSelector bind:todoRange />
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
