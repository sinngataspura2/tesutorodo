window.addEventListener('load', () => {
  // 2秒後にスプラッシュ画面を非表示にし、メインコンテンツを表示
  setTimeout(() => {
    document.getElementById('splash').classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');
  }, 2000); // 2000ミリ秒 = 2秒
});
