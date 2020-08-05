'use strict';

(function () {
  var orderButton = document.querySelector('.main-header__order-call');
  var modalOpen = document.querySelector('.modal-callback');
  var modalCallOrder = document.querySelector('.modal-callback__wrapper--request');
  var closePopupCallOrder = document.querySelector('.modal-callback__close-button');

  var modalSuccess = document.querySelector('.modal-callback__wrapper--success');
  var closePopupSuccess = document.querySelector('.modal-callback__close-button--success');
  var closePopupSuccessMain = document.querySelector('.modal-callback__button--got-it');

  var body = document.querySelector('body');

  var openModalCallOrderHandler = function () {
    // modalOverlay.classList.add('modal-overlay--active');

    modalCallOrder.classList.add('modal-callback__wrapper--active');
    modalOpen.classList.add('modal-callback--active');
    body.classList.add('scroll-lock');

    document.addEventListener('keydown', popupPresEscHandler);
    modalOpen.addEventListener('click', clickModalOverlayHandler);
    closePopupCallOrder.addEventListener('click', closeModalCallOrderHandler);
    closePopupSuccess.addEventListener('click', closeModalSuccessHandler);
    closePopupSuccessMain.addEventListener('click', closeModalSuccessHandler);
  };

  var closeModalCallOrderHandler = function () {
    modalOpen.classList.remove('modal-callback--active');
    modalCallOrder.classList.remove('modal-callback__wrapper--active');
    body.classList.remove('scroll-lock');

    document.removeEventListener('keydown', popupPresEscHandler);
    modalOpen.removeEventListener('click', clickModalOverlayHandler);
    closePopupCallOrder.removeEventListener('click', closeModalCallOrderHandler);
    closePopupSuccess.removeEventListener('click', closeModalSuccessHandler);
  };

  var closeModalSuccessHandler = function () {
    closeModalCallOrderHandler();
    modalSuccess.classList.remove('modal-callback__wrapper--active');
  };

  var clickModalOverlayHandler = function (evt) {
    if (evt.target.matches('.modal-callback')) {
      closeModalCallOrderHandler();
      closeModalSuccessHandler();
    }
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
