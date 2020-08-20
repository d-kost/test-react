import React from 'react';
import PropTypes from 'prop-types';

const BuyersPagination = ({ currentPage, pagesNumber, changeCurrentPage }) => {

  const getPageItems = () => {
    let result = [];

    for (let i = 0; i < pagesNumber; i++) {
      let liClassName = i === currentPage ? 'page-item active' : 'page-item';

      result.push(
        <li key={i} className={liClassName} onClick={() => changeCurrentPage(i)}>
          <span className='page-link'>{i + 1}</span>
        </li>
      )
    }

    return result;
  }

  return (
    <div className=''>
      <ul className='pagination pagination-sm'>

        {getPageItems()}

      </ul>
    </div>
  )
}

BuyersPagination.propTypes = {
  currentPage: PropTypes.number,
  pagesNumber: PropTypes.number,
  changeCurrentPage: PropTypes.func
}

export default BuyersPagination;
