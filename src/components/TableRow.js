import '../assets/App.css';

function TableRow(props) {
    const {name, device, path, status} = props.row;
  return (
    <tr className="table-row-container">
      <td><input type="checkbox"/></td>
      <td>{name}</td>
      <td>{device}</td>
      <td>{path}</td>
      <td/>
      <td>{status}</td>
    </tr>
  );
}

export default TableRow;
