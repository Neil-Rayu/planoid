<script>
  import { settingToggle } from '../stores/todoStore';
  import Topbar from '../components/Topbar.svelte';
  import Settings from '../components/Settings.svelte';
  import Sidebar from '../components/Sidebar.svelte';
  import { pageData } from '../stores/todoStore';
  let settings;

  if (!$settingToggle) {
    //settings.stlye.visibility = 'hidden';
  } else {
    //settings.stlye.visibility = 'visible';
  }
</script>

<div class="app-wrapper">
  <Topbar bind:topbarHeading={$pageData} />
  <div class="bottom-content">
    <Sidebar />
    <Settings bind:this={settings} />
    <slot class="main-content" />
  </div>
</div>

<style lang="scss">
  .app-wrapper {
    font-family: 'Ubuntu', sans-serif;
    color: white;
    display: flex;
    height: 100vh;
    margin-top: 0px;
    padding-top: 0px;
    flex-direction: column;
    width: 100%;
  }
  .bottom-content {
    display: flex;
    height: 100%;
    width: 100%;
    .main-content {
      width: 100%;
      height: 100%;
    }
  }
</style>
