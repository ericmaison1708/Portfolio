import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center className="font-black text-2xl text-center text-bold">
      {progress}% Loaded
    </Html>
  );
};

export default Loader;
