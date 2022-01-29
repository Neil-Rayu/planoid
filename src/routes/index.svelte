<script>
  import TodoHolder from '../components/TodoHolder.svelte';
  import Sidebar from '../components/Sidebar.svelte';
  import TaskInput from '../components/TaskInput.svelte';
  import Topbar from '../components/Topbar.svelte';
  import { pageData } from '../stores/todoStore';
  $pageData = 'Spaghetti';
  let urgentImportantTitle = 'Urgent & Important';
  let backburnerTitle = 'Backburner (Important, but not Urgent)';
  let topbarHeading = 'Spaghetti';
</script>

<svelte-head>
  <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet" />
</svelte-head>

<div class="main-content">
  <TaskInput />
  <div class="task-lists">
    <TodoHolder bind:title={urgentImportantTitle} />
    <TodoHolder bind:title={backburnerTitle} />
  </div>
</div>

<style lang="scss">
  .main-content {
    width: 100%;
    display: flex;
    align-items: flex-start;
    .task-lists {
      display: flex;
      flex-direction: column;
      height: 98%;
      width: 100%;
    }
  }
  :global {
    body {
      margin: 0;
      background-color: #121212;
    }
    Sidebar {
      width: 100%;
    }
    @media (max-width: 1024) {
      Sidebar {
        width: 0%;
      }
    }
  }
</style>
