<script>
  import { toggleSettings } from '../stores/todoStore';
  export let topbarHeading;
  import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

  async function login() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }
</script>

<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

<main>
  <div class="top-bar">
    <span class="material-icons">menu</span>
    <span>{topbarHeading}</span>
    <span class="material-icons" on:click={toggleSettings}>settings</span>
    <span on:click={login} class="material-icons">account_circle</span>
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
