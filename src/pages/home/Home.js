import React from "react";
import styles from "./home.module.css";
import Button from "../../components/button/Button";

const Home = (props) => {
  return (
    <div className={styles.bg}>
      <div className={styles.btnWrap}>
        <Button btnName="Sign up" url="/signup" />
      </div>
      <div className={styles.btnWrap}>
        <Button btnName="Sign in" url="" />
      </div>
    </div>
  );
};

export default Home;
