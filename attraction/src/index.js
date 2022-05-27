import Store from './store.js';
import { qs, qsAll, delegate, on } from './dom.js';


const sceneInfo = [
    {
        heightNum: 2,
        selector: {
            container: qs('.box1'),
        }
    },
    {
        heightNum: 4,
        selector: {
            container: qs('.box2'),
            part1: qs('.box2 .frame .lists .list1'),
            part2: qs('.box2 .frame .lists .list2'),
            part3: qs('.box2 .frame .lists .list3'),
            part4: qs('.box2 .frame .lists .list4'),
        }
    },
    {
        heightNum: 2,
        selector: {
            container: qs('.box3')
        }
    }
]


// 임시 영역 높이 지정
function tempHeight() {

    
    for(let i = 0; i < sceneInfo.length; i++) {
        sceneInfo[i].selector.container.style.height = window.innerHeight * sceneInfo[i].heightNum + "px"
    }

    // let box1 = qs('.box1');
    // let box3 = qs('.box3');
    // let obj = {
    //     height: document.documentElement.clientHeight,
    //     num: 4,
    // } 
    // let { height, num } = obj;
    // box1.style.height = (height * 4) + "px";
    // box1.style.backgroundColor = "#ECE5C7";

    // box3.style.height = (height * 4) + "px";
    // box3.style.backgroundColor = "#CDC2AE"
}

tempHeight()



// // 특정위치 스크롤 이벤트
function fixedSection() {
            
    const { innerHeight, pageYOffset } = window;
    const box2 = qs('.box2')
    const box1 = qs('.box1');
    let { top, bottom } = box2.getBoundingClientRect()
    let box1H  = box1.clientHeight
    let targetH  = box2.clientHeight

    
    if(top <= 0) {
        box2.classList.add('on')
    }


    // console.log(top);
    // console.log(pageYOffset);
    // console.log(pageYOffset, box1H);

    // console.log(targetH);
    // console.log(top + pageYOffset - targetH <= pageYOffset && bottom + pageYOffset - targetH > pageYOffset );
}


on(document, "scroll", () => {

    fixedSection()

})

