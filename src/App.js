import React, {useEffect, useState} from 'react';
import './assets/App.css';
import AppTable from './components/AppTable';
import AppUserAction from './components/AppUserActions';

function App() {
  const tableRowsData=[
    {name: 'smss.exe', device: 'Stark', path: '\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe', status: 'scheduled'},
    {name: 'netsh.exe', device: 'Targaryen', path: '\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe', status: 'available'},
    {name: 'uxtheme.dll', device: 'Lannister', path: '\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll', status: 'available'},
    {name: 'cryptbase.dll', device: 'Martell', path: '\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll', status: 'scheduled'},
    {name: '7za.exe', device: 'Baratheon', path: '\\Device\\HarddiskVolume1\\temp\\7za.exe', status: 'scheduled'}
  ];

  tableRowsData.map((row, index) => {
    return row.selected = true;
  })

  const [tableRows, setTableRows] = useState(tableRowsData);
  const [selectedCount, setSelectedCount] = useState(0);
  const [actionChkStatus, setActionChkStatus] = useState(false);


  const updateActionCheckbox = (checked, row) => {
    console.log('updateActionCheckbox index='+JSON.stringify(row));
    const selectedRow = tableRows.find((element)=>{ return(element.name === row.name)})
    if(selectedRow){
      selectedRow.selected = checked;
      setTableRows([...tableRows]);
    }
    
    let areAllChecked = true, areSomeChecked=false, selectCnt=0;

    tableRows.map((currentVal)=>{
      areAllChecked = (areAllChecked && currentVal.selected);
      areSomeChecked = (areSomeChecked || currentVal.selected);
      if(currentVal.selected){selectCnt = selectCnt + 1}
    });

    setSelectedCount(selectCnt);
    console.log('areAllChecked = '+areAllChecked+ '   areSomeChecked='+areSomeChecked);
    
  }

  





  useEffect(()=>{

  },[tableRows])

  return (
    <div className="App">
      <header className="App-header"><h1>Application Table</h1></header>
      <main className="App-main-container">
        <section className="App-main-container-section">
          <AppUserAction  selectedCount={selectedCount}/>
          <AppTable tableRows={tableRows} updateActionCheckbox={updateActionCheckbox}/>
        </section>
      </main>
      <footer className="App-footer">Application Footer</footer>
    </div>
  );
}

export default App;
