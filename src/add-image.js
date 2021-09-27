import A from './a.png';
import coverageScreen from './altText.txt';

export default function addImage() {
    const img = document.createElement('img');
    img.alt = coverageScreen;
    img.width = 350;
    img.src = A;
    const body = document.querySelector('body');
    body.appendChild(img);
}