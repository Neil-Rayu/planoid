<script>
  import { DateInput } from 'date-picker-svelte';
  import { empty, insert } from 'svelte/internal';
  import { addDate, insertChunk, setRange, setHasDate } from '../stores/todoStore';
  export let todo;
  let todoDate;
  //export let flag = [];
  let dateToggle = false;
  function toggle() {
    dateToggle = !dateToggle;
  }

  let sHour;
  let sMin;
  let eHour;
  let eMin;

  $: todoRange = {
    startHour: sHour,
    startMin: sMin,
    endHour: eHour,
    endMin: eMin
  };
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
      <div class="range-input">
        <input type="number" bind:value={sHour} />
        <label for="">:</label>
        <input type="number" bind:value={sMin} />
        <label for="">-</label>
        <input type="number" bind:value={eHour} />
        <label for="">:</label>
        <input type="number" bind:value={eMin} />
      </div>
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
      .range-input {
        display: flex;
        flex-direction: row;
        input {
          width: 12%;
          background-color: rgba(255, 255, 255, 0.05);
          color: white;
          outline: none;
          border: none;
          &::-webkit-outer-spin-button {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            margin: 0;
          }
          &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            margin: 0;
          }
        }
      }
    }
  }
</style>
