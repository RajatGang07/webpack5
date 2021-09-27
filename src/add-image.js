import A from './a.png';

export default function addImage() {
    const img = document.createElement('img');
    img.alt = 'screen';
    img.width = 350;
    img.src = A;
    const body = document.querySelector('body');
    body.appendChild(img);
}