const hero = document.getElementById('hero');
const header = document.getElementById('nav-bar');
const option = {
	root: null,
  rootMargin: '-15% 0%',
  threshold: 0,
}

const intersection = new IntersectionObserver(function(items) {
	items.forEach(entries => {
		if(!entries.isIntersecting) {
			header.style.backgroundColor = '#222';
		} else {
			header.style.backgroundColor = 'transparent';
		}
	})
}, option);

intersection.observe(hero);