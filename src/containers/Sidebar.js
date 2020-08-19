import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { terminals, buyers } from '../js_modules/urls';
import { Link } from 'react-router-dom';
import '../sass/Sidebar.sass';

const Sidebar = ({ userAvatarUrl }) => {

  return (
    <aside
      className='sidebar col-3 p-3 text-center border rounded d-flex flex-column justify-content-between'
    >
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
    </aside>
  )

}

Sidebar.propTypes = {
  userAvatar: PropTypes.string
}

const mapStateToProps = state => ({
  userAvatarUrl: state.userAvatar
});

export default connect(mapStateToProps)(Sidebar);