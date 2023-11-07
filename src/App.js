
import React, {useState, useEffect} from 'react';
import './style.css';

const luces = ["rojo", "verde", "amarillo"]

export default function App() {
  const [colorActual, updateColorActual] = useState(luces[0]);
  useEffect (() => {
    setRojo();
  }, []);

 const setRojo = () => {
   updateColorActual(luces[0]);
   setTimeout (() => setVerde(), 3000);
 }
 const setVerde = () => {
  updateColorActual(luces[1]);
  setTimeout (() => setAmarillo(), 2000);
}
const setAmarillo = () => {
  updateColorActual(luces[2]);
  setTimeout (() => setRojo(), 3000);
}

  return (<>
    <div className="Semaforo__container">
      <div className= {colorActual === (luces[0]) ? "luz_semaforo rojo encendida" : "luz_semaforo rojo"}></div>
      <div className= {colorActual === (luces[2]) ? "luz_semaforo amarillo encendida" : "luz_semaforo amarillo"}></div>
      <div className= {colorActual === (luces[1]) ? "luz_semaforo verde encendida" : "luz_semaforo verde"}></div>
      
      
      <h1>{colorActual}</h1>
    </div>
    </>);
}
