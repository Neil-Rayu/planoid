<script lang="ts">
  import {
    addDays,
    addTodo,
    setEndTime,
    setRange,
    setRecEvent,
    setStartTime,
    todoData
  } from '../stores/todoStore';
  import type { Todo, Range } from '../types';
  import RangeSelector from './RangeSelector.svelte';

  let startTime: number;
  let endTime: number;
  let eventName: string;
  let eventRange: Range;
  let eventDays: number[] = [];
  let todo: Todo;

  function submitSettings() {
    setStartTime(startTime);
    setEndTime(endTime);
  }

  let recEvent = {
    name: eventName,
    range: eventRange,
    days: eventDays
  };

  function onDayClick(day: number) {
    eventDays.push(day);
  }

  function submitEvent() {
    addTodo(eventName);
    addDays(eventDays, $todoData.at(-1));
    setRange(eventRange, $todoData.at(-1));
    setRecEvent($todoData.at(-1));
    console.log($todoData.at(-1));
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
    <form on:submit|preventDefault={submitEvent}>
      <label for="rec-event-name">Event Name:</label>
      <input type="text" id="rec-event-name" bind:value={eventName} />
      <label for="rec-event-time" />
      <RangeSelector bind:todoRange={eventRange} />
      <label for="rec-event-days" />
      <div class="week-selector">
        <span on:click={() => onDayClick(0)}>Su</span>
        <span on:click={() => onDayClick(1)}>Mo</span>
        <span on:click={() => onDayClick(2)}>Tu</span>
        <span on:click={() => onDayClick(3)}>We</span>
        <span on:click={() => onDayClick(4)}>Th</span>
        <span on:click={() => onDayClick(5)}>Fr</span>
        <span on:click={() => onDayClick(6)}>Sa</span>
      </div>
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
    .week-selector {
      margin-top: 3%;
      margin-bottom: 3%;
      span {
        color: rgba(255, 255, 255, 0.3);
        &::hover {
          color: #fff;
        }
      }
    }
  }
</style>
