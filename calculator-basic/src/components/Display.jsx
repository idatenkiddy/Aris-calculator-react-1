import styles from "./Display.module.css";
const Display = ({ displayValue, displayHistory }) => {
  return (
    <>
      <div className={styles.display}>
        <input
          className={styles.displayinput1}
          type="text"
          placeholder="CALCULATOR"
          value={displayHistory}
          readOnly
        />
        <input
          className={styles.displayinput2}
          type="text"
          placeholder="0"
          value={displayValue}
          readOnly
        />
      </div>
    </>
  );
};

export default Display;
