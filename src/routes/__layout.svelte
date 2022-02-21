<script>
  import { settingToggle } from '../stores/todoStore';
  import Topbar from '../components/Topbar.svelte';
  import Settings from '../components/Settings.svelte';
  import Sidebar from '../components/Sidebar.svelte';
  import { pageData } from '../stores/todoStore';
  import { onMount } from 'svelte';
  let settingsT;
  let appWrraper;
  // Import the functions you need from the SDKs you need
  import { initializeApp } from 'firebase/app';
  import { getAnalytics } from 'firebase/analytics';
  import { getAuth, onAuthStateChanged } from 'firebase/auth';
  import { userStore } from '../stores/userStore';
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Initialize Firebase
  $: onMount(() => {
    {
      // Your web app's Firebase configuration
      // For Firebase JS SDK v7.20.0 and later, measurementId is optional
      const firebaseConfig = {
        apiKey: 'AIzaSyAW1cp0GATsKaF--n5w-TbZuaQ8P2-9N6c',
        authDomain: 'planoid.firebaseapp.com',
        projectId: 'planoid',
        storageBucket: 'planoid.appspot.com',
        messagingSenderId: '82248376254',
        appId: '1:82248376254:web:b3897e35faf041108723ef',
        measurementId: 'G-S4GDV6BY4X'
      };
      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          // ...
          userStore.set({ isLoggedIn: true, user: uid });
        } else {
          // User is signed out
          // ...
          console.log($userStore.isLoggedIn);
          userStore.set({ isLoggedIn: false });
        }
      });
    }
  });
</script>

{#if $userStore.isLoggedIn}
  <div class="app-wrapper" bind:this={appWrraper}>
    <Topbar bind:topbarHeading={$pageData} />
    <div class="bottom-content">
      <Sidebar />
      {#if $settingToggle}
        <Settings />
      {/if}
      <slot class="main-content" />
    </div>
  </div>
{:else}
  <div class="app-wrapper">
    <div class="landing-page">Please log in</div>
  </div>
{/if}

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
