import React from "react";
import styles from '../../styles/Main.module.css'

export default function Container({children}) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}
