import Store from './store.js';
import { qs, qsAll, delegate, on } from './dom.js';


(() => {
    let yOffset = 0;
    let prevScrollHeight = 0;
    let currentScene = 0;
    let enterNewScene = false;

    const objs = [
        {
            box : qs('.box1'),
            heightNum: 3,
            scrollH: 0,
        },
        {
            box: qs('.box2'),
            heightNum: 5,
            scrollH: 0,
        },
        {
            box: qs('.box3'),
            heightNum: 3,
            scrollH: 0,
        }
    ]


    function slideFn() {

        let slider = document.querySelector('.slider');
        let innerSlider = document.querySelector('.slider-inner');
        let pressed = false;
        let startx;
        let x;

        slider.addEventListener('mousedown', e => {
            pressed = true;
            startx = e.offsetX - innerSlider.offsetLeft
            slider.style.cursor = "grabbing"
        })

        slider.addEventListener('mouseup', () => {
            slider.style.cursor = "grab"
        })

        slider.addEventListener('mousemove', e => {
            if(!pressed) return;
            e.preventDefault();
            x = e.offsetX;

            innerSlider.style.left = `${x - startx}px`
            checkboundary()
        })
        
        window.addEventListener('mouseup', () => {
            pressed = false;
        })


        function checkboundary() {
            let outer = slider.getBoundingClientRect()
            let inner = innerSlider.getBoundingClientRect();

            if(parseInt(innerSlider.style.left) > 0) {
                innerSlider.style.left = "0px"
            }else if(inner.right < outer.right) {
                innerSlider.style.left = `-${inner.width - outer.width}px`
            }
        }
    }

    slideFn()
    
    function setLayout() {

        for(let i = 0; i < objs.length; i++) {

            objs[i].scrollH = objs[i].heightNum * window.innerHeight;
            objs[i].box.style.height = `${objs[i].scrollH}px`
        }

        let totalScrollHeight = 0;
        yOffset = window.pageYOffset;
        for(let i = 0; i < objs.length; i++) {
            totalScrollHeight += objs[i].scrollH;
            if(totalScrollHeight > yOffset) {
                currentScene = i;
                break;
            }
        }

        // console.log(totalScrollHeight);
    }

    function scrollLoop() {
        prevScrollHeight = 0;
        enterNewScene = false;

        for(let i = 0; i < currentScene; i++) {
            prevScrollHeight += objs[i].scrollH;
        }

        if (yOffset > prevScrollHeight + objs[currentScene].scrollH) {
            enterNewScene = true;
            currentScene++;
        }

        if(yOffset < prevScrollHeight) {
            enterNewScene = true;
            if(currentScene === 0) return;
            currentScene--;
        }
    
        if(enterNewScene) return;

        playAnimation()
    }

    function playAnimation() {

        let parts = qs('.lists');
        let lis = qsAll('.lists > li');
        let arr = [...lis];

        const currentYOffset = yOffset - prevScrollHeight;
        const scrollRatio = currentYOffset / objs[currentScene].scrollH;

        switch(currentScene) {
            case 0 :
                parts.classList.remove('on')
                lis[0].classList.remove('on')
                lis.forEach(li => li.setAttribute('style', ''))
                break;

            case 1 :
                parts.classList.add('on')
                lis.forEach(li => li.style.top = "25%")
                if(scrollRatio > 0 && scrollRatio <= 0.25) {
                
                    lis[0].classList.add('on')
                    arr.splice(0,1);
                    arr.forEach(li => li.classList.remove('on'))
                    
                }else if(scrollRatio > 0.25 && scrollRatio <= 0.50) {

                    lis[1].classList.add('on')
                    arr.splice(1,1);
                    arr.forEach(li => li.classList.remove('on'))

                }else if(scrollRatio > 0.50 && scrollRatio <= 0.75){

                    lis[2].classList.add('on')
                    arr.splice(2,1);
                    arr.forEach(li => li.classList.remove('on'))

                }else {
                    
                    lis[3].classList.add('on')
                    arr.splice(3,1);
                    arr.forEach(li => li.classList.remove('on'))

                }
                break;

            case 2 :
                parts.classList.remove('on')
                lis[3].classList.remove('on')
                lis.forEach(li => li.setAttribute('style', ''))
        }

    }


    window.addEventListener('load', setLayout)
    window.addEventListener('scroll', () => {
        yOffset = window.pageYOffset;
        scrollLoop()
    })
    window.addEventListener('resize', setLayout)
    


})()


