<template>
	<a href="#tresc" class="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-white">
		Przejdź do treści
	</a>
	<!-- Strona ma maks. 1920 px (Full HD) – na szerszych ekranach jest wyśrodkowana -->
	<div class="mx-auto max-w-[1920px] bg-white">
		<AppHeader />
		<slot />
		<AppFooter />
	</div>
</template>
