<script lang="ts">
	export let showModal:boolean; // boolean

	let dialog:HTMLDialogElement; // HTMLDialogElement

	$: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
	class="backdrop:bg-black/50 backdrop:backdrop-blur-sm w-[700px] mt-20 rounded-md fixed"
>

	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click|stopPropagation class="w-full px-5">
		<!-- <slot name="header" /> -->
		<!-- <hr /> -->
		<slot />
		<!-- <hr /> -->
    
		<!-- svelte-ignore a11y-autofocus -->
		<button class=" w-full pb-3 outline-none" autofocus on:click={() => dialog.close()}>cerrar modal</button>
    
	</div>
</dialog>

<style>
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	button {
		display: block;
	}
</style>
