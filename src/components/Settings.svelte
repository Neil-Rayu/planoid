<script lang="ts">
  import { setEndTime, setStartTime } from '../stores/todoStore';

  let startTime: number;
  let endTime: number;
  function submitSettings() {
    setStartTime(startTime);
    setEndTime(endTime);
  }
</script>

<div class="settings">
  <div class="sidebar">
    <span>General</span>
    <hr />
  </div>
  <div class="main-content">
    <form on:submit|preventDefault={submitSettings}>
      <label for="day-start-time">Day Start Time:</label>
      <input type="number" name="dayStart" id="day-start-time" bind:value={startTime} />
      <label for="day-end-time">Day End Time:</label>
      <input type="number" name="dayEnd" id="day-end-time" bind:value={endTime} />
      <label for="chunk-length">Chunk Length:</label>
      <input type="number" id="chunk-length" />
      <input type="submit" value="Submit" />
    </form>
  </div>
</div>

<style>
  .settings {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 20%;
  }
</style>
