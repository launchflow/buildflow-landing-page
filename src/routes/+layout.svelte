<script lang="ts">
	import { AppBar, AppShell, LightSwitch } from '@skeletonlabs/skeleton';
	import '../app.postcss';
	// Highlight JS
	import 'highlight.js/styles/github-dark.css';
	// for HTML
	// Floating UI for Popups
	// Not generated stuff below
	import { goto } from '$app/navigation';
	import Footer from '$lib/components/Footer.svelte';
	import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
	import Fa from 'svelte-fa';
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar gap="gap-0">
			<svelte:fragment slot="lead">
				<button on:click={() => goto('/')} class="flex gap-1 items-center mx-4">
					<img src="/images/buildflow-logo.png" alt="BuildFlow Logo" class="h-5 mb-1" />
					<strong class="text-xl">BuildFlow</strong>
				</button>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<div class="hidden sm:flex gap-2">
					<a
						class="btn btn-sm variant-ghost-surface"
						href="https://discord.gg/EXqV7W8MtY"
						target="_blank"
						rel="noreferrer"
					>
						Discord
					</a>
					<a
						class="btn btn-sm variant-ghost-surface"
						href="https://github.com/launchflow/buildflow"
						target="_blank"
						rel="noreferrer"
					>
						GitHub
					</a>
				</div>
				<div class="flex sm:hidden">
					<a
						class="btn btn-sm"
						href="https://discord.gg/EXqV7W8MtY"
						target="_blank"
						rel="noreferrer"
					>
						<Fa icon={faDiscord} size="1.5x" />
					</a>
					<a
						class="btn btn-sm"
						href="https://github.com/launchflow/buildflow"
						target="_blank"
						rel="noreferrer"
					>
						<Fa icon={faGithub} size="1.5x" />
					</a>
				</div>
				<LightSwitch class="ml-0" />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<div class="px-4">
		<slot />
	</div>
	<div class="px-4">
		<Footer />
	</div>
	<!-- <svelte:fragment slot="footer">
		<div class="px-4"><Footer /></div></svelte:fragment
	> -->
</AppShell>
