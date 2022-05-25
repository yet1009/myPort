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

function calcValue() {

    

}






function fixedSection(e) {
    
    const { pageYOffset, innerHeight } = window;
    const box1 = qs('.box1');
    const box2 = qs('.box2');
    const box3 = qs('.box3');
    const box2H = box2.scrollHeight;
    const box3H = box3.clientHeight;
    let posInfo = box2.getBoundingClientRect();
    let posInfo1 = box3.getBoundingClientRect();
    const { top } = posInfo;
    const { top: top1 } = posInfo1;
    const obj = {
        range: [0, 1],
        len: Store.length,
    };

    // console.log(pageYOffset);
    console.log(document.documentElement.scrollTop);
    // console.log(top - box1.getBoundingClientRect().top);


    // 이벤트가 일어나는 범위
    // if( top - pageYOffset < 0 && top1 + pageYOffset - box2H > pageYOffset ) {
        
    //     console.log(pageYOffset / 4);
        
    
    // }


}






on(document, 'DOMContentLoaded', () => {
    tempHeight();
})
on(document, 'scroll', (e) => { fixedSection(e) })



