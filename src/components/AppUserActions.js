import { useEffect, useRef, useState } from 'react';
import '../assets/UserActionHeader.css';
import {ACTION_CHK_STATUS} from '../utils/constants';

function AppUserAction(props) {
    const {selectedCount, actionChkStatus, updateTableRowsData, downloadBtnHandler} = props;
    const checkBoxRef = useRef();

    const [actionChkBox, setActionChkBox] = useState(false);
    const actionChkBoxChangeHandler = (event) => {
        setActionChkBox(event.target.checked);
        updateTableRowsData(event.target.checked);
    }

    useEffect(()=>{
        if(actionChkStatus === ACTION_CHK_STATUS.CHECKED){
            // checkBoxRef.current.checked = true;
            setActionChkBox(true);
            checkBoxRef.current.indeterminate  = false;
        }else if(actionChkStatus === ACTION_CHK_STATUS.INTERMIDATE){
            checkBoxRef.current.indeterminate  = true;
        }else if(actionChkStatus === ACTION_CHK_STATUS.UNCHECKED){
            // checkBoxRef.current.checked = false;
            setActionChkBox(false);
            checkBoxRef.current.indeterminate  = false;
        }
    }, [props.actionChkStatus]);

  return (
    <section className="app-user-action">
        <div className="checkbox-cntr">
          <input type="checkbox" ref={checkBoxRef} checked={actionChkBox} onChange={(event)=>{ actionChkBoxChangeHandler(event); }}/>
        </div>
        <div className="selected-cntr">
          <label>Selected</label> {selectedCount}
        </div>
        <div className="download-cntr">
          <button onClick={downloadBtnHandler}>Download Selected</button>
        </div>
    </section>
  );
}

export default AppUserAction;
