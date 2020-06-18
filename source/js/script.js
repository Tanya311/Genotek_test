
// Файл script.js
"use strict";
(function () {
  var faq = document.querySelector(".faq");
 
   /**
   * @name openAnswerSecond
   * @description функция переключения класса faq__question-second--open
   */
  var openAnswer = function (evt) {
    evt.target.classList.toggle("faq__question--open");
  };


  /**
   * @name buttonsAnswerSecondtOpenClickHandler
   * @description функция обработчик при нажатии на buttonsAnswerOpenClickHandler
   */
  var buttonsAnswerOpenClickHandler = function (evt) {
    if(evt.target.classList.contains("faq__question")) {
      openAnswer(evt);
    }
  };


  faq.addEventListener("click", buttonsAnswerOpenClickHandler);
})();
