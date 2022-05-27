import { DATA_HIDDEN } from '../globalVariable';

//
export function makeHiddenBefore(hiddenApp = false) {
    const list = document.getElementsByClassName('app-modal');
    for (let i = hiddenApp ? 0 : 1; i < list.length - 1; i++) {
        const countHidden = parseInt(list[i].getAttribute(DATA_HIDDEN) || '0');
        list[i].setAttribute(DATA_HIDDEN, `${countHidden + 1}`);
    }
}

//
export function removeHiddenBefore(hiddenApp = false) {
    const list = document.getElementsByClassName('app-modal');
    for (let i = hiddenApp ? 0 : 1; i <= list.length - 1; i++) {
        const countHidden = parseInt(list[i].getAttribute(DATA_HIDDEN) || '0');

        if (countHidden > 1) {
            list[i].setAttribute(DATA_HIDDEN, `${countHidden - 1}`);
        } else {
            list[i].removeAttribute(DATA_HIDDEN);
        }
    }
}
