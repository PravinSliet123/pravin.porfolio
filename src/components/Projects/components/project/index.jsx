"use client";
import React from "react";
import styles from "./style.module.css";

export default function index({ index, title, manageModal, subTitle,setBgColor,color }) {
  return (
    <div
      onMouseEnter={(e) => {
        manageModal(true, index, e.clientX, e.clientY);
      setBgColor(color)
      }}
      onMouseLeave={(e) => {
        manageModal(true, index, e.clientX, e.clientY);
        // setBgColor('')
      }}
      className={styles.project}
    >
      <h2>{title}</h2>
      <p>{subTitle}</p>
    </div>
  );
}
