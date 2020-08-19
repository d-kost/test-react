import { connect } from 'react-redux';
import Terminals from '../components/terminals/Terminals';
import { addTerminal, deleteTerminal } from '../redux/actions/index';

const mapStateToProps = state => ({
  terminals: state.terminals
})

const mapDispatchToProps = dispatch => ({
  addTerminal: (name, description) => dispatch(addTerminal(name, description)),
  deleteTerminal: id => dispatch(deleteTerminal(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Terminals);