import logo from './logo.svg';
import './App.css';
import 'aframe';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import sky from ".//pic/spacec.jpg";
import mountains from './models/mountains.glb';
import {FBXLoader} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/FBXLoader.js';
function App() {
  const loader = new GLTFLoader();
   loader.load(mountains,(d) =>{
   const entity =document.getElementById("mountains");
   entity.object3D.add(d.scene);
   })
   
  return (
    <a-scene>
      <a-assets>
      
      <img id="sky"  src={sky} alt="sky"/>
      <a-asset-item id="mountains-asset" src={mountains} />
      </a-assets>
<a-sky src= "#sky" 
        rotation="0 0 0"
      >
</a-sky>
      <a-entity id="mountains" position="0 0 0" scale="15 15 15">    

      </a-entity>
    </a-scene>

          
  );
}

export default App;
