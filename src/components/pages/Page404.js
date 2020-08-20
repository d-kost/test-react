import React from 'react';
import { useHistory } from 'react-router-dom';

const Page404 = () => {

  let history = useHistory();

  const toHomePage = () => {
    history.push('/');
  }

  return (
    <div className='text-center'>
      <h1>404</h1>
      <p>Page not found</p>
      <button className='btn btn-info btn-sm' onClick={toHomePage}>To Home Page</button>
    </div>
  )
}

export default Page404;