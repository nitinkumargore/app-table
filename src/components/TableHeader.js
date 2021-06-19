import '../assets/App.css';

function TableHeader(props) {
    const {name, device, path, status} = props.row;
  return (
    <div className="table-header">
      <input type="checkbox"/>
      <span>{name}</span>
      <span>{device}</span>
      <span>{path}</span>
      <span>{status}</span>
    </div>
  );
}

export default TableHeader;
