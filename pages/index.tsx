import React, { Suspense, useRef } from 'react';
import dynamic from 'next/dynamic';
import { OrbitControls } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';

const Model = dynamic(() => import('../model/Lego_world'), {
  ssr: false
});

const CameraControls = () => {
  const {
    camera,
    gl: { domElement }
  } = useThree();

  const controls = useRef();
  useFrame(() => controls.current.update());
  return <OrbitControls ref={controls} args={[camera, domElement]} />;
};

const Home = () => {
  return (
    <div className="scene">
      <Canvas>
        <ambientLight />
        <CameraControls />
        <Suspense fallback={null}>
          <Model position={[0, 0, 0]} />
        </Suspense>
      </Canvas>
    </div>
  );
};
export default Home;
