<script>
  export let todoTime;
  export let todo;
  //export let flag = [];
</script>

{#if todo != null}
  <li id={todo.id}>{todoTime}:<input type="text" value={todo.name} /></li>
{:else}
  <li id={todoTime}>{todoTime}:<input type="text" placeholder="add a task" /></li>
{/if}

<style lang="scss">
  li {
    &:not(:last-child) {
      margin-bottom: 3px;
    }
    &:before {
      content: '\2022'; /* Add content: \2022 is the CSS Code/unicode for a bullet */
      color: #ffc00a; /* Change the color */
      font-weight: bold; /* If you want it to be bold */
      display: inline-block; /* Needed to add space between the bullet and the text */
      width: 1em; /* Also needed for space (tweak if needed) */
      margin-left: -1em; /* Also needed for space (tweak if needed) */
    }
    input {
      margin-left: 3%;
      appearance: none;
      background-color: #121212;
      color: white;
      border: none;
      font-size: medium;
    }
  }
</style>
