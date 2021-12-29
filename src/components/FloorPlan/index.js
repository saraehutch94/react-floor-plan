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
      <Bedroom bedNum={2} />
      <Bedroom bedNum={3} />
      <Bathroom size={"Half"} />
      <Bathroom size={"Full"} />
    </div>
  );
}

export default FloorPlan;
