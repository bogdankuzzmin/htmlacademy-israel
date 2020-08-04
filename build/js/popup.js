'use strict';

(function () {
  var orderButton = document.querySelector('.main-header__order-call');
  var modalOverlay = document.querySelector('.modal-overlay');
  var modalCallOrder = document.querySelector('.modal-callback--request');
  var closePopupCallOrder = document.querySelector('.modal-callback__close-button');

  var modalSuccess = document.querySelector('.modal-callback--success');
  var closePopupSuccess = document.querySelector('.modal-callback__close-button--success');
  var closePopupSuccessMain = document.querySelector('.modal-callback__button--got-it');

  var openModalCallOrderHandler = function () {
    modalOverlay.classList.add('modal-overlay--active');
    modalCallOrder.classList.add('modal-callback--active');
    document.body.classList.add('scroll-lock');

    document.addEventListener('keydown', popupPresEscHandler);
    modalOverlay.addEventListener('click', clickModalOverlayHandler);
    closePopupCallOrder.addEventListener('click', closeModalCallOrderHandler);
    closePopupSuccess.addEventListener('click', closeModalSuccessHandler);
    closePopupSuccessMain.addEventListener('click', closeModalSuccessHandler);
  };

  var closeModalCallOrderHandler = function () {
    modalOverlay.classList.remove('modal-overlay--active');
    modalCallOrder.classList.remove('modal-callback--active');
    document.body.classList.remove('scroll-lock');

    document.removeEventListener('keydown', popupPresEscHandler);
    modalOverlay.removeEventListener('click', clickModalOverlayHandler);
    closePopupCallOrder.removeEventListener('click', closeModalCallOrderHandler);
    closePopupSuccess.removeEventListener('click', closeModalSuccessHandler);
  };

  var closeModalSuccessHandler = function () {
    closeModalCallOrderHandler();
    modalSuccess.classList.remove('modal-callback--active');
  };

  var clickModalOverlayHandler = function () {
    closeModalCallOrderHandler();
    closeModalSuccessHandler();
  };

  var popupPresEscHandler = function (evt) {
    if (!window.form.inputName.matches(':focus') &&
        !window.form.inputCellphone.matches(':focus')) {
      if (evt.key === 'Escape') {
        closeModalCallOrderHandler();
        closeModalSuccessHandler();
      }
    }
  };

  orderButton.addEventListener('click', openModalCallOrderHandler);

  window.popup = {
    modalSuccess: modalSuccess,
    modalCallOrder: modalCallOrder
  };
})();
