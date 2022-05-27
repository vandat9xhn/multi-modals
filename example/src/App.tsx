import * as React from 'react';
import {
  makeHiddenBefore,
  removeHiddenBefore,
} from '../node_modules/multi-modals/dist/index';
import Modal from './components/modal/Modal';

import './index.css';
// import { makeHiddenBefore, removeHiddenBefore } from './_package/utils/hiddenBefore';

//
export interface AppProps {}

//
const App = () => {
  //
  const [show, setShow] = React.useState(false);
  const [show2, setShow2] = React.useState(false);
  const [show3, setShow3] = React.useState(false);

  // ----

  function toggleModal() {
    setShow((show) => !show);
  }

  function toggleModal2() {
    setShow2((show2) => !show2);
  }

  function toggleModal3() {
    setShow3((show3) => !show3);
  }

  //
  return (
    <div className="app-modal">
      <div style={{ position: 'fixed', left: 0, top: 0 }}>
        <button type="button" onClick={toggleModal}>
          Toggle Modal
        </button>
      </div>

      <div style={{ height: '500px', backgroundColor: 'red' }}></div>
      <div style={{ height: '500px', backgroundColor: '' }}></div>
      <div style={{ height: '500px', backgroundColor: 'green' }}></div>
      <div style={{ height: '500px', backgroundColor: 'blue' }}></div>

      <Modal show={show}>
        <div
          style={{
            padding: '50px',
          }}
        >
          <div
            style={{
              position: 'fixed',
              left: 0,
              top: 0,
              width: '100%',
              height: '100vh',

              backgroundColor: 'rgb(0 0 0 / 25%)',
            }}
            onClick={toggleModal}
          ></div>

          <div
            style={{
              position: 'relative',
              margin: 'auto',
              width: 500,
              height: 1500,
              padding: 40,
              backgroundColor: 'white',
            }}
          >
            <h2>This is Modal</h2>

            <button type="button" onClick={toggleModal2}>
              Open modal 2
            </button>
          </div>
        </div>
      </Modal>

      <Modal
        show={show2}
        handleOpen={() => makeHiddenBefore(true)}
        handleClose={() => removeHiddenBefore(true)}
      >
        <div style={{ padding: '50px' }}>
          <div
            style={{
              position: 'fixed',
              left: 0,
              top: 0,
              width: '100%',
              height: '100vh',

              backgroundColor: 'rgb(0 0 0 / 25%)',
            }}
            onClick={toggleModal2}
          ></div>

          <div
            style={{
              position: 'relative',
              margin: 'auto',
              width: 400,
              height: 2000,
              padding: 40,
              backgroundColor: 'green',
              color: 'white',
            }}
          >
            <h2>This is Modal 2</h2>

            <button type="button" onClick={toggleModal3}>
              Open modal 3
            </button>
          </div>
        </div>
      </Modal>

      <Modal show={show3}>
        <div style={{ padding: '50px' }}>
          <div
            style={{
              position: 'fixed',
              left: 0,
              top: 0,
              width: '100%',
              height: '100vh',

              backgroundColor: 'rgb(0 0 0 / 25%)',
            }}
            onClick={toggleModal3}
          ></div>

          <div
            style={{
              position: 'relative',
              margin: 'auto',
              width: 300,
              padding: 40,
              backgroundColor: 'red',
              color: 'white',
            }}
          >
            <h2>This is Modal 3</h2>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default App;
