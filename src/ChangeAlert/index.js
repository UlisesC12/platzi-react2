import React from 'react';
import { withStorageListener } from './withStorageList';

function ChangeAlert({show, toggle}) {
  if(show){
    return <p>Hubo cambios</p>;
  }

}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export {ChangeAlertWithStorageListener}