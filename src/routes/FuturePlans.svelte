<script>
  import { pageData } from '../stores/todoStore';
  import { DateInput } from 'date-picker-svelte';
  import ChunkList from '../components/ChunkList.svelte';
  $pageData = 'Future Plans';
  let selected;

  var today = new Date().toLocaleDateString();
</script>

<svelte-head>
  <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet" />
</svelte-head>

<div class="main-content">
  <div class="calendar-wrapper">
    <DateInput />
  </div>
  <div class="time-chunk-wrapper">
    <ChunkList listDate={today} />
  </div>
</div>

<style>
  .calendar-wrapper {
    width: 62%;
    margin-right: 30%;
  }
</style>
