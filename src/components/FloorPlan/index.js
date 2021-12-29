import "./FloorPlan.css";
import Kitchen from "../Kitchen";
import LivingRoom from "../LivingRoom";
import Bedroom from "../Bedroom";
import Bathroom from "../Bathroom";

function FloorPlan() {
  return (
    <div className="grid-wrapper">
      <Kitchen />
      <LivingRoom />
      <Bedroom bedNum={1} />
      <Bedroom bedNum={2} />
      <Bedroom bedNum={3} />
      <Bathroom size={"Half"} />
      <Bathroom size={"Full"} />
    </div>
  );
}

export default FloorPlan;
