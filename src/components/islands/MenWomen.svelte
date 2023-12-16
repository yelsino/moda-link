<script>
  export let ubication = ""
</script>

<button  class=" "> 
  <p>{ubication}</p>
  {#if generoParte === "hombre"}
    <a href="/mujer" class="bg-orange-500 rounded-full p-1 block ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-gender-female text-white"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
          d="M12 9m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"
        /><path d="M12 14v7" /><path d="M9 18h6" /></svg
      >
    </a>
  {:else}
    <a href="/hombre" class="bg-orange-500 rounded-full p-1 block text-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-gender-male"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
          d="M10 14m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"
        /><path d="M19 5l-5.4 5.4" /><path d="M19 5h-5" /><path
          d="M19 5v5"
        /></svg
      >
    </a>
  {/if}
</button>
