<script>
  export let todoRange;
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
</script>

<div class="range-input">
  <input type="number" bind:value={sHour} />
  <label for="">:</label>
  <input type="number" bind:value={sMin} />
  <label for="">-</label>
  <input type="number" bind:value={eHour} />
  <label for="">:</label>
  <input type="number" bind:value={eMin} />
</div>

<style lang="scss">
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
</style>
