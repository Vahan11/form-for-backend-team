import styles from "./button.module.css";
import { Route } from "react-router-dom";

const Button = (props) => {
  return (
    <Route
      render={({ history }) => (
        <button
          onClick={() => {
            history.push({ pathname: props.url });
          }}
          className={styles.btn}
        >
          {props.btnName}
        </button>
      )}
    ></Route>
  );
};

export default Button;
