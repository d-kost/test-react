import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const SingleBuyer = ({ buyer }) => {

  if (!buyer) {
    return <Redirect to={'/error'} />
  }

  return (
    <div className='col-sm-9 col-12 ml-auto'>
      <h2 className='text-center'>{buyer.name}</h2>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item'>ID покупателя: {buyer.id}</li>
        <li className='list-group-item'>Средний чек: {buyer.averageCheck}</li>
        <li className='list-group-item'>Количество покупок: {buyer.purchaseNumber}</li>
        <li className='list-group-item'>Общая выручка: {buyer.total}</li>
      </ul>
    </div >

  )
}

SingleBuyer.propTypes = {
  buyer: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    averageCheck: PropTypes.number,
    purchaseNumber: PropTypes.number,
    total: PropTypes.number
  })
}

export default SingleBuyer;
