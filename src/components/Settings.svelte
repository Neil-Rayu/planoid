<script lang="ts">
  import { setEndTime, setStartTime } from '../stores/todoStore';
  import RangeSelector from './RangeSelector.svelte';

  let startTime: number;
  let endTime: number;
  let eventName: string;
  let eventRange: any;
  function submitSettings() {
    setStartTime(startTime);
    setEndTime(endTime);
  }
</script>

<div class="settings">
  <div class="top-heading">
    <span>General</span>
    <hr />
  </div>
  <div class="general-content">
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

  <div class="top-heading">
    <span>Reoccuring Events</span>
    <hr />
  </div>
  <div class="event-content">
    <form action="">
      <label for="rec-event-name">Event Name:</label>
      <input type="text" id="rec-event-name" bind:value={eventName} />
      <label for="rec-event-time" />
      <RangeSelector bind:todoRange={eventRange} />
      <label for="rec-event-days" />
      <span>Su Mo Tu We Th Fr Sa</span>
      <input type="submit" value="Add Event" />
    </form>
  </div>
</div>

<style lang="scss">
  .settings {
    backdrop-filter: blur(2px);

    position: absolute;
    z-index: 10;
    left: 40%;
    display: flex;
    flex-direction: column;
    top: 20%;
    width: 20%;
    background-color: rgb(50, 50, 50);
    height: 50%;
    border-radius: 3px;
    overflow: auto;
    form {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin: 5%;
      input {
        margin-bottom: 2%;
      }
    }
    span {
      margin-top: 3%;
      margin-bottom: 3%;
    }
  }
</style>
