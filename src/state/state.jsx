import { useState } from "react";

var btnstyle = {
  textAlign: "center",
  marginTop: "100px",
  color: "green",
};

function Updatehead() {
  const [state,setstate] = useState("Hello");
  function Updateui() {
    setstate("Welcome to React Wrold");
  }
  return (
    <div style={btnstyle}>
      <h1>{state}</h1>
      <button onClick={Updateui}>Update Ui</button>
    </div>
  );
}
export default Updatehead;
