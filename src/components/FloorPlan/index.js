import "./FloorPlan.css";
import Kitchen from "../Kitchen";
import LivingRoom from "../LivingRoom";
import Bedroom from "../Bedroom";
import Bathroom from "../Bathroom";

function FloorPlan() {
  return (
    <div className="grid-wrapper">
      <Bedroom bedNum={1} />
      <LivingRoom />
      <Kitchen />
      <Bathroom size={"Half"} />
      <Bedroom bedNum={2} />
      <Bathroom size={"Full"} />
      <Bedroom bedNum={3} />
    </div>
  );
}

export default FloorPlan;
