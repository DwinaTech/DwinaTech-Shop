import { CircularProgress } from "@material-ui/core";
import "./style.css";

function Sinner() {
  return (
    <div className="spinner">
      <CircularProgress />
    </div>
  );
}

export default Sinner;
