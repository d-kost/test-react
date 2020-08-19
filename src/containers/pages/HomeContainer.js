import { connect } from 'react-redux';
import Home from '../../components/pages/Home';
import { setUserAvatar } from '../../redux/actions/index';

const mapDispatchToProps = dispatch => ({
  setUserAvatar: url => dispatch(setUserAvatar(url))
});

export default connect(null, mapDispatchToProps)(Home);