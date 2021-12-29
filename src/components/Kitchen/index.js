import "./Kitchen.css";
import Oven from "../Oven";
import Sink from "../Sink";

function Kitchen() {
  return (
    <div className="kitchen-div">
      <div>Kitchen</div>
      <Oven />
      <Sink />
    </div>
  );
}

export default Kitchen;
