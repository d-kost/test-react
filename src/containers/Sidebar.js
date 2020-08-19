import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { terminals, buyers } from '../js_modules/urls';
import { Link } from 'react-router-dom';
import '../sass/Sidebar.sass';

const Sidebar = ({ userAvatarUrl }) => {

  return (
    <>
      <button className='sidebar-btn btn btn-light d-sm-none rounded-0 sticky-top'
        data-toggle='collapse'
        data-target='#asideCollapse'
      >
        Sidebar
      </button>

      <aside
        id='asideCollapse'
        className='sidebar col-sm-3 col-12 d-sm-block
        p-3 text-center bg-white border 
        collapse'
      >
        <div className='h-100 d-flex flex-column justify-content-between'>

          {console.log('sidebar render')}
          <div>
            <img src={userAvatarUrl} alt='User Github Avatar' className='sidebar__avatar' />
          </div>

          <nav className='nav flex-column'>
            <Link to={`/${terminals}`}>
              {terminals}
            </Link>
            <Link to={`/${buyers}`}>
              {buyers}
            </Link>
          </nav>

          <footer>Copyright © 2020</footer>
        </div>
      </aside>
    </>
  )

}

Sidebar.propTypes = {
  userAvatar: PropTypes.string
}

const mapStateToProps = state => ({
  userAvatarUrl: state.userAvatar
});

export default connect(mapStateToProps)(Sidebar);