import "./Kitchen.css";
import Oven from "../Oven";
import Sink from "../Sink";

function Kitchen() {
  return (
    <div className="kitchen-div kitchen-parent">
      <div className="child-flex">
        <Oven />
        <Sink />
      </div>
      <div>Kitchen</div>
    </div>
  );
}

export default Kitchen;
