import { useState } from 'react'
import ymgLogo from '/logo.svg'
import './App.css'
import * as THREE from "three"
//import { THREEx } from "@ar-js-org/ar.js-threejs";

import cameraPara from "./assets/camera_para.dat?url";
import markerURL from "./assets/marker.patt?url";

import { useARToolkit } from "./useARToolkit";

function Test() {
  const [count, setCount] = useState(0)

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
  });
  renderer.setClearColor(new THREE.Color("lightgrey"), 1);
  renderer.setSize(640, 480);
  renderer.domElement.style.position = "absolute";
  renderer.domElement.style.top = "0px";
  renderer.domElement.style.left = "0px";
  document.body.appendChild(renderer.domElement);

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(60, 640 / 480, 0.01, 20);
  camera.position.set(1, 1.5, 1.5);
  camera.lookAt(new THREE.Vector3(0, 0.5, 0));
  scene.add(camera);

  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(2.4, 2, 5);
  scene.add(light);

  const box = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshStandardMaterial({ color: 0xe5e5e5 })
  );
  box.position.set(0, 0.5, 0);
  scene.add(box);

  const { arToolkitContext, arToolkitSource } = useARToolkit({
    camera: camera,
    cameraParaDatURL: cameraPara,
    domElement: renderer.domElement,
    markerPatternURL: markerURL,
    scene,
  });

  window.addEventListener("markerFound", function (e) {
    console.log("marker found!", e);
  });

  requestAnimationFrame(function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);

    if (arToolkitSource.ready) {
      arToolkitContext.update(arToolkitSource.domElement);
      scene.visible = camera.visible;
    }
  });

  return (
    <>
        <div>
        <a href="https://www.ymgmcmc.com" target="_blank">
            <img src={ymgLogo} className="logo" alt="YMG logo" />
        </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
        </button>
        <p>
            Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        </div>
        <p className="read-the-docs">
        Click on the ymgmcmc logo to learn more
        </p>
    </>
  )
}

export default Test