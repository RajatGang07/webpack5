// import './helloWorld.css'
import './helloWorld.scss'

export default class HelloWorld{
    render(){
        const button = document.createElement('button');
        button.innerHTML = 'Hello World';
        button.classList.add('hello-world-button');
        button.onclick = function(){
            const p = document.createElement('p');
            p.classList.add('hello-world-text');
            p.innerHTML = 'hello RG';
            body.appendChild(p);
        }
        const body = document.querySelector('body');
        body.appendChild(button);
    }
}
