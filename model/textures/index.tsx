import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
export const texture = new RGBELoader().setPath('img/').load('map.hdr');
