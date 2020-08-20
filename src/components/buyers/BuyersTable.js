import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BuyersTable = ({ buyers }) => {

  return (
    <div className='table-responsive'>
      <table className='table table-sm table-hover text-center'>

        <thead>
          <tr>
            <th scope="col">ID покупателя</th>
            <th scope="col">Имя покупателя</th>
            <th scope="col">Средний чек</th>
            <th scope="col">Количество покупок</th>
            <th scope="col">Общая выручка</th>
          </tr>
        </thead>

        <tbody>

          {buyers.map(buyer => (
            <tr key={buyer.id}>
              <td><Link to={`/buyers/${buyer.id}`}>{buyer.id}</Link></td>
              <td>{buyer.name}</td>
              <td>{buyer.averageCheck}</td>
              <td>{buyer.purchaseNumber}</td>
              <td>{buyer.total}</td>
            </tr>
          )
          )}

        </tbody>
      </table>
    </div>
  )
}

BuyersTable.propTypes = {
  buyers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      averageCheck: PropTypes.number,
      purchaseNumber: PropTypes.number,
      total: PropTypes.number
    })
  ),

}

export default BuyersTable;
