window.onload = function () {
	measurePageLoadTime();
};
function measurePageLoadTime() {
	var loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
	// 로딩 화면 요소
	var loadingElement = document.getElementById('loading');
	var loadingTextElement = document.getElementById('loading-text');
	// 로딩 수치 업데이트
	var progress = 0;
	var increment = 100 / loadTime; // 로딩 시간에 따라 증가하는 진행률 계산
	var intervalId = setInterval(function () {
		progress += increment;
		loadingTextElement.textContent = Math.round(progress) + '%';
		if (progress >= 100) {
			clearInterval(intervalId);
			progress = 100; // 진행률(progress)을 100으로 제한
			loadingTextElement.textContent = Math.round(progress) + '%'; // 수치를 100%로 표시
			loadingElement.classList.add('hidden'); // 로딩 화면에 hidden 클래스 추가
			document.body.style.visibility = 'visible'; // 페이지 내용 보이기
			setTimeout(function () {
				loadingElement.style.display = 'none'; // 로딩 화면 요소 제거
				startPage(); // 페이지 실행 코드
			}, 500);
		}
	});
}
