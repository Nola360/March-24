
const search_button = document.querySelector('.icon_box1');
console.log(search_button);

const exit_button = document.querySelector('.icon_box2');


const search_bar = document.querySelector('.search_box')
console.log(exit_button);








search_button.addEventListener('click', function () {
  search_button.classList.add('active');
  exit_button.classList.add('active');
  search_bar.classList.add('active');
})


exit_button.addEventListener('click', function () {
  search_button.classList.remove('active');
  exit_button.classList.remove('active');
  search_bar.classList.remove('active');
})
