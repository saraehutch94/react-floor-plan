import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bedroom from "./Bedroom";

function FloorPlan() {
  return (
    <div>
      <Kitchen />
      <LivingRoom />
      <Bedroom bedNum={1} />
      <Bedroom bedNum={2} />
      <Bedroom bedNum={3} />
    </div>
  );
}

export default FloorPlan;
