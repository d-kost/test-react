import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BuyersTable from './BuyersTable';
import BuyersPagination from './BuyersPagination';
import BuyersSettings from './BuyersSettings';

const Buyers = ({ buyers }) => {

  //number of buyers
  const PAGINATION_TRIGGER = 5;

  //settings
  const [buyersSorting, setBuyersSorting] = useState('none');
  const [buyersNameFilter, setBuyersNameFilter] = useState('');
  const [pageBuyersNumber, setPageBuyersNumber] = useState(15);
  const [currentPage, setCurrentPage] = useState(0);

  const filterBuyers = () => {
    //first step - filtration
    let nameFilter = buyersNameFilter.toLowerCase();

    return buyers.filter(buyer => buyer.name.toLowerCase().includes(nameFilter));
  }

  let filteredBuyers = filterBuyers();
  let pagesNumber = Math.ceil(filteredBuyers.length / pageBuyersNumber);

  const sortBuyers = () => {
    if (buyersSorting !== 'none') {
      filteredBuyers.sort((a, b) => a[buyersSorting] - b[buyersSorting]);
    }
  }

  const getBuyersForCurrentPage = () => {
    //second step - sorting
    sortBuyers();

    //third step - pagination
    let startIndex = currentPage * pageBuyersNumber;
    return filteredBuyers.slice(startIndex, startIndex + pageBuyersNumber);
  }

  const changeBuyersNumber = (value) => {
    setPageBuyersNumber(value);

    if (value !== 5) {
      setCurrentPage(0);
    }
    
  }


  return (
    <div className="col-sm-9 col-12 ml-auto">
      <h2 className='text-center'>Покупатели</h2>

      <BuyersSettings
        buyersNumber={pageBuyersNumber}
        buyersNumberChange={changeBuyersNumber}
        buyersSorting={buyersSorting}
        buyersSortingChange={setBuyersSorting}
        buyersNameFilter={buyersNameFilter}
        changeBuyersNameFilter={setBuyersNameFilter}
      />

      <BuyersTable buyers={getBuyersForCurrentPage()} />

      {pageBuyersNumber === PAGINATION_TRIGGER &&
        <BuyersPagination
          currentPage={currentPage}
          pagesNumber={pagesNumber}
          changeCurrentPage={setCurrentPage}
        />}

    </div>
  )
}

Buyers.propTypes = {
  buyers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      averageCheck: PropTypes.number,
      purchaseNumber: PropTypes.number,
      total: PropTypes.number
    })
  )
}

export default Buyers;
