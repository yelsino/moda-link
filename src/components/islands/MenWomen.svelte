<script>
  export let ubication = ""
  const partesUrl = ubication.split('/');
  const generoParte = partesUrl.find(part => part === 'hombre' || part === 'mujer'); // Buscar 'hombre' o 'mujer'
</script>

<div > 
  {#if generoParte === "hombre"}
    <a aria-label="boton ver productos moda femenina" href="/mujer" class="bg-orange-500 rounded-full p-1 block ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-gender-female text-white"
        width="20"
        height="20"
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
    <a href="/hombre" aria-label="boton ver productos moda masculina" class="bg-pink-500 rounded-full p-1 block text-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-gender-male"
        width="20"
        height="20"
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
</div>
