import styled from "styled-components";
import React, { ChangeEvent, useEffect, useState } from "react";

const Label = styled.label`
  display: flex;
  cursor: pointer;
`;

const Switch = styled.div`
  position: relative;
  width: 60px;
  height: 28px;
  background: #b3b3b3;
  border-radius: 32px;
  padding: 4px;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 28px;
    height: 28px;
    border-radius: 35px;
    top: 50%;
    left: 4px;
    background: white;
    transform: translate(0, -50%);
  }
`;

const Input = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + ${Switch} {
    background: green;

    &:before {
      transform: translate(32px, -50%);
    }
  }
`;

function ToggleButton({toggleTheme, isChecked} : {
  toggleTheme: Function;
  isChecked: boolean;
}) {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(isChecked);
  }, [isChecked])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    toggleTheme(e.target.checked);
  };

  return (
    <Label>
      <Input checked={checked} type="checkbox" onChange={handleChange} />
      <Switch />
    </Label>
  );
};


export default ToggleButton;

