import { useEffect, useState } from 'react';
import '../assets/App.css';

function TableRow(props) {
    const {name, device, path, status, selected} = props.row;

    const [checkBoxSelected, setCheckBoxSelected] = useState(selected);
    const [rowROClass, setRowROClass] = useState('');

    const checkBoxChangeHandler = (event) => {
        setCheckBoxSelected(event.target.checked);
        props.updateActionCheckbox(event.target.checked, props.row);
    }

    const mouseOverHandler = () => {
        setRowROClass('table-row-mover');
    }

    const mouseOutHandler = () => {
        setRowROClass('');
    }

  return (
    <tr className={`table-row-container ${rowROClass}`} onMouseOver={mouseOverHandler} onMouseOut={mouseOutHandler}>
      <td><input type="checkbox" checked={checkBoxSelected} onChange={(event) => checkBoxChangeHandler(event)}/></td>
      <td>{name}</td>
      <td>{device}</td>
      <td>{path}</td>
      <td/>
      <td>{status}</td>
    </tr>
  );
}

export default TableRow;
