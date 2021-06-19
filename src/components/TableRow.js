import { useState } from 'react';
import '../assets/App.css';

function TableRow(props) {
    const {name, device, path, status, selected} = props.row;

    const [checkBoxSelected, setCheckBoxSelected] = useState(selected);

  return (
    <tr className="table-row-container">
      <td><input type="checkbox" checked={selected}/></td>
      <td>{name}</td>
      <td>{device}</td>
      <td>{path}</td>
      <td/>
      <td>{status}</td>
    </tr>
  );
}

export default TableRow;
