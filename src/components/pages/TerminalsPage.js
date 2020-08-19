import React from 'react';
import Sidebar from '../../containers/Sidebar';
import TerminalsContainer from '../../containers/TerminalsContainer';

const TerminalsPage = () => {

  return (
    <div className="container-fluid">
      <div className='row'>
        <Sidebar />
        <TerminalsContainer />
      </div>
    </div>

  )
}

export default TerminalsPage;
