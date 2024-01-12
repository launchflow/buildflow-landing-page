<script>
	import { goto } from '$app/navigation';

	const categories = [
		{
			title: 'Product',
			items: [
				{ name: 'Pricing', link: '/pricing' },
				{ name: 'Use Cases', link: '/use-cases' },
				{
					name: 'BuildFlow Docs',
					link: 'https://docs.launchflow.com/buildflow/'
				},
				{
					name: 'LaunchFlow Cloud Docs',
					link: 'https://docs.launchflow.com/launchflow-cloud/'
				}
			]
		},
		{
			title: 'Resources',
			items: [
				{ name: 'Support', link: '/support' },
				{ name: 'About Us', link: '/about' },
				{ name: 'Careers', link: '/careers' },
				{ name: 'Blog', link: '/blog' }
			]
		},
		{
			title: 'Community',
			items: [
				{
					name: 'GitHub',
					link: 'https://github.com/launchflow/buildflow'
				},
				{
					name: 'Slack',
					link: 'https://join.slack.com/t/launchflowusers/shared_invite/zt-27wlowsza-Uiu~8hlCGkvPINjmMiaaMQ'
				},
				{
					name: 'LinkedIn',
					link: 'https://www.linkedin.com/company/launchflow-inc/'
				},
				{ name: 'Twitter', link: 'https://twitter.com/Launch_Flow' }
			]
		},
		{
			title: 'Legal',
			items: [
				{ name: 'Terms of Service', link: '/legal/terms-of-service' },
				{ name: 'Privacy Policy', link: '/legal/privacy' }
			]
		}
	];
</script>

<footer
	class="flex justify-center relative bg-[var(--color-background)] py-20 w-full h-full mx-8 sm:mx-4 debuggable-section-container"
>
	<div class="max-w-[1100px] flex-auto">
		<div class="mb-4">
			<a
				href="/"
				class="font-bold text-[var(--color-text)] text-2xl flex gap-1 items-center"
				on:click|preventDefault={() => goto('/')}
			>
				<img src="/images/buildflow-logo.png" alt="BuildFlow Logo" class="h-6 mb-1" />
				BuildFlow
			</a>
			<div class="text-gray-600 mt-2">
				<span class="block mt-2">© 2024 LaunchFlow Inc.</span>
			</div>
		</div>
		<div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-0">
			{#each categories as category (category.title)}
				<div>
					<h4 class="font-bold mb-4">{category.title}</h4>
					<ul>
						{#each category.items as item (item.name)}
							<li class="mb-2">
								<a
									href={item.link}
									class="hover:underline"
									on:click|preventDefault={() =>
										item.link.startsWith('http')
											? (window.location.href = item.link)
											: goto(item.link)}
								>
									{item.name}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</footer>
