// JSX: 1 parent
// Fragment

import './style.css';
const MyComponent = () => {
  // const hoidanit = "khaang"; //string
  // const hoidanit = 25; //number
  // const hoidanit = true; //boolean
  // const hoidanit = undefined;
  // const hoidanit = null;
  const hoidanit = [1, 2, 3];
  // const hoidanit = {
  //   name: "hoidanit",
  //   age: 25
  // };

  return (

    <>
    <div> {JSON.stringify(hoidanit)} Khaang </ div>
    <div> {console.log("ERIC")} </div>
    <div className="child" style={{borderRadius: "10px"}}>child</div>
    </>

  );
  
};

export default MyComponent

