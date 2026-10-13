<script setup lang="ts">
withDefaults(defineProps<{
	text?: string
	level?: 1 | 2 | 3
	size?: 'xl' | 'lg' | 'md'
}>(), {
	level: 2,
	size: 'lg',
})
</script>

<template>
	<div>
		<component
			:is="`h${level}`"
			class="font-display uppercase leading-tight"
			:class="{
				'text-4xl sm:text-5xl lg:text-7xl': size === 'xl',
				'text-3xl sm:text-4xl lg:text-[2.625rem]': size === 'lg',
				'text-2xl sm:text-3xl': size === 'md',
			}"
		><slot>{{ text }}</slot></component>
		<span class="mt-4 block h-1 w-30 bg-primary" aria-hidden="true" />
	</div>
</template>
