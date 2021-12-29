import "./Kitchen.css";
import Oven from "../Oven";
import Sink from "../Sink";

function Kitchen() {
  return (
    <div className="kitchen-div">
      <div className="appliances">
        <div className="oven">
          <Oven />
        </div>
        <div className="sink">
          <Sink />
        </div>
      </div>
      Kitchen
    </div>
  );
}

export default Kitchen;
