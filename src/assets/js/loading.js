function imagesProgress() {
	var $container = $('#loading'),
		$progressText = $container.find('#loading-text'),
		imgLoad = imagesLoaded('body'),
		imgTotal = imgLoad.images.length,
		imgLoaded = 0,
		current = 0,
		progressTimer = setInterval(updateProgress, 2000 / 60);

	imgLoad.on('progress', function () {
		imgLoaded++;
	});

	function updateProgress() {
		var target = (imgLoaded / imgTotal) * 100;

		current += (target - current) * 0.1;
		$progressText.text(Math.floor(current) + '%');

		if (current >= 100) {
			clearInterval(progressTimer);
			$container.animate({ opacity: '0' }, 1500, 'easeInOutQuint').animate({ top: '-100%' }, 1500);

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
			const ani1 = gsap.timeline();
			ani1.to('.sec1-box', { duration: 4, scale: 5, ease: 'none', backgroundColor: '#4B8FB6' });
			const panel2 = document.querySelector('#section2');

			ScrollTrigger.create({
				animation: ani1,
				trigger: panel2,
				start: 'top 90%',
				markers: false,
				scrub: 0.5,
			});
		}
		if (current > 99.9) {
			current = 100;
		}
	}
}

imagesProgress();
