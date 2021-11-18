import dynamic from 'next/dynamic';
import { OrbitControls, Sky } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import React, { Suspense, useRef } from 'react';
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

function SkyBox() {
  const { scene } = useThree();
  scene.background = new THREE.CubeTextureLoader()
    .setPath('img/')
    .load([
      'front.jpg',
      'back.jpg',
      'top.jpg',
      'bottom.jpg',
      'left.jpg',
      'right.jpg'
    ]);
  return null;
}
const Home = () => {
  return (
    <div className="scene">
      <Canvas>
        <SkyBox />
        <CameraControls />
        <Suspense fallback={null}>
          <Model position={[0, 0, 0]} />
        </Suspense>
      </Canvas>
    </div>
  );
};
export default Home;
