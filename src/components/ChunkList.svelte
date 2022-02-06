<script>
  export let listDate;
  import {
    startEndData,
    setChunkList,
    todoData,
    chunkData,
    dateHasTodo
  } from '../stores/todoStore';
  import TimeChunk from '../components/TimeChunk.svelte';
  console.log(listDate);
  //console.log($todoData.at(0).date);
  let todos = [];
  if ($todoData.length > 0) {
    todos = $todoData
      .filter(($todoData) => $todoData.date == listDate)
      .sort(($todoData) => $todoData.range.startHour);
  }
  console.log(todos);
  let chunkTimes = [];
  let length = todos.length;
  for (let i = Number($startEndData.start); i < Number($startEndData.end); i++) {
    chunkTimes.push({ time: `${i}:00-${i + 1}:00`, todo: null });
  }
  if (length > 0) {
    let t = 0;
    for (let i = Number($startEndData.start); i < Number($startEndData.end); i++) {
      if (t < length && todos.at(t).range.startHour < i) {
        chunkTimes[i - 1 - $startEndData.start] = {
          time: `${i - 1}:00-${todos[t].range.startHour}:${todos[t].range.startMin}`,
          todo: null
        };
        chunkTimes[i - $startEndData.start] = {
          time: `${todos[t].range.startHour}:${todos[t].range.startMin}-${todos[t].range.endHour}:${todos[t].range.endMin}`,
          todo: todos[t]
        };
        chunkTimes.splice(i - $startEndData.start + 1, 0, {
          time: `${todos[t].range.endHour}:${todos[t].range.endMin}-${i + 1}:00`,
          todo: null
        });
        t++;
      }
    }
    /**
     * Todo: Make it so that when the todo is passed as null;
     * it gives option to add a todo,
     * and fix edge cases wherer the time is greater than a couple hours
     */
  }
</script>

<div class="time-blocks">
  {#each chunkTimes as chunk}
    <TimeChunk bind:todoTime={chunk.time} bind:todo={chunk.todo} />
  {/each}
</div>

<style>
  .time-blocks {
    list-style: none;
  }
</style>
