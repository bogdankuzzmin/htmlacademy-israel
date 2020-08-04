'use strict';

(function () {
  var checkInputInvalidity = function (element) {
    if (element.validity.valueMissing) {
      element.setCustomValidity('Обязательное поле');
    } else if (element.validity.tooShort) {
      element.setCustomValidity('Минимальное значение - ' + element.minLength + ' симв.');
    } else {
      element.setCustomValidity('');
    }
  };

  var inputInvalidNameHandler = function () {
    checkInputInvalidity(inputName);
  };

  var inputInvalidCellphoneHandler = function () {
    checkInputInvalidity(inputCellphone);
  };

  var inputInvalidArrangementHandler = function () {
    checkInputInvalidity(inputArrangement);
  };

  var checkValidityTemplate = function (element) {
    if (element.checkValidity() === false) {
      element.parentElement.classList.add('modal-callback__input-wrapper--invalid');

      element.addEventListener('input', function () {
        element.reportValidity();

        if (element.checkValidity() === false) {
          element.parentElement.classList.add('modal-callback__input-wrapper--invalid');
          element.parentElement.classList.remove('modal-callback__input-wrapper--valid');
        } else {
          element.parentElement.classList.remove('modal-callback__input-wrapper--invalid');
          element.parentElement.classList.add('modal-callback__input-wrapper--valid');
        }
      });
    } else {
      element.parentElement.classList.add('modal-callback__input-wrapper--valid');
    }
  };

  var checkboxValidityHandler = function () {
    if (inputArrangement.checkValidity() === false) {
      if (!inputArrangement.checked) {
        inputArrangement.parentElement.classList.add('modal-callback__checkbox-wrapper--invalid');
      }

      inputArrangement.addEventListener('change', function () {
        if (inputArrangement.checked) {
          inputArrangement.parentElement.classList.remove('modal-callback__checkbox-wrapper--invalid');
          inputArrangement.parentElement.classList.add('modal-callback__checkbox-wrapper--valid');
        } else {
          inputArrangement.parentElement.classList.remove('modal-callback__checkbox-wrapper--valid');
          inputArrangement.parentElement.classList.add('modal-callback__checkbox-wrapper--invalid');
        }
      });
    }
  };

  var checkValidityHandler = function () {
    checkValidityTemplate(inputName);
    checkValidityTemplate(inputCellphone);
    checkboxValidityHandler(inputArrangement);
  };

  var cellphoneTypeNumberHandler = function () {
    inputCellphone.value = inputCellphone.value.replace(/[^0-9+()-]/g, '');
  };


  var submitSuccessHandler = function (evt) {
    evt.preventDefault();
    window.popup.modalCallOrder.classList.remove('modal-callback--active');
    window.popup.modalSuccess.classList.add('modal-callback--active');
  };

  var init = function () {
    inputName.addEventListener('invalid', inputInvalidNameHandler);
    inputCellphone.addEventListener('invalid', inputInvalidCellphoneHandler);
    inputArrangement.addEventListener('invalid', inputInvalidArrangementHandler);
    submitButton.addEventListener('click', checkValidityHandler);
    modalForm.addEventListener('submit', submitSuccessHandler);

    inputCellphone.addEventListener('keyup', cellphoneTypeNumberHandler);
  };

  var inputName = document.querySelector('#name');
  var inputCellphone = document.querySelector('#cellphone');
  var inputArrangement = document.querySelector('#arrangement');
  var modalForm = document.querySelector('.modal-callback__form');
  var submitButton = document.querySelector('.modal-callback__button');

  init();

  window.form = {
    inputName: inputName,
    inputCellphone: inputCellphone
  };
})();
