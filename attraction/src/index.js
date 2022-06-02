import Store from './store.js';
import { qs, qsAll, delegate, on } from './dom.js';


function a(fn) {
    console.log(fn(3))
}

a(item => item+1)

// (() => {

//     let yOffset = 0;
//     let prevScrollHeight = 0;
//     let currentScene = 0;

//     const objs = [
//         {
//             box : qs('.box1'),
//             heightNum: 3,
//             scrollH: 0,
//         },
//         {
//             box: qs('.box2'),
//             heightNum: 5,
//             scrollH: 0,
//         },
//         {
//             box: qs('.box3'),
//             heightNum: 3,
//             scrollH: 0,
//         }
//     ]

    
//     function setLayout() {

//         for(let i = 0; i < objs.length; i++) {

//             objs[i].scrollH = objs[i].heightNum * window.innerHeight;
//             objs[i].box.style.height = `${objs[i].scrollH}px`
//         }

//         let totalScrollHeight = 0;
//         yOffset = window.pageYOffset;
//         for(let i = 0; i < objs.length; i++) {
//             totalScrollHeight += objs[i].scrollH;
//             if(totalScrollHeight > yOffset) {
//                 currentScene = i;
//                 break;
//             }
//         }

//         // console.log(totalScrollHeight);
//     }

//     function scrollLoop() {
//         prevScrollHeight = 0;

//         for(let i = 0; i < currentScene; i++) {
//             prevScrollHeight += objs[i].scrollH;
//         }

//         if (yOffset > prevScrollHeight + objs[currentScene].scrollH) {
//             currentScene++;
//         }

//         if(yOffset < prevScrollHeight) {
//             if(currentScene === 0) return;
//             currentScene--;
//         }
    
//         playAnimation()
//     }

//     function playAnimation() {

//         let parts = qs('.lists');
//         let lis = qsAll('.lists > li');

//         const currentYOffset = yOffset - prevScrollHeight;
//         const scrollRatio = currentYOffset / objs[currentScene].scrollH;

//         // parts.classList.remove('on');
        
//         switch(currentScene) {
//             case 1 :
                
//                 // console.log(/ objs[currentScene].scrollH);
//                 // console.log(scrollRatio);
//                 if(scrollRatio >=0 && scrollRatio <= 0.25) {
//                     lis[0].classList.add('on')
//                 }else if(scrollRatio > 0.25 && scrollRatio <= 0.50) {
//                     lis[1].classList.add('on')
//                 }else if(scrollRatio > 0.50 && scrollRatio <= 0.75){
//                     lis[2].classList.add('on')
//                 }else {
//                     lis[3].classList.add('on')
//                 }


//                 break;
//         }

//     }





    
//     window.addEventListener('load', setLayout)
//     window.addEventListener('scroll', () => {
//         yOffset = window.pageYOffset;
//         scrollLoop()
//     })
//     window.addEventListener('resize', setLayout)

// })()


