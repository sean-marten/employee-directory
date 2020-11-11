import TextField from "@material-ui/core/TextField";
import "./SearchInput.css";

export default function SearchInput() {
  return (
    <div className="searchInput">
      <TextField placeholder="Filter" label="Filter" variant="outlined"/>
    </div>
  );
}
