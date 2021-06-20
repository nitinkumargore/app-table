import '../assets/AppTable.css';
import TableRow from './TableRow';

function AppTable(props) {
    const {tableRows, updateActionCheckbox} = props;
  return (
    <div className="app-table">
        <table>
        <thead>
            <tr>
                <th/>
                <th>Name</th>
                <th>Device</th>
                <th>Path</th>
                <th/>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            { tableRows.map((row, index)=>(<TableRow row={row} key={index} updateActionCheckbox={updateActionCheckbox}/>)) }
        </tbody>
        </table>
    </div>
  );
}

export default AppTable;
