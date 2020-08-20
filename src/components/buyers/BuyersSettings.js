import React from 'react';
import PropTypes from 'prop-types';


const BuyersSettings = (
  {
    buyersNumber,
    buyersNumberChange,
    buyersSorting,
    buyersSortingChange,
    buyersNameFilter,
    changeBuyersNameFilter
  }
) => {

  return (
    <>
      <div className='form-group'>
        <label>
          Количество покупателей в таблице

        <select
            value={buyersNumber}
            onChange={e => buyersNumberChange(parseInt(e.target.value))}
            className='custom-select custom-select-sm'
          >
            <option value='5'>5</option>
            <option value='10'>10</option>
            <option value='15'>15</option>
          </select>

        </label>
      </div>

      <div className='form-group'>
        <label>
          Сортировка

        <select
            value={buyersSorting}
            onChange={e => buyersSortingChange(e.target.value)}
            className='custom-select custom-select-sm'
          >
            <option value='none'>Нет</option>
            <option value='averageCheck'>Средний чек</option>
            <option value='purchaseNumber'>Количество покупок</option>
            <option value='total'>Общая выручка</option>
          </select>

        </label>
      </div>

      <div className='form-group'>
        <label>
          Фильтр по имени

          <input
            type='text'
            value={buyersNameFilter}
            onChange={e => changeBuyersNameFilter(e.target.value)}
            className='form-control'
          />

        </label>
      </div>
    </>
  )
}

BuyersSettings.propTypes = {
  buyersNumber: PropTypes.number,
  buyersNumberChange: PropTypes.func,
  buyersSorting: PropTypes.string,
  buyersSortingChange: PropTypes.func,
  buyersNameFilter: PropTypes.string,
  changeBuyersNameFilter: PropTypes.func
}

export default BuyersSettings;
