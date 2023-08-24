// window.addEventListener('DOMContentLoaded', () => {
	document.addEventListener('astro:load', () => {
	const links = document.querySelectorAll(`aside a[href^="#"]`)
	let previousSection = null

	const observer = new IntersectionObserver(entries => {
		entries.forEach((entry) => {
			const id = entry.target.getAttribute('id');
			// currentIndex = headingsArray.findIndex((heading) => heading.getAttribute('id') === id),
			if (entry.intersectionRatio > 0) {
				document.querySelector(`aside a[href="#${id}"]`)?.classList?.add('in-view');
				previousSection = entry.target.getAttribute('id');
			} else {
				document.querySelector(`aside a[href="#${id}"]`)?.classList?.remove('in-view');
			}

			links.forEach(link => { link.classList.remove('bg-amber-600') })

			if (document.querySelector('.in-view')) {
				document.querySelector('.in-view').classList.add('bg-amber-600')
			}

		// 	if (!document.querySelector('.in-view') && previousSection) {
		// 		document.querySelector(`aside a[href="#${previousSection}"]`)?.classList?.add('bg-amber-600');
		// 		console.log("checked");
		// 	}
		});
	},
		{
			root: null,
			rootMargin: '0px 0px -25% 0px',
			threshold: 0.5,
		});

	// Track all sections that have an `id` applied
	document.querySelectorAll('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]').forEach((heading) => {
		observer.observe(heading);
	});

});