import { connect } from 'react-redux';
import SingleBuyer from '../components/buyers/SingleBuyer';

const mapStateToProps = (state, ownProps) => ({
  buyer: state.buyers.find(buyer => buyer.id === ownProps.id)
})

export default connect(mapStateToProps)(SingleBuyer);