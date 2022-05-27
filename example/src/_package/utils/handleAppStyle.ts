import { DATA_COUNT_MODAL, DATA_HIDDEN } from '../globalVariable';

//
let styleChild: HTMLStyleElement | null = null;

//
export function makeAppStyle({
    classAppModal,
    zIndex
}: {
    classAppModal: string;
    zIndex: number;
}) {
    const appStyle = document.createElement('style');
    let styleString = `
        .${classAppModal}{
            position: relative;
            z-index: ${zIndex + 1};
        }
        .${classAppModal}[${DATA_COUNT_MODAL}]{
            position: fixed;
            top: 0;
            left: 0;
            z-index: ${zIndex};

            width: 100%;
            height: 100vh;
            overflow: auto;
        }
        .${classAppModal}[${DATA_COUNT_MODAL}]::-webkit-scrollbar{
            display: none;
        }

        .${classAppModal}[${DATA_HIDDEN}]{
            display: none;
        }
    `;

    appStyle.innerHTML = styleString;
    const head = document.getElementsByTagName('head')[0];
    styleChild = head.appendChild(appStyle);
}

export function removeAppStyle() {
    const head = document.getElementsByTagName('head')[0];
    styleChild && head.removeChild(styleChild);
    styleChild = null;
}
