import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div>
      <AppBar>
        <Toolbar className="header">Employee Directory</Toolbar>
      </AppBar>
    </div>
  );
}
