<script>
  import { pageData, startEndData } from '../stores/todoStore';
  import DatePicker from '@beyonk/svelte-datepicker/src/components/DatePicker.svelte';
  import Todo from '../components/Todo.svelte';
  $pageData = 'Future Plans';
  let selected;
  let chunkTimes = [];
  for (let i = $startEndData.start; i < $startEndData.end; i++) {
    chunkTimes.push(`${i}:00-${i + 1}:00`);
  }
</script>

<svelte-head>
  <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet" />
</svelte-head>

<div class="main-content">
  <div class="calendar-wrapper">
    <DatePicker range={false} minuteStep={15} on:date-selected={(e) => (selected = e.detail)} />
  </div>
  <div class="time-blocks">
    {#each chunkTimes as chunk}
      <Todo bind:todoText={chunk} bind:todoId={chunk} />
    {/each}
  </div>
</div>

<style>
  .calendar-wrapper {
    width: 62%;
    margin-right: 30%;
  }
</style>
