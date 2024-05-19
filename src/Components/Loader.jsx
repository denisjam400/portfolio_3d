import { useProgress,Html } from "@react-three/drei"

const Loader = () => {
  const {progress} = useProgress();
  return (
    <Html>{progress.toFixed()}%</Html>
  )
}

export default Loader