<script setup lang="ts">
import { contact, site } from '~/data/content'
import logo from '~/assets/img/signet-light.svg'

const year = new Date().getFullYear()
const telHref = `tel:${contact.phone.replace(/\s/g, '')}`

const form = reactive({ kind: contact.kinds[0]!, name: '', reach: '', people: '', date: '', message: '', consent: false })
const status = ref<'idle' | 'sending' | 'sent' | 'error'>('idle')

async function submit() {
	const body = [
		`Rodzaj: ${form.kind}`,
		`Imię: ${form.name}`,
		`Kontakt: ${form.reach}`,
		`Liczba osób: ${form.people}`,
		`Termin: ${form.date}`,
		'',
		form.message,
	].join('\n')

	// Bez klucza Web3Forms – otwórz program pocztowy z gotową wiadomością
	if (!contact.web3formsKey) {
		window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(`Zapytanie: ${form.kind}`)}&body=${encodeURIComponent(body)}`
		return
	}
	status.value = 'sending'
	try {
		const res = await fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
			body: JSON.stringify({ access_key: contact.web3formsKey, subject: `Zapytanie ze strony: ${form.kind}`, from_name: form.name, message: body }),
		})
		status.value = res.ok ? 'sent' : 'error'
	}
	catch {
		status.value = 'error'
	}
}

const field = 'min-h-12 w-full min-w-0 border border-[#9e9e9e] px-3.5 text-base focus:border-ink focus:outline-none'
</script>

<template>
	<footer id="kontakt" class="relative overflow-hidden">
		<div class="pt-22 pb-24 sm:pt-28 lg:pt-40 lg:pb-32 xl:pb-60">
			<div class="container flex flex-col gap-14 lg:flex-row">
				<form class="relative z-10 flex flex-col gap-5 border border-[#e0e0e0] bg-white p-6 sm:p-9 lg:w-[58%]" @submit.prevent="submit">
					<h2 class="font-display text-2xl leading-tight uppercase sm:text-3xl">{{ contact.formHeading }}</h2>
					<fieldset>
						<legend class="mb-3 font-normal">Czego szukasz?</legend>
						<div class="flex flex-wrap gap-2.5">
							<button
								v-for="kind in contact.kinds"
								:key="kind"
								type="button"
								:aria-pressed="form.kind === kind"
								class="min-h-11 rounded-full border px-4.5"
								:class="form.kind === kind ? 'border-ink bg-ink text-white' : 'border-[#9e9e9e]'"
								@click="form.kind = kind"
							>{{ kind }}</button>
						</div>
					</fieldset>
					<div class="grid gap-4 sm:grid-cols-2">
						<label class="flex flex-col gap-1.5 text-sm">Imię<input v-model="form.name" type="text" autocomplete="given-name" required :class="field"></label>
						<label class="flex flex-col gap-1.5 text-sm">E-mail lub telefon<input v-model="form.reach" type="text" required :class="field"></label>
						<label class="flex flex-col gap-1.5 text-sm">Liczba osób<input v-model="form.people" type="number" min="1" :class="field"></label>
						<label class="flex flex-col gap-1.5 text-sm">Preferowany termin<input v-model="form.date" type="date" :class="field"></label>
					</div>
					<label class="flex flex-col gap-1.5 text-sm">Wiadomość<textarea v-model="form.message" rows="4" :class="field" class="py-3" /></label>
					<label class="flex items-start gap-2.5 text-[13px] text-ink-soft">
						<input v-model="form.consent" type="checkbox" required class="mt-0.5 size-4.5">
						<span>{{ contact.consent }} <a :href="contact.privacyUrl || '#'" class="underline">Polityka prywatności</a></span>
					</label>
					<div class="flex flex-wrap items-center gap-4">
						<button type="submit" :disabled="status === 'sending'" class="min-h-13 rounded-full bg-primary px-8 font-display text-white transition-colors hover:bg-primary-dark disabled:opacity-60">Wyślij zapytanie</button>
						<p v-if="status === 'sent'" role="status" class="text-sm text-[#2e7d32]">Dziękuję! Odpiszę najszybciej, jak to możliwe.</p>
						<p v-if="status === 'error'" role="alert" class="text-sm text-primary-dark">Coś poszło nie tak – napisz proszę na {{ contact.email }}.</p>
					</div>
				</form>

				<div class="lg:w-[42%]">
					<SectionHeading :text="contact.heading" />
					<p class="mt-7 mb-7 text-ink-soft">{{ contact.text }}</p>
					<ul class="flex flex-col gap-3">
						<li>
							<a :href="telHref" class="inline-flex min-h-11 items-center gap-3 text-xl hover:text-primary">
								<svg class="size-6.5 text-primary-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2" /></svg>
								{{ contact.phone }}
							</a>
						</li>
						<li>
							<a :href="`mailto:${contact.email}`" class="inline-flex min-h-11 items-center gap-3 text-xl break-all hover:text-primary">
								<svg class="size-6.5 shrink-0 text-primary-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
								{{ contact.email }}
							</a>
						</li>
					</ul>
					<p class="mt-6 text-sm text-ink-soft">NIP: {{ contact.nip }} · REGON: {{ contact.regon }}</p>
				</div>
			</div>
		</div>

		<div class="relative bg-ink text-sm text-[#bdbdbd]">
			<div class="relative z-10 container flex flex-wrap items-center gap-x-10 gap-y-4 py-9">
				<img :src="logo" :alt="`${site.name} – ${site.owner}`" width="100" height="56" class="h-14 w-auto">
				<span>© {{ year }} {{ site.owner }} {{ site.name }}</span>
				<a :href="contact.privacyUrl || '#'" class="hover:text-white">Polityka prywatności</a>
			</div>
			<AppPicture
				name="footer-board"
				alt=""
				sizes="800px"
				class="pointer-events-none absolute -right-20 bottom-0 z-0 hidden xl:block"
				img-class="h-[400px] w-auto max-w-none"
			/>
		</div>
	</footer>
</template>
