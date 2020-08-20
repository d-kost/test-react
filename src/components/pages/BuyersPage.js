import React from 'react';
import Sidebar from '../../containers/Sidebar';
import BuyersContainer from '../../containers/BuyersContainer';

const BuyersPage = () => (

  <div className="container-fluid">
    <div className='row'>
      <Sidebar />
      <BuyersContainer />
    </div>
  </div>

)

export default BuyersPage;
