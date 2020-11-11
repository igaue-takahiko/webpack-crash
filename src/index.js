import _ from 'lodash';
import './style.css';
import logo from './avatar1.png'

function component() {
    const element = document.createElement('div');
    const array = ["hello", "webpack"];
    element.innerHTML = _.join(array, " ");
    return element;
}

document.body.appendChild(component());
document.body.classList.add('container')

const image = new Image()
image.src = logo
document.body.appendChild(image)