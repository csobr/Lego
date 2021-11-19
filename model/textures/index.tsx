import * as THREE from 'three';
export const texture = new THREE.CubeTextureLoader()
  .setPath('img/')
  .load([
    'front.jpg',
    'back.jpg',
    'top.jpg',
    'bottom.jpg',
    'left.jpg',
    'right.jpg'
  ]);
