// import React, { useState } from "react";
// import socket from "../../../utils/Socket";


// function EditWritingTeam() {
//    socket.emit('conectado',"hola desde cliente");
  
//     return (
//       <div className="App">
//        fdafadfafa
//       </div>
//     );
//   }
  
//   export default EditWritingTeam;
  
import React, { useState, useEffect, useRef } from "react";
import socket from "../../../utils/Socket";

/**Datos del usuario */
import AuthUser from '../../../services/authenticity/auth-service.js';
import '../../../styles/App.css';

const Chat = ({ nombre}) => {

  const [mensaje, setMensaje] = useState("");
  const [mensajes, setMensajes] = useState([]);

  //se ejecuta cuando la componente se renderiza username
  useEffect(() => {
    socket.emit("conectado", nombre);//para pasarle al servidor el nombre del usuario
  }, [nombre]);//se ejecuta cuando ya exista un nombre y no antes


  //Captura cuando el servidor envia mensajes
  useEffect(() => {
    socket.on("mensajes", (mensaje) => {
      setMensajes([...mensajes, mensaje]);//... indica que se añadira al final del array
    });
    return () => {
      socket.off();//evitar bucle, disconectar no este continuamente los sockets abiertos y evitar cuelgues
    };
  }, [mensajes]);

  //para que el scroolbar se baje solo cuando el textArea este lleno
  const divRef = useRef(null);
  
  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });


  //cuando se envia el formulario
  const submit = (e) => {
    e.preventDefault();//para impedir la recarga de la pagina
    socket.emit("mensaje", nombre, mensaje);
    setMensaje("");//cuando se envia el mensaje se borra el textArea
  };

  return (
    <div>
      <div className="chat">
        {mensajes.map((e, i) => (
          <div key={i}>
            <div>{e.nombre}</div>
            <div>{e.mensaje}</div>
          </div>
        ))}

        <div ref={divRef}></div>

      </div>

      <form onSubmit={submit}>
        <label htmlFor="">Escriba su mensaje</label>
        <textarea name=""  id=""  cols="30"  rows="10"  value={mensaje}  onChange={(e) => setMensaje(e.target.value)}></textarea>
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Chat;
