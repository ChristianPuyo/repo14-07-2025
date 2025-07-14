import useBearStore from "../store/store";

function BearCounter() {
  const bears = useBearStore((state) => state.bears)
  return <h1>{bears} around here ...</h1>
}
export default BearCounter; 