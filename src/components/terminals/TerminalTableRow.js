import React from 'react';
import PropTypes from 'prop-types';

const TerminalsTableRow = ({ terminal, deleteTerminal }) => (

  <tr>
    <td>{terminal.name}</td>
    <td>{terminal.description}</td>

    <td>
      <button
        onClick={() => deleteTerminal(terminal.id)}
        className='btn btn-light'
      >
        Удалить
      </button>
    </td>

  </tr>
)

TerminalsTableRow.propTypes = {
  terminal: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string
  }),
  deleteTerminal: PropTypes.func
}

export default React.memo(TerminalsTableRow);
