<script setup lang="ts">
import { faq } from '~/data/content'

const open = ref<number>(0)
</script>

<template>
	<section v-if="faq.items.length" id="faq" class="bg-paper py-22 sm:py-28 lg:py-40">
		<div class="mx-auto max-w-[880px] px-6">
			<SectionHeading :text="faq.heading" class="mb-10" />
			<div class="border-t border-[#cfcfcf]">
				<div v-for="(item, i) in faq.items" :key="item.q" class="border-b border-[#cfcfcf]">
					<h3>
						<button
							:id="`faq-q-${i}`"
							type="button"
							class="flex min-h-16 w-full items-center justify-between gap-4 py-4 text-left text-lg font-normal"
							:aria-expanded="open === i"
							:aria-controls="`faq-a-${i}`"
							@click="open = open === i ? -1 : i"
						>
							<span>{{ item.q }}</span>
							<span class="flex size-8 shrink-0 items-center justify-center rounded-full border border-ink text-xl leading-none" aria-hidden="true">{{ open === i ? '−' : '+' }}</span>
						</button>
					</h3>
					<p v-show="open === i" :id="`faq-a-${i}`" role="region" :aria-labelledby="`faq-q-${i}`" class="pe-12 pb-6 text-ink-soft">{{ item.a }}</p>
				</div>
			</div>
		</div>
	</section>
</template>
