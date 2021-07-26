import React from "react";

function Saludo2(props){
const {userInfo} = props;
const {nombre, apellido, edad} = userInfo;

     return(
          <div>
               <input type="text" name="" id=""/>
               <h2>Coding Dojo {nombre} {apellido}, tengo {edad} años. -</h2>
          </div>


     );
}
export default Saludo2;