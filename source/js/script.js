
// Файл script.js
"use strict";
(function () {
  var buttonsAnswerFirstOpen = document.querySelector(".faq__question-first");
  var buttonsAnswerSecondtOpen = document.querySelector(".faq__question-second");

  /**
   * @name openAnswerFirst
   * @description функция переключения класса faq__question-first--open
   */
  var openAnswerFirst = function () {
    buttonsAnswerFirstOpen.classList.toggle("faq__question-first--open");
  };

   /**
   * @name openAnswerSecond
   * @description функция переключения класса faq__question-second--open
   */
  var openAnswerSecond = function () {
    buttonsAnswerSecondtOpen.classList.toggle("faq__question-second--open");
  };

  /**
   * @name buttonsAnswerFirstOpenClickHandler
   * @description функция обработчик при нажатии на buttonsAnswerFirstOpen
   */
  var buttonsAnswerFirstOpenClickHandler = function () {
    openAnswerFirst();
  };

  /**
   * @name buttonsAnswerSecondtOpenClickHandler
   * @description функция обработчик при нажатии на buttonsAnswerSecondtOpen
   */
  var buttonsAnswerSecondtOpenClickHandler = function () {
    openAnswerSecond();
  };

  buttonsAnswerFirstOpen.addEventListener("click", buttonsAnswerFirstOpenClickHandler);
  buttonsAnswerSecondtOpen.addEventListener("click", buttonsAnswerSecondtOpenClickHandler);
  
})();
