<script>
  import { settingToggle } from '../stores/todoStore';
  import Topbar from '../components/Topbar.svelte';
  import Settings from '../components/Settings.svelte';
  import Sidebar from '../components/Sidebar.svelte';
  import { pageData } from '../stores/todoStore';
  let settings;
  let appWrraper;

  if ($settingToggle) {
  } else {
    //settings.stlye.visibility = 'visible';
  }
</script>

<div class="app-wrapper" bind:this={appWrraper}>
  <Topbar bind:topbarHeading={$pageData} />
  <div class="bottom-content">
    <Sidebar />
    {#if $settingToggle}
      <Settings bind:this={settings} />
      {(appWrraper.style.background = 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))')}
    {/if}
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
