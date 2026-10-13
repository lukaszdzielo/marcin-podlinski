<!-- Przyciemnienie i lupka na kafelku galerii (hover / fokus z klawiatury) -->
<template>
	<span class="pointer-events-none absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors duration-300 group-hover:bg-ink/40 group-focus-visible:bg-ink/40" aria-hidden="true">
		<span class="flex size-14 scale-75 items-center justify-center rounded-full bg-white/90 text-ink opacity-0 transition duration-300 group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100">
			<svg class="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5M11 8v6M8 11h6" /></svg>
		</span>
	</span>
</template>
