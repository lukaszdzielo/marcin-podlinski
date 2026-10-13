<script setup lang="ts">
/**
 * Zdjęcie w AVIF z fallbackiem na WebP i kilkoma szerokościami (srcset).
 * Oryginał: app/assets/img/photos/<nazwa>.(jpg|png)
 * Warianty generuje @nuxt/image podczas `nuxt generate` (folder _ipx w buildzie).
 */
const props = withDefaults(defineProps<{
	name: string
	alt: string
	sizes?: string
	/** Szerokości wariantów w px – domyślnie 640 i 1280 (albo szerokość oryginału, gdy jest mniejszy) */
	widths?: number[]
	loading?: 'lazy' | 'eager'
	fetchpriority?: 'high' | 'low' | 'auto'
	imgClass?: string
	imgStyle?: Record<string, string>
}>(), {
	sizes: '100vw',
	loading: 'lazy',
	fetchpriority: 'auto',
})

// Wycięte zdjęcia (z przezroczystością) są w PNG, reszta w JPG
const png = ['cta-board', 'footer-board', 'nigiri-plate']
const src = computed(() => `/${props.name}.${png.includes(props.name) ? 'png' : 'jpg'}`)

// Oryginały węższe niż 1280 px – nie powiększamy ich
const narrow: Record<string, number> = {
	'cta-board': 1052, 'footer-board': 908, 'nigiri-plate': 664, 'group-with-marcin': 857, 'corporate-workshop': 771,
}
const widths = computed(() => props.widths ?? [640, narrow[props.name] ?? 1280])

const img = useImage()
const quality = { avif: 55, webp: 80 } as const
const srcset = (format: 'avif' | 'webp') =>
	widths.value.map(w => `${img(src.value, { width: w, format, quality: quality[format] })} ${w}w`).join(', ')
const fallback = computed(() =>
	img(src.value, { width: widths.value[widths.value.length - 1], format: 'webp', quality: quality.webp }))
</script>

<template>
	<picture class="block">
		<source type="image/avif" :srcset="srcset('avif')" :sizes="sizes">
		<source type="image/webp" :srcset="srcset('webp')" :sizes="sizes">
		<img
			:src="fallback"
			:alt="alt"
			:loading="loading"
			:fetchpriority="fetchpriority"
			decoding="async"
			:class="imgClass"
			:style="imgStyle"
		>
	</picture>
</template>
