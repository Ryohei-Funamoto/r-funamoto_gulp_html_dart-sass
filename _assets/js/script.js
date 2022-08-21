'use strict';

document.addEventListener('DOMContentLoaded', function () {
  /**
   * トップへ戻るボタン
   */
  const toTop = document.querySelector('.js-to-top');

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      toTop.classList.add('is-show');
    } else {
      toTop.classList.remove('is-show');
    }
  });

  toTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});