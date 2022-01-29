<script>
  import { settingToggle } from '../stores/todoStore';
  export let topbarHeading;
  function toggleSettings() {
    $settingToggle = true;
  }
</script>

<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

<main>
  <div class="top-bar">
    <span class="material-icons">menu</span>
    <span>{topbarHeading}</span>
    <span class="material-icons" on:click={toggleSettings}>settings</span>
  </div>
</main>

<style>
  .top-bar {
    position: sticky;
    top: 0;
    height: 40px;
    background-color: rgb(56, 56, 56);
    box-shadow: -2px -2px 10px 3px rgba(0, 0, 0, 0.5);
    padding: 0.5%;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
