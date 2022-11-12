import { createRoot } from 'react-dom/client';
import './index.css';
import { Canvas } from '@react-three/fiber';
import { Scene } from './Scene';

createRoot(document.getElementById('root')).render(
  <Canvas>
    <Scene />
  </Canvas>,
);
