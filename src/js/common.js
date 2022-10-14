'use strict';

(function () {
  /**
   * DOM
   */
  // トップへ戻るボタン
  const btnToTop = document.querySelector('.js-button-to-top');

  /**
   * 関数
   */
  // トップへ戻るボタンの表示・非表示
  const btnToTopToggle = function () {
    if (window.pageYOffset > 300) {
      btnToTop.classList.add('is-show');
    } else {
      btnToTop.classList.remove('is-show');
    }
  }
  // ページトップへ戻る動き
  const scrollToTop = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  /**
   * イベント
   */
  // ウィンドウのスクロールによるトップへ戻るボタンの表示・非表示
  window.addEventListener('scroll', btnToTopToggle);
  // トップへ戻るボタンのクリックによりページトップへ戻る
  btnToTop.addEventListener('click', scrollToTop);
})();