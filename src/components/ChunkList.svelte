<script>
  import { startEndData } from '../stores/todoStore';
  import TimeChunk from '../components/TimeChunk.svelte';
  let chunkTimes = [];
  for (let i = $startEndData.start; i < $startEndData.end; i++) {
    chunkTimes.push(`${i}:00-${i + 1}:00`);
  }
  function insertChunk(start, end) {
    for (let i = $startEndData.start; i < end; i++) {
      chunkTimes.push(`${i}:00-${i + 1}:00`);
    }
  }
</script>

<div class="time-blocks">
  {#each chunkTimes as chunk}
    <TimeChunk bind:todoText={chunk} bind:todoId={chunk} />
  {/each}
</div>

<style>
  .time-blocks {
    list-style: none;
  }
</style>
