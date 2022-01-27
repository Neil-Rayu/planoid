<script>
  export let todoText;
  //export let flag = [];
</script>

<li>{todoText}</li>

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
  }
</style>
