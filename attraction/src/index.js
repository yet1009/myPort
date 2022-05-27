import Store from './store.js';
import { qs, qsAll, delegate, on } from './dom.js';

const sceneInfo = [
    {
        selector: {
            container: qs('.box1'),
        }
    },
    {
        selector: {
            container: qs('.box2'),
            part1: qs('.box2 .frame .lists .list1'),
            part2: qs('.box2 .frame .lists .list2'),
            part3: qs('.box2 .frame .lists .list3'),
            part4: qs('.box2 .frame .lists .list4'),
        }
    },
    {
        selector: {
            container: qs('.box3')
        }
    }
]




function tempHeight() {

    let box1 = qs('.box1');
    let box3 = qs('.box3');
    let obj = {
        height: document.documentElement.clientHeight,
        num: 4,
    } 
    let { height, num } = obj;
    box1.style.height = (height * 4) + "px";
    box1.style.backgroundColor = "#ECE5C7";

    box3.style.height = (height * 4) + "px";
    box3.style.backgroundColor = "#CDC2AE"
}

tempHeight()

function fixedSection(e) {
    
}

