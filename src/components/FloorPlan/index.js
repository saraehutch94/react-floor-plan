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
      <Bathroom size={"Full"} />
      <Bathroom size={"Half"} />
      <Bedroom bedNum={3} />
      <Bedroom bedNum={2} />
    </div>
  );
}

export default FloorPlan;
