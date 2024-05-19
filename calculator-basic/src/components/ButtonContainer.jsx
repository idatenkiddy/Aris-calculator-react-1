// import styles from "./ButtonContainer.module.css";
// const ButtonContainer = ({onButtonClick}) => {
//   const buttonName = [
//     ".",
//     "+",
//     "-",
//     "=",
//     "1",
//     "2",
//     "3",
//     "*",
//     "4",
//     "5",
//     "6",
//     "/",
//     "7",
//     "8",
//     "9",
//     "AC",
//     "C",
//     "0",
//     "(",
//     ")",
//   ];
//   return (
//     <>
//       <div className={styles.buttonsContainer}>
//         {buttonName.map((buttonName) => (
//           <button key={buttonName} className={styles.button}
//           onClick={() => onButtonClick(buttonName)}
//           >
//             {buttonName}
//             </button>
//         ))}
//       </div>
//     </>
//   );
// };

// export default ButtonContainer;


import styles from "./ButtonContainer.module.css";

const buttonNames = [".", "+", "-", "=", "1", "2", "3", "*", "4", "5", "6", "/", "7", "8", "9", "AC", "C", "0", "(", ")"];

const ButtonContainer = ({ onButtonClick }) => (
  <div className={styles.buttonsContainer}>
    {buttonNames.map(name => (
      <button key={name} className={styles.button} onClick={() => onButtonClick(name)}>
        {name}
      </button>
    ))}
  </div>
);

export default ButtonContainer;
