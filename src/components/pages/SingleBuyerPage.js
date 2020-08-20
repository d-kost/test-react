import React from 'react';
import Sidebar from '../../containers/Sidebar';
import SingleBuyerContainer from '../../containers/SingleBuyerContainer';
import { useParams } from 'react-router-dom';

const SingleBuyerPage = () => {

  const { id } = useParams();

  return (

    <div className="container-fluid">
      <div className='row'>
        <Sidebar />
        <SingleBuyerContainer id={parseInt(id)} />
      </div>
    </div>

  )
}

export default SingleBuyerPage;
