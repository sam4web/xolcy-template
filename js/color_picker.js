const colorNode = document.querySelectorAll('.color-block');

$('.color-picker__toggle-btn').on('click', (e) => {
  $('.color-picker').toggleClass('color-picker__show');
  e.stopPropagation();
});

$(document).on('click', (e) => {
  if ($(e.target).is('.color-picker') === false) {
    $('.color-picker').removeClass('color-picker__show');
  }
});

colorNode.forEach((colorBlock) => {
  colorBlock.addEventListener('click', () => {
    let backgroundColor = getBackgrounColor(colorBlock);
    $(':root').css('--main-color', backgroundColor);
    $('.color-picker__toggle-btn').css('color', backgroundColor);
  });
});

const getBackgrounColor = (element) => {
  return window
    .getComputedStyle(element, null)
    .getPropertyValue('background-color');
};
