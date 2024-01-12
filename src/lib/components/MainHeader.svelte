<script lang="ts">
	import { goto } from '$app/navigation';

	// Function to handle internal navigation
	function navigate(url: string) {
		goto(url);
	}
</script>

<section class="flex justify-center py-12 sm:py-20 w-full h-full px-4">
	<div class="h-full w-full max-w-[1100px]">
		<!-- Left content grid -->
		<div class="flex flex-col gap-6">
			<!-- Announcement -->
			<!-- <div class="row-span-1 hd-full">
					<div class="flex">
						<a
							href="/blog/introducing-launchflow"
							class=" py-1 px-4 rounded-md sm:rounded-full bg-primary-200 text-black ml-0 sm:-ml-2 flex flex-col sm:flex-row gap-1 sm:items-center"
							on:click|preventDefault={() => navigate('/blog/introducing-launchflow')}
						>
							<p class="text-sm font-bold">New</p>
							<span class="hidden sm:block">&bull;</span>
							<p class="text-sm flex items-center gap-1 font-semibold">
								Introducing LaunchFlow
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width=".72rem"
									height=".72rem"
									version="1.1"
									stroke-width={2}
									class="stroke-current text-black dark:text-black fill-current"
									viewBox="0 0 30 26"
								>
									<path d="m4.8 21.57 2.422 2.43 11.978-12-11.978-12-2.422 2.43 9.547 9.57z" />
								</svg>
							</p>
						</a>
					</div>
				</div> -->

			<!-- Title -->
			<div class="mt-4">
				<h1 class="mr-0 text-5xl sm:text-6xl font-semibold text-center">Build Better Backends</h1>
			</div>

			<!-- Description Text -->
			<div class="flex items-center justify-center">
				<p class=" text-lg sm:text-xl text-center">
					BuildFlow is a Python backend framework designed with an emphasis on performance,
					scalability, and, most importantly, simplicity.
				</p>
			</div>

			<!-- Buttons -->
			<div class="flex justify-center">
				<button
					class="h-fit flex items-center gap-2 py-1 pl-4 pr-2 rounded-lg text-base bg-primary-500 font-semibold text-white hover:bg-primary-200"
					on:click={() => navigate('/signup')}
				>
					Read Docs
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width=".72rem"
						height=".72rem"
						version="1.1"
						stroke-width={2}
						class="stroke-current text-white dark:text-white fill-current"
						viewBox="0 0 30 26"
					>
						<path d="m4.8 21.57 2.422 2.43 11.978-12-11.978-12-2.422 2.43 9.547 9.57z" />
					</svg>
				</button>
				<button class="h-fit flex items-center gap-2 py-1 pl-[12px] text-base">
					Quickstart
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width=".72rem"
						height=".72rem"
						version="1.1"
						stroke-width={2}
						class="stroke-current text-black dark:text-white fill-current"
						viewBox="0 0 30 26"
					>
						<path d="m4.8 21.57 2.422 2.43 11.978-12-11.978-12-2.422 2.43 9.547 9.57z" />
					</svg>
				</button>
			</div>
		</div>
	</div>
</section>
