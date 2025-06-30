import "./imageState.css";
import { useState } from "react";

function SwitchModes() {
  const [darkMode, setDarkMode] = useState(false);
  const [toggled, setToggled] = useState(false);

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  const handleClick = () => {
    setToggled(prev => !prev);
  };


  return <div>
    <div className={darkMode ? 'dark-mode' : 'light-mode'} id="container">
        <div className="image">
            <img  height={"550px"} width={"100%"} src={toggled ? "https://wallpaperaccess.com/full/5604812.jpg" : "https://wallpaperaccess.com/full/1281420.jpg"  } alt="Toggle"/>
            <br /><br />
            <button onClick={handleClick}>Update Image</button>
            </div>
        <div className="des">
        <dl>
            <dt>Name : <span>Mahindra Singh Dhoni</span> </dt><br /><br />
            <dt>Age : <span>43</span></dt><br /><br />
            <dt>Gender : <span>Male</span></dt><br /><br />
            <dt>Email : <span>Dhoni777@gmail.com</span></dt><br /><br />
            <dt>Phone : <span>90100-07000</span></dt><br /><br />
            <dt>description : <span></span> </dt><br />
            <dd><h3>Hello , Aspirants I am A FullStack Developer at Quality thoughts Institute ,and i have a equality knowledge of a 3years+ experience guy Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, ipsam quam? Aliquam impedit, volup Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus sunt, quo minima unde fuga, totam deserunt, commodi repellat necessitatibus soluta vero tempore culpa architecto facilis nisi exercitationem quaerat adipisci molestiae!.  </h3></dd>
            <br /><br />
             <label>
            <input
             type="checkbox"
             checked={darkMode} 
             onChange={handleToggle}
             id="checkbox" />
             <p>Check this box to change Mode</p>
        </label>
        </dl>
        </div>
    </div>
  </div>;
}
export default SwitchModes;