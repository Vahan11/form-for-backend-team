import styles from "./input.module.css";

const Input = (props) => {
  return (
    <div>
      <input
        onChange={props.change}
        onBlur={props.valid}
        name={props.name}
        type={props.type}
        placeholder={props.place}
        value={props.val}
      />
      <p className={styles.error}>{props.errorMessage}</p>
    </div>
  );
};

export default Input;
