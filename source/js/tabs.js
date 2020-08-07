'use strict';
(function () {
  var titleItems = document.querySelectorAll('.programs__title-item');
  var descriptionItems = document.querySelectorAll('.programs__description-item');
  var titleItemActive = 'programs__title-item--active';
  var descriptionItemsActive = 'programs__description-item--active';

  var removeActive = function (arr, className) {
    arr.forEach(function (it) {
      it.classList.remove(className);
    });
  };

  titleItems.forEach(function (it, index) {
    it.addEventListener('click', function () {
      removeActive(titleItems, titleItemActive);
      removeActive(descriptionItems, descriptionItemsActive);

      it.classList.add(titleItemActive);
      descriptionItems[index].classList.add(descriptionItemsActive);
    });
  });
})();
