// import { useState } from "react";
// import styles from "./App.module.css";
// import ButtonContainer from "./components/ButtonContainer";
// import Display from "./components/Display";
// const App = () => {
//   let [calVal, setCalVal] = useState("");
//   let [dispVal, dispHistory] = useState("");
//   const onButtonClick = (buttonText) => {
//     if (buttonText === "C") {
//       setCalVal(calVal.slice(0, -1));
//     } else if (buttonText === "=") {
//       const lastChar = calVal.slice(-1);
//       if (["+", "-", "/", "*", "(", "."].includes(lastChar) || calVal === "") {
//         if (calVal === "") {
//           setCalVal("0");
//           setTimeout(() => {
//             setCalVal("");
//           }, 500);
//         } else {
//           setCalVal("SyntaxError");
//           setTimeout(() => {
//             setCalVal("");
//           }, 500);
//         }
//       } else {
//         const result = eval(calVal);
//         dispVal = calVal;
//         dispHistory(calVal + "=" + result);
//         setCalVal(result.toString());
//       }
//     } else if (buttonText === "AC") {
//       setCalVal("");
//       dispHistory("");
//     } else {
//       const newDispVal = calVal + buttonText;
//       setCalVal(newDispVal);
//     }
//   };

//   return (
//     <div className={styles.calculator}>
//       <Display displayValue={calVal} displayHistory={dispVal} />
//       <ButtonContainer onButtonClick={onButtonClick} />
//     </div>
//   );
// };

// export default App;
//old version above

import { useState } from "react";
import styles from "./App.module.css";
import ButtonContainer from "./components/ButtonContainer";
import Display from "./components/Display";

const App = () => {
  const [calVal, setCalVal] = useState("");
  const [dispVal, setDispVal] = useState("");

  const resetCalVal = (value = "") => {
    setCalVal(value);
    setTimeout(() => setCalVal(""), 500);
  };

  const onButtonClick = (buttonText) => {
    switch (buttonText) {
      case "C":
        setCalVal(calVal.slice(0, -1));
        break;
      case "=":
        const lastChar = calVal.slice(-1);
        if (
          ["+", "-", "/", "*", "(", "."].includes(lastChar) ||
          calVal === ""
        ) {
          if (calVal === "") {
            resetCalVal("0");
            setDispVal("CALCULATOR");
          } else {
            resetCalVal("SyntaxError");
          }
        } else {
          const result = eval(calVal);
          setDispVal(calVal);
          setCalVal(result.toString());
          setDispVal(`${calVal}=${result}`);
        }
        break;
      case "AC":
        setCalVal("");
        setDispVal("");
        break;
      default:
        setCalVal(calVal + buttonText);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal} displayHistory={dispVal} />
      <ButtonContainer onButtonClick={onButtonClick} />
    </div>
  );
};

export default App;
