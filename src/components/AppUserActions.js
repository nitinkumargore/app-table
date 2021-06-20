import { useEffect, useRef, useState } from 'react';
import '../assets/AppUserActionHeader.css';
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
          <button onClick={downloadBtnHandler}>
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-to-bottom" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="svg-inline--fa fa-arrow-to-bottom fa-w-12 fa-3x"><path fill="currentColor" d="M360 480H24c-13.3 0-24-10.7-24-24v-24c0-13.3 10.7-24 24-24h336c13.3 0 24 10.7 24 24v24c0 13.3-10.7 24-24 24zm-66.4-280.5L228 265.1V56c0-13.3-10.7-24-24-24h-24c-13.3 0-24 10.7-24 24v209.1l-65.6-65.6c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L175 385.9c9.4 9.4 24.6 9.4 33.9 0l135.5-135.5c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.3-9.4-24.5-9.4-33.8 0z" className=""></path></svg>
          Download Selected</button>
        </div>
    </section>
  );
}

export default AppUserAction;
