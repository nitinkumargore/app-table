
import '../assets/App.css';

function AppUserAction(props) {
    const {selectedCount} = props;
  return (
    <section className="app-user-action">
      <div className="checkbox-cntr"><input type="checkbox"/></div>
      <div className="selected-cntr">
          <label>Selected</label> {selectedCount}
      </div>
      <div className="download-cntr">
          <button>Download Selected</button>
      </div>
    </section>
  );
}

export default AppUserAction;
