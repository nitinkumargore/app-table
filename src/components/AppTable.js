import '../assets/App.css';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

function AppTable(props) {
    console.log('props = '+props);
    const {tableRows} = props;
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
            { tableRows.map((row, index)=>(<TableRow row={row} key={index}/>)) }
        </tbody>
        </table>
    </div>
  );
}

export default AppTable;