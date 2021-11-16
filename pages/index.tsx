import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';

const Model = dynamic(() => import('../model/Lego_world'), {
  ssr: false
});

const Home = () => {
  return (
    <div className="scene">
      <Canvas>
        <OrbitControls />
        <directionalLight intensity={1} />
        <Suspense fallback={null}>
          <Model position={[0, 0, 0]} />
        </Suspense>
      </Canvas>
    </div>
  );
};
export default Home;
