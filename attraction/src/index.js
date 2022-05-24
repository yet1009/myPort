import Store from './store.js';
import { qs, qsAll, delegate, on } from './dom.js';

function tempHeight() {

    let box1 = qs('.box1');
    let box3 = qs('.box3');
    let obj = {
        height: document.documentElement.clientHeight,
        num: 4,
    } 
    let { height, num } = obj;

    box1.style.height = (height * 4) + "px";
    box1.style.border = "1px solid red"

    box3.style.height = (height * 4) + "px";
    box3.style.border = "1px solid pink"

}


function FixedSection() {

    this.box2 = qs('.box2');

}




on(document, 'DOMContentLoaded', tempHeight)


on(document, 'scroll', () => { FixedSection() })



