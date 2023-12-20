<script>
  export let genero = "";
  export let category = "";

  const filters = [
    {
      id: "1",
      name: "gorros",
      href: `/${genero}/gorros`,
      icon: `<svg stroke="currentColor" fill="none" stroke-width="1" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="25px" width="25px" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M6 10.5l1.436 -4c.318 -.876 .728 -1.302 1.359 -1.302c.219 0 1.054 .365 1.88 .583c.825 .219 .733 -.329 .908 -.487c.176 -.158 .355 -.294 .61 -.294c.242 0 .553 .048 1.692 .448c.759 .267 1.493 .574 2.204 .922c1.175 .582 1.426 .913 1.595 1.507l.816 4.623c2.086 .898 3.5 2.357 3.5 3.682c0 1.685 -1.2 3.818 -5.957 3.818c-6.206 0 -14.043 -4.042 -14.043 -7.32c0 -1.044 1.333 -1.77 4 -2.18z"></path><path d="M6 10.5c0 .969 4.39 3.5 9.5 3.5c1.314 0 3 .063 3 -1.5"></path></svg>`,
    },
    {
      id: "2",
      name: "pantalon",
      href: `/${genero}/pantalon`,
      icon: ` <svg stroke="currentColor" fill="currentColor" stroke-width="1" viewBox="0 0 256 256" height="25px" width="25px" xmlns="http://www.w3.org/2000/svg"><path d="M221.89,214.26l-22-176A14,14,0,0,0,186,26H70A14,14,0,0,0,56.11,38.26l-22,176A14,14,0,0,0,48,230H88.69a14,14,0,0,0,13.57-10.56L128,120l25.73,99.44A14,14,0,0,0,167.31,230H208a14,14,0,0,0,13.89-15.74ZM195.22,97.66A34.07,34.07,0,0,1,166.54,70h25.23ZM70,38H186a2,2,0,0,1,2,1.75L190.27,58H65.73L68,39.75A2,2,0,0,1,70,38ZM64.23,70H89.46A34.07,34.07,0,0,1,60.78,97.66Zm26.4,146.49A2,2,0,0,1,88.69,218H48a2,2,0,0,1-2-2.25L59.25,109.87A46.07,46.07,0,0,0,101.6,70H122V95.24Zm118.87.83a2,2,0,0,1-1.5.68H167.31a2,2,0,0,1-1.95-1.56L134,95.24V70h20.4a46.07,46.07,0,0,0,42.35,39.87L210,215.75A2,2,0,0,1,209.5,217.32Z"></path></svg>`,
    },
    {
      id: "3",
      name: "camiseta",
      href: `/${genero}/camiseta`,
      icon: `<svg
      stroke="currentColor"
      fill="none"
      stroke-width="1"
      viewBox="0 0 24 24"
      stroke-linecap="round"
      stroke-linejoin="round"
      height="25px"
      width="25px"
      xmlns="http://www.w3.org/2000/svg"
      ><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path
        d="M15 4l6 2v5h-3v8a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1v-8h-3v-5l6 -2a3 3 0 0 0 6 0"
      ></path><path d="M10.5 11h2.5l-1.5 5"></path></svg
    >`,
    },
    {
      id: "4",
      name: "zapatos",
      href: `/${genero}/zapatos`,
      icon: `<svg
      stroke="currentColor"
      fill="none"
      stroke-width="1"
      viewBox="0 0 24 24"
      stroke-linecap="round"
      stroke-linejoin="round"
      height="25px"
      width="25px"
      xmlns="http://www.w3.org/2000/svg"
      ><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path
        d="M4 6h5.426a1 1 0 0 1 .863 .496l1.064 1.823a3 3 0 0 0 1.896 1.407l4.677 1.114a4 4 0 0 1 3.074 3.89v2.27a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1z"
      ></path><path d="M14 13l1 -2"></path><path d="M8 18v-1a4 4 0 0 0 -4 -4h-1"
      ></path><path d="M10 12l1.5 -3"></path></svg
    >`,
    },
    {
      id: "5",
      name: "accesorios",
      href: `/${genero}/accesorios`,
      icon: `<svg stroke="currentColor" fill="currentColor" stroke-width="1" viewBox="0 0 256 256" height="25px" width="25px" xmlns="http://www.w3.org/2000/svg"><path d="M206,128a77.92,77.92,0,0,0-32.53-63.31L167.1,29.5A14,14,0,0,0,153.32,18H102.68A14,14,0,0,0,88.9,29.5L82.53,64.69a77.87,77.87,0,0,0,0,126.62L88.9,226.5A14,14,0,0,0,102.68,238h50.64a14,14,0,0,0,13.78-11.5l6.37-35.19A77.92,77.92,0,0,0,206,128ZM100.71,31.64a2,2,0,0,1,2-1.64h50.64a2,2,0,0,1,2,1.64l4.56,25.19a77.68,77.68,0,0,0-63.7,0Zm54.58,192.72a2,2,0,0,1-2,1.64H102.68a2,2,0,0,1-2-1.64l-4.56-25.19a77.68,77.68,0,0,0,63.7,0ZM128,194a66,66,0,1,1,66-66A66.08,66.08,0,0,1,128,194Zm46-66a6,6,0,0,1-6,6H128a6,6,0,0,1-6-6V88a6,6,0,0,1,12,0v34h34A6,6,0,0,1,174,128Z"></path></svg>`,
    },
  ];

  const bgColorClass =
    genero === "mujer"
      ? "bg-pink-100 text-pink-600"
      : "bg-orange-100 text-orange-500";
</script>

<div
  class="hidden sm:flex flex-col fixed z-30 bg-gray-100 left-0 top-1/2 transform -translate-y-1/2"
>
  {#each filters as filter}
    <a
      href={filter.href}
      aria-label={`boton filtrar ${filter.name}`}
      id={filter.id}
      class={` items-center py-5 px-2 ${
        category === filter.name
          ? bgColorClass + " text-black"
          : "text-gray-500"
      }`}
    >
      {@html filter.icon}
    </a>
  {/each}
</div>

<div
  class=" flex-col fixed z-30 left-0 top-1/2 transform -translate-y-1/2 flex sm:hidden w-6 gap-y-14 py-8 justify-center items-center"
>
  {#each filters as filter}
    <a
      href={filter.href}
      aria-label={`boton filtrar ${filter.name}`}
      id={filter.id+1}
      class="-rotate-90 text-lg"
      > <span class={`px-1 ${
        category === filter.name
          ? bgColorClass + " text-black"
          : "text-gray-500"
      }`}>{filter.name}</span> </a
    >
  {/each}
</div>
