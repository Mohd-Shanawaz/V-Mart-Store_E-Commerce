import { useState } from "react";
var imgstyle={
    textAlign:"center",
}
function ImageState(){
    const [x,y]=useState("https://img.freepik.com/free-photo/young-male-entrepreneur-making-eye-contact-against-blue-background_662251-739.jpg?ga=GA1.1.544963027.1745688387&semt=ais_hybrid&w=740");
    function UpdateImage(){
        y("https://img.freepik.com/premium-photo/businesswoman-portrait-her-office_53419-1841.jpg?w=826")
    }
    function Male(){
        y("https://img.freepik.com/free-photo/young-male-entrepreneur-making-eye-contact-against-blue-background_662251-739.jpg?ga=GA1.1.544963027.1745688387&semt=ais_hybrid&w=740")
    }

    return <div style={imgstyle}>
        <img onMouseEnter={UpdateImage} onMouseLeave={Male} src={x} width={"300px"} height={"200px"} alt="" /><br/>
        <button onClick={UpdateImage}>Female</button>
        <button onClick={Male}>male</button>
    </div>
}
export default ImageState;