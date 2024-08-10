<script>
export default {
	props: ['review'],
};
</script>

<template>
	<div class="p-8
	bg-gray-100
	text-gray-900">
		<div class="flex">
			<div v-if="review.img || review.name" class="
			w-[56px] 
			h-[56px] 
			rounded-full
			overflow-hidden 
			me-4">
				<img v-if="review.img" :src="review.img" :alt="review.name" class="size-full">
				<div v-else class="
				flex
				justify-center
				items-center
				size-full
				bg-gray-900
				text-gray-100"> {{ review.name.substring(0, 1) }}</div>
			</div>
			<div v-if="review.name || review.date">
				<span class="block">{{ review.name }}</span>
				<span class="block">{{ review.date }}</span>
			</div>
			<Star-Rating v-if="review.rating" :rating="review.rating" class="flex ms-auto" />
		</div>
		<div class="">{{ review.text }}</div>
	</div>
</template>
