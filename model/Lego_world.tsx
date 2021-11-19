import React, { useRef } from 'react';
import * as THREE from 'three';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { useGLTF, OrthographicCamera, useAnimations } from '@react-three/drei';

import { texture } from './textures/index';

type GLTFResult = GLTF & {
  nodes: {
    mesh_0: THREE.Mesh;
    mesh_1: THREE.Mesh;
  };
  materials: {};
};

type ActionName = 'animation_0';
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>();
  const { nodes, materials, animations } = useGLTF(
    '/lego_world-transformed.glb'
  ) as GLTFResult;
  const { actions } = useAnimations<GLTFActions>(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[7.96, 0, 0]} />
      <group position={[0, 0, 8]} />
      <group position={[7.96, 0, 8]} />
      <group position={[-15.91, 0, 0]} />
      <group position={[0, 0, 15.96]} />
      <group position={[-15.91, 0, 15.96]} />
      <group position={[-31.79, 0, 0]} />
      <group position={[-31.79, 0, 31.91]} />
      <group position={[0, 0, 31.91]} />
      <group position={[0, 0.3, 0]} />
      <group position={[0, 0, 1.3]} scale={[0.13, 1.52, 1.34]} />
      <group position={[0, 0, -1.24]} scale={[0.13, 1.52, 1.34]} />
      <group position={[-0.03, 1.82, 57.84]} />
      <group position={[7.95, 1.82, 57.84]} />
      <group position={[-0.03, 3.81, 57.84]} />
      <group position={[7.95, 3.81, 57.84]} />
      <group position={[-0.03, 5.79, 57.84]} />
      <group position={[7.95, 5.79, 57.84]} />
      <group position={[7.95, 7.79, 57.84]} />
      <group position={[-0.03, 7.79, 57.84]} />
      <group position={[-0.03, 9.66, 57.84]} />
      <group position={[7.95, 9.66, 57.84]} />
      <group position={[7.95, 11.65, 57.84]} />
      <group position={[-0.03, 11.65, 57.84]} />
      <group position={[7.95, 13.63, 57.84]} />
      <group position={[-0.03, 15.62, 57.84]} />
      <group position={[7.95, 15.62, 57.84]} />
      <group position={[-0.03, 13.63, 57.84]} />
      <group position={[-0.03, 17.46, 57.84]} />
      <group position={[7.95, 17.46, 57.84]} />
      <group position={[7.95, 19.45, 57.84]} />
      <group position={[-0.03, 19.45, 57.84]} />
      <group position={[7.95, 21.43, 57.84]} />
      <group position={[-0.03, 23.43, 57.84]} />
      <group position={[7.95, 23.43, 57.84]} />
      <group position={[-0.03, 21.43, 57.84]} />
      <group position={[-0.03, 27.29, 57.84]} />
      <group position={[7.95, 27.29, 57.84]} />
      <group position={[-0.03, 25.3, 57.84]} />
      <group position={[7.95, 25.3, 57.84]} />
      <group position={[-15.93, 1.82, 57.84]} />
      <group position={[-15.93, 13.63, 57.84]} />
      <group position={[-7.95, 15.62, 57.84]} />
      <group position={[-15.93, 15.62, 57.84]} />
      <group position={[-7.95, 13.63, 57.84]} />
      <group position={[-7.95, 25.3, 57.84]} />
      <group position={[-15.93, 25.3, 57.84]} />
      <group position={[-7.95, 27.29, 57.84]} />
      <group position={[-7.95, 1.82, 57.84]} />
      <group position={[-7.95, 3.81, 57.84]} />
      <group position={[-15.93, 3.81, 57.84]} />
      <group position={[-7.95, 5.79, 57.84]} />
      <group position={[-15.93, 7.79, 57.84]} />
      <group position={[-7.95, 7.79, 57.84]} />
      <group position={[-15.93, 17.46, 57.84]} />
      <group position={[-15.93, 27.29, 57.84]} />
      <group position={[-15.93, 21.43, 57.84]} />
      <group position={[-7.95, 23.43, 57.84]} />
      <group position={[-15.93, 23.43, 57.84]} />
      <group position={[-7.95, 21.43, 57.84]} />
      <group position={[-15.93, 19.45, 57.84]} />
      <group position={[-7.95, 19.45, 57.84]} />
      <group position={[-7.95, 17.46, 57.84]} />
      <group position={[-15.93, 5.79, 57.84]} />
      <group position={[-15.93, 11.65, 57.84]} />
      <group position={[-7.95, 11.65, 57.84]} />
      <group position={[-15.93, 9.66, 57.84]} />
      <group position={[-7.95, 9.66, 57.84]} />
      <group position={[-31.84, 1.82, 57.84]} />
      <group position={[-31.84, 13.63, 57.84]} />
      <group position={[-23.86, 15.62, 57.84]} />
      <group position={[-31.84, 15.62, 57.84]} />
      <group position={[-23.86, 13.63, 57.84]} />
      <group position={[-23.86, 25.3, 57.84]} />
      <group position={[-31.84, 25.3, 57.84]} />
      <group position={[-23.86, 27.29, 57.84]} />
      <group position={[-23.86, 1.82, 57.84]} />
      <group position={[-23.86, 3.81, 57.84]} />
      <group position={[-31.84, 3.81, 57.84]} />
      <group position={[-23.86, 5.79, 57.84]} />
      <group position={[-31.84, 7.79, 57.84]} />
      <group position={[-23.86, 7.79, 57.84]} />
      <group position={[-31.84, 17.46, 57.84]} />
      <group position={[-39.77, 5.79, 57.84]} />
      <group position={[-47.75, 3.81, 57.84]} />
      <group position={[-39.77, 3.81, 57.84]} />
      <group position={[-39.77, 1.82, 57.84]} />
      <group position={[-39.77, 27.29, 57.84]} />
      <group position={[-47.75, 25.3, 57.84]} />
      <group position={[-39.77, 25.3, 57.84]} />
      <group position={[-39.77, 13.63, 57.84]} />
      <group position={[-47.75, 15.62, 57.84]} />
      <group position={[-39.77, 15.62, 57.84]} />
      <group position={[-47.75, 13.63, 57.84]} />
      <group position={[-47.75, 1.82, 57.84]} />
      <group position={[-39.77, 17.46, 57.84]} />
      <group position={[-39.77, 19.45, 57.84]} />
      <group position={[-47.75, 19.45, 57.84]} />
      <group position={[-39.77, 21.43, 57.84]} />
      <group position={[-47.75, 23.43, 57.84]} />
      <group position={[-39.77, 23.43, 57.84]} />
      <group position={[-47.75, 21.43, 57.84]} />
      <group position={[-47.75, 27.29, 57.84]} />
      <group position={[-47.75, 17.46, 57.84]} />
      <group position={[-39.77, 7.79, 57.84]} />
      <group position={[-47.75, 7.79, 57.84]} />
      <group position={[-31.84, 27.29, 57.84]} />
      <group position={[-31.84, 21.43, 57.84]} />
      <group position={[-23.86, 23.43, 57.84]} />
      <group position={[-31.84, 23.43, 57.84]} />
      <group position={[-23.86, 21.43, 57.84]} />
      <group position={[-31.84, 19.45, 57.84]} />
      <group position={[-23.86, 19.45, 57.84]} />
      <group position={[-23.86, 17.46, 57.84]} />
      <group position={[-31.84, 5.79, 57.84]} />
      <group position={[-31.84, 11.65, 57.84]} />
      <group position={[-23.86, 11.65, 57.84]} />
      <group position={[-31.84, 9.66, 57.84]} />
      <group position={[-23.86, 9.66, 57.84]} />
      <group position={[-39.77, 9.66, 57.84]} />
      <group position={[-47.75, 9.66, 57.84]} />
      <group position={[-39.77, 11.65, 57.84]} />
      <group position={[-47.75, 11.65, 57.84]} />
      <group position={[-47.75, 5.79, 57.84]} />
      <group position={[24.95, 11.43, 41.96]} />
      <group position={[24.95, 11.43, 41.96]} />
      <group position={[24.95, 11.43, 41.96]} />
      <group position={[24.95, 11.43, 41.96]} />
      <group position={[24.95, 11.43, 41.96]} />
      <group position={[24.95, 11.43, 41.96]} />
      <group position={[24.95, 11.43, 41.96]} />
      <group position={[24.95, 11.43, 41.96]} />
      <group position={[24.95, 11.43, 41.96]} />
      <group
        position={[-34.87, -8.86, -14.79]}
        rotation={[0, 0.02, 0]}
        scale={0.32}
      />
      <group position={[0, 0, 1.3]} scale={[0.13, 1.52, 1.34]} />
      <group position={[0, 0, -1.24]} scale={[0.13, 1.52, 1.34]} />
      <group position={[-41.86, 1.83, 37.8]} />
      <group position={[-5.19, 1.9, 41.21]} />
      <group position={[-41.86, 3.84, 37.8]} />
      <group position={[-33.92, 3.84, 37.8]} />
      <group position={[-41.86, 3.83, 33.82]} />
      <group position={[-5.19, 3.84, 37.23]} />
      <group position={[-41.86, 1.83, 33.82]} />
      <group position={[-5.19, 1.84, 37.23]} />
      <group position={[-33.92, 7.83, 33.82]} />
      <group position={[-33.92, 5.83, 33.82]} />
      <group position={[-33.92, 7.83, 37.8]} />
      <group position={[-33.92, 5.83, 37.8]} />
      <group position={[-33.92, 11.76, 33.82]} />
      <group position={[-33.92, 9.76, 33.82]} />
      <group position={[-33.92, 13.74, 37.8]} />
      <group position={[-33.92, 11.76, 37.8]} />
      <group position={[-33.92, 13.74, 33.82]} />
      <group position={[-33.92, 15.74, 37.8]} />
      <group position={[-33.92, 15.74, 33.82]} />
      <group position={[-33.92, 9.76, 37.8]} />
      <group position={[8.06, 13.7, 17.97]} />
      <group position={[8.06, 9.71, 17.97]} />
      <group position={[8.06, 9.71, 21.95]} />
      <group position={[8.06, 11.71, 21.95]} />
      <group position={[8.06, 15.7, 17.97]} />
      <group position={[8.06, 13.7, 21.95]} />
      <group position={[8.06, 15.7, 21.95]} />
      <group position={[8.06, 3.8, 17.97]} />
      <group position={[8.06, 1.8, 17.97]} />
      <group position={[8.06, 5.78, 21.95]} />
      <group position={[8.06, 3.8, 21.95]} />
      <group position={[8.06, 5.78, 17.97]} />
      <group position={[8.06, 7.78, 21.95]} />
      <group position={[8.06, 7.78, 17.97]} />
      <group position={[8.06, 1.8, 21.95]} />
      <group position={[8.06, 11.71, 17.97]} />
      <group position={[0.13, 3.8, 21.94]} />
      <group position={[0.13, 3.8, 17.96]} />
      <group position={[0.13, 1.8, 17.96]} />
      <group position={[0.13, 1.8, 21.94]} />
      <group position={[-41.86, 7.85, 37.8]} />
      <group position={[-41.86, 7.85, 33.82]} />
      <group position={[-41.86, 5.86, 33.82]} />
      <group position={[-41.86, 5.86, 37.8]} />
      <group position={[0.13, 7.81, 17.96]} />
      <group position={[0.13, 5.81, 17.96]} />
      <group position={[0.13, 5.81, 21.94]} />
      <group position={[0.13, 7.81, 21.94]} />
      <group position={[26.21, 10.47, 9.88]} />
      <group position={[26.2, 12.47, 9.88]} />
      <group position={[26.21, 14.46, 9.88]} />
      <group position={[26.2, 16.45, 9.88]} />
      <group position={[18.27, 4.56, 9.88]} />
      <group position={[26.21, 6.54, 9.88]} />
      <group position={[26.2, 4.56, 9.88]} />
      <group position={[18.27, 8.57, 9.88]} />
      <group position={[18.27, 6.57, 9.88]} />
      <group position={[18.27, 2.56, 9.88]} />
      <group position={[26.2, 8.54, 9.88]} />
      <group position={[26.21, 2.56, 9.88]} />
      <group position={[-42.2, -0.73, 5.73]} rotation={[-0.08, 1.56, 0.08]} />
      <group position={[-12.36, -0.83, 37.78]} rotation={[-0.08, 1.56, 0.08]} />
      <group position={[0, 0, 1.3]} scale={[0.13, 1.52, 1.34]} />
      <group position={[0, 0, -1.24]} scale={[0.13, 1.52, 1.34]} />
      <group position={[-33.26, 1.8, 7.73]} />
      <group position={[-33.26, 3.77, 7.73]} />
      <group position={[-41.25, 1.8, 7.73]} />
      <group position={[-41.25, 3.77, 7.73]} />
      <group position={[-33.28, 3.81, 3.75]} />
      <group position={[-33.28, 1.84, 3.75]} />
      <group position={[-33.24, 7.77, 3.75]} />
      <group position={[-33.24, 5.8, 3.75]} />
      <group position={[-33.26, 5.78, 7.72]} />
      <group position={[-42.2, -0.73, 40.4]} rotation={[3.14, 0, 3.14]} />
      <group position={[-15.99, 9.85, 50.3]} />
      <group position={[-15.99, 11.85, 50.3]} />
      <group position={[1.28, 0, -1.03]} />
      <group position={[1.28, 0, -1.03]} />
      <group position={[1.28, 0, -1.03]} />
      <group position={[1.28, 0, -1.03]} />
      <group position={[1.28, 0, -1.03]} />
      <group position={[1.28, 0, -1.03]} />
      <group position={[1.28, 0, -1.03]} />
      <group position={[1.28, 0, -1.03]} />
      <group position={[1.28, 0, -1.03]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <group position={[-3.96, 0, 0]} />
      <OrthographicCamera
        makeDefault={false}
        far={10000}
        position={[-1000.1, 2.55, -0.26]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh geometry={nodes.mesh_0.geometry}>
        <meshBasicMaterial reflectivity={0.5} color="e7eaef" envMap={texture} />
      </mesh>
      <mesh geometry={nodes.mesh_1.geometry} material={nodes.mesh_1.material}>
        <meshBasicMaterial reflectivity={0.5} color="e7eaef" envMap={texture} />
      </mesh>
    </group>
  );
}

useGLTF.preload('/lego_world-transformed.glb');
