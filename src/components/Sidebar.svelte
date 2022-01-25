<script lang="ts">
</script>

<svelte-head>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
</svelte-head>

<div class="sidebar">
  <div class="link-wrapper">
    <div id="home-tab" class="tab-container">
      <span class="material-icons"> home </span>
      <a href="index.html" class="tab-text"> Home </a>
    </div>
    <div id="plan-ahead-tab" class="tab-container">
      <span class="material-icons"> calendar_month </span>
      <a href="./src/FuturePlans.svelte" class="tab-text"> Future Plans </a>
    </div>
    <div id="energy-data-tab" class="tab-container">
      <span class="material-icons"> trending_up </span>
      <a href="./src/EnergyChart.svelte" class="tab-text"> Energy Chart</a>
    </div>
    <div id="project-tab" class="tab-container">x</div>
  </div>
</div>

<style lang="scss">
  .sidebar {
    height: 100%;
    width: 20%;
    background-color: rgb(56, 56, 56);
    margin-right: 5%;
    margin-top: 0px;
    margin-left: 0px;
  }
  .link-wrapper {
    margin-top: 5%;
    margin-left: 10%;
    display: flex;
    flex-direction: column;
  }
  .tab-container {
    display: flex;
    padding-top: 6%;
    align-items: center;
    .tab-text {
      font-size: 17px;
      padding-left: 2%;
      text-decoration: none;
      color: white;
      &:hover {
        color: #ffc00a;
      }
    }
    &:hover {
      color: #ffc00a;
    }
  }
</style>
