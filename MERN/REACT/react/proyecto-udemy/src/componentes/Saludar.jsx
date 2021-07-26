import React from "react";

function Saludar(props) {
  const { userInfo, saludarFn } = props;
  const { nombre = "Anónimo", edad } = userInfo;
  console.log(saludarFn);

  return (
    <div>
      <button onClick={() => saludarFn(nombre, edad)}>Saludar</button>
    </div>
  );
}

export default Saludar;
