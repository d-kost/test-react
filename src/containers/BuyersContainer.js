import { connect } from 'react-redux';
import Buyers from '../components/buyers/Buyers';

const mapStateToProps = state => ({
  buyers: state.buyers
})

export default connect(mapStateToProps)(Buyers);