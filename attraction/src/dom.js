export function qs(selector, scope = document) {
    if(!selector) throw "no selector";

    return scope.querySelector(selector)
}

export function qsAll(selector, scope = document) {
    if(!selector) throw "no selector";

    return Array.from(scope.querySelectorAll(selector))
}

export function on(target, eventName, handler) {
    target.addEventListener(eventName, handler);
}


export function delegate(target, eventName, selector, eventhandler) {
    const emitEvent = () => {
        const potentialElements = qsAll(selector, target);
        for(const potentialElement of potentialElements) {
            if(potentialElement === event.target) {
                return handler.call(event.target, event);
            }
        }
    }

    on(target, eventName, emitEvent)
    
}