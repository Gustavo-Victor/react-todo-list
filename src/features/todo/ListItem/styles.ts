import styled from "styled-components";

type ContainerProps = {
  done: boolean;
};

type ButtonProps = {
  color: string;
};

export const Container = styled.div(
  ({ done }: ContainerProps) => `
  display: flex;
  width: 100%;
  justify-content: space-between;   
  align-items: center;
  margin-top: 1rem;
  background-color: #20212c;
  padding: 1rem;
  border-radius: 5px;

  label {
    color: #ccc;
    text-decoration: ${done ? "line-through" : "none"}; 
    width: 90%;
    overflow-x auto;
    word-break: break-all;
  }

  input {
    width: 25px;
    height: 25px;
  }
`
);

export const Button = styled.button(
  ({ color }: ButtonProps) => `
  border: none; 
  outline: none; 
  background-color: transparent;   
  color: ${color || "#ccc"}; 
  
  svg {
    font-size: 1.5rem;
    cursor: pointer;
  }
`
);

export const AlignDiv = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;
