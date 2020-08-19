import React from 'react';
import TerminalForm from './TerminalForm';
import TerminalTable from './TerminalTable';
import PropTypes from 'prop-types';

const Terminals = ({ terminals, addTerminal, deleteTerminal }) => {

  return (
    <div className="col-9">
      <h2 className='text-center'>Terminals</h2>

      <TerminalForm addTerminal={addTerminal} />

      <TerminalTable
        terminals={terminals}
        deleteTerminal={deleteTerminal}
      />
    </div>
  )
}

Terminals.propTypes = {
  terminals: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string
    })),
  addTerminal: PropTypes.func,
  deleteTerminal: PropTypes.func,
}

export default Terminals;
