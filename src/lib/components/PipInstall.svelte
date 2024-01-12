<script lang="ts">
	import hljs from 'highlight.js/lib/core';
	import shell from 'highlight.js/lib/languages/shell';

	hljs.registerLanguage('shell', shell);

	let preRef: HTMLPreElement;

	const code = `  $ pip install buildflow
  $ buildflow init --name my-app
  $ cd my-app
  $ buildflow run`;

	function highlightCode() {
		if (preRef) {
			hljs.highlightElement(preRef);
		}
	}

	import { onMount } from 'svelte';
	onMount(highlightCode);
</script>

<div class="h-full w-full flex flex-col border border-white/20 rounded-xl">
	<div class="flex py-3 px-4 space-x-3 bg-[#3A4259] border-b border-white/[0.05] rounded-t-xl">
		<div class="h-2 w-2 rounded-full bg-red-500 border border-white/20"></div>
		<div class="h-2 w-2 rounded-full bg-yellow-500 border border-white/20"></div>
		<div class="h-2 w-2 rounded-full bg-green-500 border border-white/20"></div>
	</div>
	<div class="flex-1 px-0 min-h-0 overflow-auto bg-black rounded-b-xl min-w-0">
		<pre bind:this={preRef} class="h-full mb-0 text-sm">
              <code class="shell">
{code}
              </code>
          </pre>
	</div>
</div>
