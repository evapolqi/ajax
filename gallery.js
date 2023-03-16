let gallery = document.querySelector('.main');
let pic = document.querySelector('.main_pic');
let text = document.querySelector('.main_text');
let back = document.querySelector('.main_back');
let forward = document.querySelector('.main_forward');
let currentImage = 1;
render();
function render() {
    if(currentImage == 1) {
        back.setAttribute('disabled', 'disabled')
    } else {
        back.removeAttribute('disabled')
    }
} 
forward.setAttribute('disabled', 'disabled');

let request = new XMLHttpRequest();
request.open('GET', `gallery${currentImage}.json`);
console.log(request);
request.send();

request.onload = function () {
    let imagedata = JSON.parse(request.response);
    pic.src = imagedata.image;
    text.innerHTML = imagedata.article;
    if(imagedata.isLast != true) {
        forward.removeAttribute('disabled');
    }
}
back.addEventListener('click', () => {
    currentImage = currentImage -1;
    render();

})
forward.addEventListener('click', () => {
    currentImage = currentImage +1;
    render();
    console.log(forward)
})
