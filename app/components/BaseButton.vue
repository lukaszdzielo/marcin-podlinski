<script setup lang="ts">
withDefaults(defineProps<{
	to: string
	variant?: 'primary' | 'outline' | 'light'
}>(), {
	variant: 'primary',
})
</script>

<template>
	<a
		:href="to"
		:class="{
			'bg-primary text-white hover:bg-primary-dark': variant === 'primary',
			'border border-current hover:border-primary hover:text-primary': variant === 'outline',
			'bg-white text-primary-dark hover:bg-paper': variant === 'light',
		}"
		class="inline-flex min-h-13 items-center rounded-full px-7 font-display transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
	><slot /></a>
</template>
