function getRandomColor(){
    let color = '#';
    let letters = '0123456789ABCDEF';

    for (let i = 0 ; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let body = document.getElementById('body')
function changeBackgroundColor(){
    console.log('Clicked somewhere on body');
    document.body.style.backgroundColor = getRandomColor();
}


addEventListener('click', changeBackgroundColor);