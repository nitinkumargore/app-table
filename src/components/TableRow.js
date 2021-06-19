import { useEffect, useState } from 'react';
import '../assets/App.css';

function TableRow(props) {
    const {name, device, path, status, selected} = props.row;

    const [checkBoxSelected, setCheckBoxSelected] = useState(selected);
    const [rowSelectClass, setRowSelectClass] = useState('');

    const checkBoxChangeHandler = (event) => {
        setCheckBoxSelected(event.target.checked);
        props.updateActionCheckbox(event.target.checked, props.row);
        if(event.target.checked){
            setRowSelectClass('table-row-selected');
        }else{
            setRowSelectClass('');
        }
    }

    useEffect(()=>{
        setCheckBoxSelected(selected);
        if(selected){
            setRowSelectClass('table-row-selected');
        }else{
            setRowSelectClass('');
        }
    },[selected]);

  return (
    <tr className={`table-row-container ${rowSelectClass}`} >
      <td><input type="checkbox" checked={checkBoxSelected} onChange={(event) => checkBoxChangeHandler(event)}/></td>
      <td>{name}</td>
      <td>{device}</td>
      <td>{path}</td>
      <td><div className={(status==='available')? 'green-circle': ''}/></td>
      <td>{status}</td>
    </tr>
  );
}

export default TableRow;
