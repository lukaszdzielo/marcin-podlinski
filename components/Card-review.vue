<script>
export default {
	props: ['review'],
};
</script>

<template>
	<div class="p-6 md:p-8
	bg-gray-100 text-gray-900">
		<div class="flex gap-4">
			<div v-if="review.img || review.name" class="
			shrink-0
			w-[56px] 
			h-[56px] 
			rounded-full
			overflow-hidden">
				<img v-if="review.img" :src="review.img" :alt="review.name" class="size-full">
				<div v-else class="
				flex justify-center items-center
				size-full
				bg-gray-900 text-gray-100"> {{ review.name.substring(0, 1) }}</div>
			</div>
			<div class="flex flex-col sm:flex-row md:flex-col lg:flex-row w-full">
				<div v-if="review.name || review.date">
					<span class="block">{{ review.name }}</span>
					<span class="block">{{ review.date }}</span>
				</div>
				<Star-Rating v-if="review.rating" :rating="review.rating" class="flex sm:ms-auto md:ms-0 lg:ms-auto" />
			</div>
		</div>
		<div class="mt-4">{{ review.text }}</div>
	</div>
</template>
