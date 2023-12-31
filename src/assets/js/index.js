const lenis = new Lenis();
function raf(time) {
	lenis.raf(time);
	requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

const targets = gsap.utils.toArray('.split');
let SplitClient = new SplitType(targets, { type: 'lines, words, chars' });

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

//section3
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

function scrollAni1() {
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

	requestAnimationFrame(scrollAni1);
}

scrollAni1();

const ani4 = gsap.timeline();
ani4.fromTo(
	'#section4 .sec4-header .char',
	{
		x: 50,
		opacity: 0,
	},
	{
		duration: 1,
		x: 0,
		opacity: 1,
		ease: 'power2.easeOut',
		stagger: {
			from: 'start',
			amount: 0.5,
			delay: -1.5,
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
		ease: 'power4.out',
		delay: -1.5,
	},
);

ScrollTrigger.create({
	trigger: '#section4',
	start: 'top 20%',
	animation: ani4,
	markers: false,
});

gsap.set('.sec4-con1', { autoAlpha: 1, delay: 4 });
gsap.from('.sec4-con1', {
	duration: 1.5,
	yPercent: -100,
	ease: 'power2.out',
	scrollTrigger: {
		trigger: '.sec4-con1 .sec4-img1',
		start: 'top 20%', // 섹션 상단이 뷰포트의 80%에 도달했을 때 애니메이션 시작
		end: 'bottom 20%', // 섹션 하단이 뷰포트의 20%에 도달했을 때 애니메이션 완료
		markers: false,
	},
});
gsap.from('.sec4-con1 .sec4-img1', {
	duration: 1.5,
	yPercent: 100,
	ease: 'power2.out',
	scrollTrigger: {
		trigger: '.sec4-con1 .sec4-img1',
		start: 'top 20%', // 섹션 상단이 뷰포트의 80%에 도달했을 때 애니메이션 시작
		end: 'bottom 20%', // 섹션 하단이 뷰포트의 20%에 도달했을 때 애니메이션 완료
		delay: 1.5, // 애니메이션 시작 전 대기 시간
		markers: false,
	},
});

gsap.set('.sec4-con2', { autoAlpha: 1, delay: 4 });

gsap.from('.sec4-con2', {
	duration: 1.5,
	yPercent: -100,
	ease: 'power2.out',
	scrollTrigger: {
		trigger: '.sec4-con1 .sec4-img1',
		start: 'top 20%', // 섹션 상단이 뷰포트의 80%에 도달했을 때 애니메이션 시작
		end: 'bottom 20%', // 섹션 하단이 뷰포트의 20%에 도달했을 때 애니메이션 완료
		markers: false,
	},
});
gsap.from('.sec4-con2-1', {
	duration: 1.5,
	yPercent: 100,
	ease: 'power2.out',
	scrollTrigger: {
		trigger: '.sec4-con1 .sec4-img1',
		start: 'top 20%', // 섹션 상단이 뷰포트의 80%에 도달했을 때 애니메이션 시작
		end: 'bottom 20%', // 섹션 하단이 뷰포트의 20%에 도달했을 때 애니메이션 완료
		delay: 1.5, // 애니메이션 시작 전 대기 시간
		markers: false,
	},
});
gsap.from('.sec4-img3', {
	opacity: 0,
	duration: 3,
	scrollTrigger: {
		trigger: '.sec4-img3',
		start: 'top 80%',
		end: 'top 50%',
		delay: 5,
		toggleActions: 'play none none reverse',
	},
});

gsap.from('.sec4-desc', {
	opacity: 0,
	duration: 3,
	scrollTrigger: {
		trigger: '.sec4-desc',
		start: 'top 80%',
		end: 'top 50%',
		delay: 5,
		toggleActions: 'play none none reverse',
	},
});
const sec4Text = document.querySelector('.sec4-text');

const ani4_1 = gsap.timeline();
ani4_1.from('.sec4-text .line .char', {
	y: 300,
	autoAlpha: 0,
	duration: 0.7,
	ease: 'back.out(1)',
	stagger: 0.05,
});

ScrollTrigger.create({
	animation: ani4_1,
	trigger: sec4Text,
	start: 'top 70%',
	markers: false,
	// scrub: 0.5
});

//section5
const ani5 = gsap.timeline();
ani5.fromTo(
	'#section5 .sec5-header .char',
	{
		x: 50,
		opacity: 0,
	},
	{
		duration: 1,
		x: 0,
		opacity: 1,
		ease: 'power2.easeOut',
		stagger: {
			from: 'start',
			amount: 0.5,
			delay: -1.5,
		},
	},
);

ani5.fromTo(
	'#section5 .sec5-line',
	{
		scaleX: 0,
		transformOrigin: 'left',
	},
	{
		duration: 2,
		scaleX: 1,
		ease: 'power4.out',
		delay: -1.5,
	},
);

ScrollTrigger.create({
	trigger: '#section5',
	start: 'top 20%',
	animation: ani5,
	markers: false,
});
gsap.set('.sec5-con1', { autoAlpha: 1, delay: 4 });
gsap.from('.sec5-con1', {
	duration: 1.5,
	yPercent: -100,
	ease: 'power2.out',
	scrollTrigger: {
		trigger: '.sec5-con1 .sec5-img1',
		start: 'top 20%', // 섹션 상단이 뷰포트의 80%에 도달했을 때 애니메이션 시작
		end: 'bottom 20%', // 섹션 하단이 뷰포트의 20%에 도달했을 때 애니메이션 완료
		markers: false,
	},
});
gsap.from('.sec5-con1 .sec5-img1', {
	duration: 1.5,
	yPercent: 100,
	ease: 'power2.out',
	scrollTrigger: {
		trigger: '.sec5-con1 .sec5-img1',
		start: 'top 20%', // 섹션 상단이 뷰포트의 80%에 도달했을 때 애니메이션 시작
		end: 'bottom 20%', // 섹션 하단이 뷰포트의 20%에 도달했을 때 애니메이션 완료
		delay: 1, // 애니메이션 시작 전 대기 시간
		markers: false,
	},
});

gsap.set('.sec5-con2', { autoAlpha: 1, delay: 4 });

gsap.from('.sec5-con2', {
	duration: 1.5,
	yPercent: -100,
	ease: 'power2.out',
	scrollTrigger: {
		trigger: '.sec5-con1 .sec5-img1',
		start: 'top 20%', // 섹션 상단이 뷰포트의 80%에 도달했을 때 애니메이션 시작
		end: 'bottom 20%', // 섹션 하단이 뷰포트의 20%에 도달했을 때 애니메이션 완료
		markers: false,
	},
});
gsap.from('.sec5-con2-1', {
	duration: 1.5,
	yPercent: 100,
	ease: 'power2.out',
	scrollTrigger: {
		trigger: '.sec5-con1 .sec5-img1',
		start: 'top 20%', // 섹션 상단이 뷰포트의 80%에 도달했을 때 애니메이션 시작
		end: 'bottom 20%', // 섹션 하단이 뷰포트의 20%에 도달했을 때 애니메이션 완료
		delay: 1, // 애니메이션 시작 전 대기 시간
		markers: false,
	},
});

gsap.from('.sec5-desc', {
	opacity: 0,
	duration: 3,
	scrollTrigger: {
		trigger: '.sec5-desc',
		start: 'top 80%',
		end: 'top 50%',
		delay: 3,
		toggleActions: 'play none none reverse',
	},
});
const sec5Text = document.querySelector('.sec5-text');

const ani5_1 = gsap.timeline();
ani5_1.from('.sec5-text .line .char', {
	y: 300,
	autoAlpha: 0,
	duration: 0.7,
	ease: 'back.out(1)',
	stagger: 0.05,
});

ScrollTrigger.create({
	animation: ani5_1,
	trigger: sec5Text,
	start: 'top 70%',
	markers: false,
	// scrub: 0.5
});

//section6
const ani6 = gsap.timeline();

gsap.set('.sec6-con1', { autoAlpha: 1, delay: 4 });
gsap.from('.sec6-con1', {
	duration: 1.5,
	yPercent: -100,
	ease: 'power2.out',
	scrollTrigger: {
		trigger: '.sec6-con1 .sec6-img1',
		start: 'top 20%', // 섹션 상단이 뷰포트의 80%에 도달했을 때 애니메이션 시작
		end: 'bottom 20%', // 섹션 하단이 뷰포트의 20%에 도달했을 때 애니메이션 완료
		markers: false,
	},
});
gsap.from('.sec6-con1 .sec6-img1', {
	duration: 1.5,
	yPercent: 100,
	ease: 'power2.out',
	scrollTrigger: {
		trigger: '.sec6-con1 .sec6-img1',
		start: 'top 20%', // 섹션 상단이 뷰포트의 80%에 도달했을 때 애니메이션 시작
		end: 'bottom 20%', // 섹션 하단이 뷰포트의 20%에 도달했을 때 애니메이션 완료
		delay: 1, // 애니메이션 시작 전 대기 시간
		markers: false,
	},
});

gsap.set('.sec6-con2', { autoAlpha: 1, delay: 4 });

gsap.from('.sec6-con2', {
	duration: 1.5,
	yPercent: -100,
	ease: 'power2.out',
	scrollTrigger: {
		trigger: '.sec6-con1 .sec6-img1',
		start: 'top 20%', // 섹션 상단이 뷰포트의 80%에 도달했을 때 애니메이션 시작
		end: 'bottom 20%', // 섹션 하단이 뷰포트의 20%에 도달했을 때 애니메이션 완료
		markers: false,
	},
});
gsap.from('.sec6-con2-1', {
	duration: 1.5,
	yPercent: 100,
	ease: 'power2.out',
	scrollTrigger: {
		trigger: '.sec6-con1 .sec6-img1',
		start: 'top 20%', // 섹션 상단이 뷰포트의 80%에 도달했을 때 애니메이션 시작
		end: 'bottom 20%', // 섹션 하단이 뷰포트의 20%에 도달했을 때 애니메이션 완료
		delay: 1, // 애니메이션 시작 전 대기 시간
		markers: false,
	},
});

gsap.from('.sec6-desc', {
	opacity: 0,
	duration: 3,
	scrollTrigger: {
		trigger: '.sec6-desc',
		start: 'top 80%',
		end: 'top 50%',
		delay: 3,
		toggleActions: 'play none none reverse',
	},
});
const sec6Text = document.querySelector('.sec6-text');

ani6.from('.sec6-text .line .char', {
	y: 300,
	autoAlpha: 0,
	duration: 0.7,
	ease: 'back.out(1)',
	stagger: 0.05,
});

ScrollTrigger.create({
	animation: ani6,
	trigger: sec6Text,
	start: 'top 70%',
	markers: false,
	// scrub: 0.5
});

//section7
const ani7 = gsap.timeline();

gsap.set('.sec7-con1', { autoAlpha: 1, delay: 4 });
gsap.from('.sec7-con1', {
	duration: 1.5,
	yPercent: -100,
	ease: 'power2.out',
	scrollTrigger: {
		trigger: '.sec7-con1 .sec7-img1',
		start: 'top 20%', // 섹션 상단이 뷰포트의 80%에 도달했을 때 애니메이션 시작
		end: 'bottom 20%', // 섹션 하단이 뷰포트의 20%에 도달했을 때 애니메이션 완료
		markers: false,
	},
});
gsap.from('.sec7-con1 .sec7-img1', {
	duration: 1.5,
	yPercent: 100,
	ease: 'power2.out',
	scrollTrigger: {
		trigger: '.sec7-con1 .sec7-img1',
		start: 'top 20%', // 섹션 상단이 뷰포트의 80%에 도달했을 때 애니메이션 시작
		end: 'bottom 20%', // 섹션 하단이 뷰포트의 20%에 도달했을 때 애니메이션 완료
		delay: 1, // 애니메이션 시작 전 대기 시간
		markers: false,
	},
});

gsap.set('.sec7-con2', { autoAlpha: 1, delay: 4 });

gsap.from('.sec7-con2', {
	duration: 1.5,
	yPercent: -100,
	ease: 'power2.out',
	scrollTrigger: {
		trigger: '.sec7-con1 .sec7-img1',
		start: 'top 20%', // 섹션 상단이 뷰포트의 80%에 도달했을 때 애니메이션 시작
		end: 'bottom 20%', // 섹션 하단이 뷰포트의 20%에 도달했을 때 애니메이션 완료
		markers: false,
	},
});
gsap.from('.sec7-con2-1', {
	duration: 1.5,
	yPercent: 100,
	ease: 'power2.out',
	scrollTrigger: {
		trigger: '.sec7-con1 .sec7-img1',
		start: 'top 20%', // 섹션 상단이 뷰포트의 80%에 도달했을 때 애니메이션 시작
		end: 'bottom 20%', // 섹션 하단이 뷰포트의 20%에 도달했을 때 애니메이션 완료
		delay: 1, // 애니메이션 시작 전 대기 시간
		markers: false,
	},
});

gsap.from('.sec7-desc', {
	opacity: 0,
	duration: 3,
	scrollTrigger: {
		trigger: '.sec7-desc',
		start: 'top 80%',
		end: 'top 50%',
		delay: 3,
		toggleActions: 'play none none reverse',
	},
});
const sec7Text = document.querySelector('.sec7-text');

ani7.from('.sec7-text .line .char', {
	y: 300,
	autoAlpha: 0,
	duration: 0.7,
	ease: 'back.out(1)',
	stagger: 0.05,
});

ScrollTrigger.create({
	animation: ani7,
	trigger: sec7Text,
	start: 'top 70%',
	markers: false,
	// scrub: 0.5
});

//section8
const ani8 = gsap.timeline();

gsap.set('.sec8-con1', { autoAlpha: 1, delay: 4 });
gsap.from('.sec8-con1', {
	duration: 1.5,
	yPercent: -100,
	ease: 'power2.out',
	scrollTrigger: {
		trigger: '.sec8-con1 .sec8-img1',
		start: 'top 20%', // 섹션 상단이 뷰포트의 80%에 도달했을 때 애니메이션 시작
		end: 'bottom 20%', // 섹션 하단이 뷰포트의 20%에 도달했을 때 애니메이션 완료
		markers: false,
	},
});
gsap.from('.sec8-con1 .sec8-img1', {
	duration: 1.5,
	yPercent: 100,
	ease: 'power2.out',
	scrollTrigger: {
		trigger: '.sec8-con1 .sec8-img1',
		start: 'top 20%', // 섹션 상단이 뷰포트의 80%에 도달했을 때 애니메이션 시작
		end: 'bottom 20%', // 섹션 하단이 뷰포트의 20%에 도달했을 때 애니메이션 완료
		delay: 1, // 애니메이션 시작 전 대기 시간
		markers: false,
	},
});

gsap.set('.sec8-con2', { autoAlpha: 1, delay: 4 });

gsap.from('.sec8-con2', {
	duration: 1.5,
	yPercent: -100,
	ease: 'power2.out',
	scrollTrigger: {
		trigger: '.sec8-con1 .sec8-img1',
		start: 'top 20%', // 섹션 상단이 뷰포트의 80%에 도달했을 때 애니메이션 시작
		end: 'bottom 20%', // 섹션 하단이 뷰포트의 20%에 도달했을 때 애니메이션 완료
		markers: false,
	},
});
gsap.from('.sec8-con2-1', {
	duration: 1.5,
	yPercent: 100,
	ease: 'power2.out',
	scrollTrigger: {
		trigger: '.sec8-con1 .sec8-img1',
		start: 'top 20%', // 섹션 상단이 뷰포트의 80%에 도달했을 때 애니메이션 시작
		end: 'bottom 20%', // 섹션 하단이 뷰포트의 20%에 도달했을 때 애니메이션 완료
		delay: 1, // 애니메이션 시작 전 대기 시간
		markers: false,
	},
});

gsap.from('.sec8-desc', {
	opacity: 0,
	duration: 3,
	scrollTrigger: {
		trigger: '.sec8-desc',
		start: 'top 80%',
		end: 'top 50%',
		delay: 3,
		toggleActions: 'play none none reverse',
	},
});
const sec8Text = document.querySelector('.sec8-text');

ani8.from('.sec8-text .line .char', {
	y: 300,
	autoAlpha: 0,
	duration: 0.7,
	ease: 'back.out(1)',
	stagger: 0.05,
});

ScrollTrigger.create({
	animation: ani8,
	trigger: sec8Text,
	start: 'top 70%',
	markers: false,
	// scrub: 0.5
});

//section 9
const ani9 = gsap.timeline();

gsap.set('.sec9-con1', { autoAlpha: 1, delay: 4 });
gsap.from('.sec9-con1', {
	duration: 1.5,
	yPercent: -100,
	ease: 'power2.out',
	scrollTrigger: {
		trigger: '.sec9-con1 .sec9-img1',
		start: 'top 20%', // 섹션 상단이 뷰포트의 80%에 도달했을 때 애니메이션 시작
		end: 'bottom 20%', // 섹션 하단이 뷰포트의 20%에 도달했을 때 애니메이션 완료
		markers: false,
	},
});
gsap.from('.sec9-con1 .sec9-img1', {
	duration: 1.5,
	yPercent: 100,
	ease: 'power2.out',
	scrollTrigger: {
		trigger: '.sec9-con1 .sec9-img1',
		start: 'top 20%', // 섹션 상단이 뷰포트의 80%에 도달했을 때 애니메이션 시작
		end: 'bottom 20%', // 섹션 하단이 뷰포트의 20%에 도달했을 때 애니메이션 완료
		delay: 1, // 애니메이션 시작 전 대기 시간
		markers: false,
	},
});

gsap.set('.sec9-con2', { autoAlpha: 1, delay: 4 });

gsap.from('.sec9-con2', {
	duration: 1.5,
	yPercent: -100,
	ease: 'power2.out',
	scrollTrigger: {
		trigger: '.sec9-con1 .sec9-img1',
		start: 'top 20%', // 섹션 상단이 뷰포트의 80%에 도달했을 때 애니메이션 시작
		end: 'bottom 20%', // 섹션 하단이 뷰포트의 20%에 도달했을 때 애니메이션 완료
		markers: false,
	},
});
gsap.from('.sec9-con2-1', {
	duration: 1.5,
	yPercent: 100,
	ease: 'power2.out',
	scrollTrigger: {
		trigger: '.sec9-con1 .sec9-img1',
		start: 'top 20%', // 섹션 상단이 뷰포트의 80%에 도달했을 때 애니메이션 시작
		end: 'bottom 20%', // 섹션 하단이 뷰포트의 20%에 도달했을 때 애니메이션 완료
		delay: 1, // 애니메이션 시작 전 대기 시간
		markers: false,
	},
});

gsap.from('.sec9-desc', {
	opacity: 0,
	duration: 3,
	scrollTrigger: {
		trigger: '.sec9-desc',
		start: 'top 80%',
		end: 'top 50%',
		delay: 3,
		toggleActions: 'play none none reverse',
	},
});
const sec9Text = document.querySelector('.sec9-text');

ani9.from('.sec9-text .line .char', {
	y: 300,
	autoAlpha: 0,
	duration: 0.7,
	ease: 'back.out(1)',
	stagger: 0.05,
});

ScrollTrigger.create({
	animation: ani9,
	trigger: sec9Text,
	start: 'top 70%',
	markers: false,
	// scrub: 0.5
});

//가로모드
const horizontal = document.querySelector('#horizontal');
const sections = gsap.utils.toArray('#horizontal > section');

gsap.to(sections, {
	xPercent: -100 * (sections.length - 1),
	ease: 'none',
	scrollTrigger: {
		trigger: horizontal,
		start: 'top top',
		end: () => '+=' + (horizontal.offsetWidth - window.innerWidth),
		pin: true,
		scrub: 1,
		snap: {
			snapTo: 1 / (sections.length - 1),
			inertia: false,
			duration: { min: 0.1, max: 0.1 },
		},
		invalidateOnRefresh: true,
		anticipatePin: 1,
	},
});

//section10
const sec10Img = document.querySelector('.sec10-img');
const sec10Text = document.querySelector('.sec10-text');

const ani10 = gsap.timeline();
ani10.from('.sec10-text .line:nth-child(1) .char', {
	y: 300,
	autoAlpha: 0,
	duration: 0.7,
	ease: 'back.out(1)',
	stagger: 0.05,
});

ScrollTrigger.create({
	animation: ani10,
	trigger: sec10Text,
	start: 'top 70%',
	markers: false,
	// scrub: 0.5
});

gsap.from('.sec10-img', {
	opacity: 0,
	duration: 2.5,
	scrollTrigger: {
		trigger: '.sec10-img',
		start: 'top 80%',
		end: 'top 50%',
		toggleActions: 'play none none reverse',
	},
});

gsap.from('.sec10-img3', {
	opacity: 0,
	duration: 3,
	scrollTrigger: {
		trigger: '.sec10-img3',
		start: 'top 80%',
		end: 'top 50%',
		toggleActions: 'play none none reverse',
	},
});

//section13
const sec13Img = document.querySelector('.sec13-img');
const sec13Text = document.querySelector('.sec13-text');

const ani13 = gsap.timeline();
ani13.from('.sec13-text .line:nth-child(1) .char', {
	y: 300,
	autoAlpha: 0,
	duration: 0.7,
	ease: 'back.out(1)',
	stagger: 0.05,
});

ScrollTrigger.create({
	animation: ani13,
	trigger: sec13Text,
	start: 'top 70%',
	markers: false,
	// scrub: 0.5
});

gsap.from('.sec13-img', {
	opacity: 0,
	duration: 2.5,
	scrollTrigger: {
		trigger: '.sec13-img',
		start: 'top 80%',
		end: 'top 50%',
		toggleActions: 'play none none reverse',
	},
});

gsap.from('.sec13-img3', {
	opacity: 0,
	duration: 3,
	scrollTrigger: {
		trigger: '.sec13-img3',
		start: 'top 80%',
		end: 'top 50%',
		toggleActions: 'play none none reverse',
	},
});

// //section11, section12, section14, section15
const scrollT2 = gsap.timeline();

const sec11Text = document.querySelector('.sec11-text');
const sec12Text = document.querySelector('.sec12-text');
const sec14Text = document.querySelector('.sec14-text');
const sec15Text = document.querySelector('.sec15-text');

scrollT2
	.addLabel('start')
	.from(
		'.sec11-img1',
		{
			y: 500,
			duration: 0.5,
			autoAlpha: 0,
			ease: 'circ',
		},
		'start',
	)
	.from(
		'.sec11-intro',
		{
			opacity: 0,
			duration: 3,
		},
		'start',
	)
	.from(
		'.sec11-img2',
		{
			opacity: 0,
			duration: 3,
		},
		'start',
	)
	.from(
		'.sec11-text .line .char',
		{
			y: 300,
			autoAlpha: 0,
			duration: 0.7,
			ease: 'back.out(1)',
			stagger: 0.05,
		},
		'start',
	)
	.addLabel('section12')
	.from(
		'.sec12-img1',
		{
			y: 500,
			duration: 0.5,
			autoAlpha: 0,
			ease: 'circ',
		},
		'section12',
	)
	.from(
		'.sec12-intro',
		{
			opacity: 0,
			duration: 3,
		},
		'section12',
	)
	.from(
		'.sec12-img2',
		{
			opacity: 0,
			duration: 3,
		},
		'section12',
	)
	.from(
		'.sec12-text .line .char',
		{
			y: 300,
			autoAlpha: 0,
			duration: 0.7,
			ease: 'back.out(1)',
			stagger: 0.05,
		},
		'section12',
	)
	.addLabel('section14')
	.from(
		'.sec14-img1',
		{
			y: 500,
			duration: 0.5,
			autoAlpha: 0,
			ease: 'circ',
		},
		'section14',
	)
	.from(
		'.sec14-intro',
		{
			opacity: 0,
			duration: 3,
		},
		'section14',
	)
	.from(
		'.sec14-img2',
		{
			opacity: 0,
			duration: 3,
		},
		'section14',
	)
	.from(
		'.sec14-text .line .char',
		{
			y: 300,
			autoAlpha: 0,
			duration: 0.7,
			ease: 'back.out(1)',
			stagger: 0.05,
		},
		'section14',
	)
	.addLabel('section15')
	.from(
		'.sec15-img1',
		{
			y: 500,
			duration: 0.5,
			autoAlpha: 0,
			ease: 'circ',
		},
		'section15',
	)
	.from(
		'.sec15-intro',
		{
			opacity: 0,
			duration: 3,
		},
		'section15',
	)
	.from(
		'.sec15-img2',
		{
			opacity: 0,
			duration: 3,
		},
		'section15',
	)
	.from(
		'.sec15-text .line .char',
		{
			y: 300,
			autoAlpha: 0,
			duration: 0.7,
			ease: 'back.out(1)',
			stagger: 0.05,
		},
		'section15',
	);

ScrollTrigger.create({
	animation: scrollT2,
	trigger: sec11Text,
	start: 'left -20%',
});

ScrollTrigger.create({
	animation: scrollT2,
	trigger: sec12Text,
	start: 'left -20%',
});
ScrollTrigger.create({
	animation: scrollT2,
	trigger: sec14Text,
	start: 'left -20%',
});
ScrollTrigger.create({
	animation: scrollT2,
	trigger: sec15Text,
	start: 'left -20%',
});

//section16
const ani16 = gsap.timeline();
ani16.fromTo(
	'#section16 .sec16-text .char',
	{
		x: 50,
		opacity: 0,
	},
	{
		duration: 1,
		x: 0,
		opacity: 1,
		ease: 'power2.easeOut',
		trigger: '#section16',
		stagger: {
			from: 'start',
			amount: 0.5,
			delay: -1.5,
		},
	},
);

//section18
