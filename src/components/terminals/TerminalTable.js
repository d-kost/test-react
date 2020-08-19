import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import TerminalsTableRow from './TerminalTableRow';

const TerminalsTable = ({ terminals, deleteTerminal }) => {

  const deleteTerminalMemorized = useCallback((id) => {
    deleteTerminal(id);
  },
    [deleteTerminal]);

  return (
    <table className='table table-responsive table-sm table-hover text-center'>
      <caption style={{ captionSide: 'top' }}>Список терминалов</caption>
      <thead>
        <tr>
          <th scope="col">Название</th>
          <th scope="col">Описание</th>
          <th scope="col">#</th>
        </tr>
      </thead>

      <tbody>

        {terminals.map(terminal => {

          return (
            <TerminalsTableRow
              key={terminal.id}
              terminal={terminal}
              deleteTerminal={deleteTerminalMemorized}
            />
          )
        })}
      </tbody>

    </table>
  )
}

TerminalsTable.propTypes = {
  terminals: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string
    })
  ),
  deleteTerminal: PropTypes.func
}

export default TerminalsTable;
