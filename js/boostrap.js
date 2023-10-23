const range = document.getElementById('range');
const imageOne = document.getElementById('image-one');
const imageTwo = document.getElementById('image-two');

range.value = 0;

range.addEventListener('input', function() {
    let chValue = range.value;
    imageOne.style.opacity = 1 + chValue / 10;
    console.log(1 + chValue / 10)
    imageTwo.style.opacity = 1 - chValue / 10;
    console.log(1 - chValue / 10)
})