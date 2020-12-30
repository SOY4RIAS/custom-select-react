import React, { useState } from "react";

import styles from './App.module.scss'

import styled from "styled-components";

const options = ["Mangoes", "Apples", "Oranges"];

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.dropdownHeader} onClick={toggling}>
        {selectedOption || "Mangoes"}
      </div>
      {isOpen && (
        <div className={styles.dropdownListContainer}>
          <div className={styles.dropdownList}>
            {options.map(option => (
              <div className={styles.listItem} onClick={onOptionClicked(option)} key={Math.random()}>
                {option}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
