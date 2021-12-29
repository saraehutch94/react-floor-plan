import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bedroom from "./Bedroom";

function FloorPlan() {
  return (
    <div>
      <Kitchen />
      <LivingRoom />
      <Bedroom bedNum={1} />
    </div>
  );
}

export default FloorPlan;
