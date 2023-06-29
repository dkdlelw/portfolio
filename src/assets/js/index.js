const lenis = new Lenis();
function raf(time) {
	lenis.raf(time);
	requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

const targets = gsap.utils.toArray('.split');
let SplitClient = new SplitType(targets, { type: 'lines, words, chars' });

gsap.set('#section1 .sec1-wrap', { width: 0, height: 0 });
gsap.set('#section1 .sec1-box', { width: 0 });
gsap.set('#section1 .sec1-box .text .char', { autoAlpha: 0, y: 10 });
gsap.set('#section1 .sec1-box .logo', { autoAlpha: 0, y: 50 });
gsap.set('#section1 .sec1-box .scroll', { autoAlpha: 0, y: 50 });

setTimeout(() => {
	gsap.to('.sec1-wrap', {
		duration: 1,
		width: '100%',
		height: '100%',
		autoAlpha: 1,
		ease: 'power3.out',
	});
	gsap.to('.sec1-box', {
		duration: 1,
		width: '60vw',
		autoAlpha: 1,
		delay: 0.8,
		ease: 'power3.out',
	});
	gsap.to('#section1 .sec1-box .text .char', {
		duration: 1,
		y: 0,
		autoAlpha: 1,
		delay: 2,
		ease: 'power3.out',
		stagger: 0.01,
	});
	gsap.to('#section1 .sec1-box .logo', {
		duration: 1,
		y: 0,
		autoAlpha: 1,
		delay: 2.6,
		ease: 'power3.out',
	});
	gsap.to('#section1 .sec1-box .scroll', {
		duration: 1,
		y: 0,
		autoAlpha: 1,
		delay: 3,
		ease: 'power3.out',
	});
}, 2000);

const panel = document.querySelector('#section1');

ScrollTrigger.create({
	trigger: panel,
	start: 'top top',
	pin: true,
	pinSpacing: false,
});

const panel2 = document.querySelector('#section2');

const ani1 = gsap.timeline();
ani1.to('.sec1-box', { duration: 4, scale: 5, ease: 'none' });

ScrollTrigger.create({
	animation: ani1,
	trigger: panel2,
	start: 'top 90%',
	markers: false,
	scrub: 0.5,
});

const sec2Img = document.querySelector('.sec2-img');
const sec2Text = document.querySelector('.sec2-text');

const ani2 = gsap.timeline();
ani2.from('.sec2-text .line:nth-child(1) .char', {
	y: 300,
	autoAlpha: 0,
	duration: 0.7,
	ease: 'back.out(1)',
	stagger: 0.05,
});

ScrollTrigger.create({
	animation: ani2,
	trigger: sec2Text,
	start: 'top 70%',
	markers: false,
	// scrub: 0.5
});

gsap.from('.sec2-img', {
	opacity: 0,
	duration: 2.5,
	scrollTrigger: {
		trigger: '.sec2-img',
		start: 'top 80%',
		end: 'top 50%',
		toggleActions: 'play none none reverse',
	},
});

gsap.registerPlugin(ScrollTrigger);

const sec3Text = document.querySelectorAll('.sec3-text3 .split');
const sec3Img = document.querySelectorAll('.sec3-img img');
const ani3 = gsap.timeline();

sec3Text.forEach((char, index) => {
	gsap.from(char, {
		duration: 1,
		opacity: 0,
		delay: index * 0.5,
		toggleActions: 'play none none reverse',
		scrollTrigger: {
			trigger: '.sec3-text3',
			start: 'top 80%',
			end: 'top 50%',
			toggleActions: 'play none none reverse',
		},
	});
});

gsap.from('.sec3-text1 img', {
	opacity: 0,
	duration: 1,
	scrollTrigger: {
		trigger: '.sec3-text1',
		start: 'top 80%',
		end: 'top 50%',
		toggleActions: 'play none none reverse',
	},
});

gsap.from('.sec3-text2 img', {
	opacity: 0,
	duration: 1.5,
	scrollTrigger: {
		trigger: '.sec3-text2',
		start: 'top 80%',
		end: 'top 50%',
		toggleActions: 'play none none reverse',
	},
});

function scroll() {
	let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	sec3Img.forEach(item => {
		const sec3Img = item;
		let startOffset = 0;
		let endOffset = (scrollTop - item.offsetTop) * 0.05;
		let offset = gsap.utils.interpolate(startOffset, endOffset, 1);

		gsap.to(sec3Img, {
			y: offset,
			duration: 0.8,
			ease: 'power3.out',
		});
	});

	requestAnimationFrame(scroll);
}

scroll();

const ani4 = gsap.timeline();
ani4.fromTo(
	'#section4 .sec4-head .char',
	{
		x: 50,
		opacity: 0,
	},
	{
		delay: 0,
		duration: 1,
		x: 0,
		opacity: 1,
		ease: 'power2.easeOut',
		stagger: {
			from: 'start',
			amount: 0.5,
		},
	},
);

ani4.fromTo(
	'#section4 .sec4-line',
	{
		scaleX: 0,
		transformOrigin: 'left',
	},
	{
		duration: 2,
		scaleX: 1,
		ease: 'power3.out',
		delay: 0,
	},
);

ScrollTrigger.create({
	trigger: '#section4',
	start: 'top 20%',
	animation: ani4,
	markers: true,
});

//
gsap.registerPlugin(ScrollTrigger);

let revealContainers = document.querySelectorAll('.reveal');

revealContainers.forEach(container => {
	let image = container.querySelector('img');
	let tl = gsap.timeline({
		scrollTrigger: {
			trigger: container,
			toggleActions: 'restart none none reset',
		},
	});

	tl.set(container, { autoAlpha: 1 });
	tl.from(container, 1.5, {
		xPercent: -100,
		ease: Power2.out,
	});
	tl.from(image, 1.5, {
		xPercent: 100,
		scale: 1.3,
		delay: -1.5,
		ease: Power2.out,
	});
});
