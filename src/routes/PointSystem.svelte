<script>
  import { pageData } from '../stores/todoStore';
  $pageData = 'Energy Chart';
</script>

<svelte-head>
  <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet" />
</svelte-head>
<div class="main-content">
  <div class="left-content">
    ">
    <div class="point-ledger">Point Ledger:</div>
    <form>
      <input type="number" />
      <input type="submit" value="Add" />
    </form>
    <span>Total:</span>
  </div>
  <div class="guide-book">Guide Book:</div>
</div>

<style lang="scss">
  .main-content {
    margin-top: 3%;
    width: 100%;
    display: flex;
    height: 93%;
    .guide-book {
      margin-left: 20%;
    }
    .left-content {
      height: 100%;
      display: flex;
      flex-direction: column;
      input {
        margin-bottom: 100%;
      }
    }
  }
</style>
