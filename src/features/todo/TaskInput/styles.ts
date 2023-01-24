import styled from "styled-components";

export const Container = styled.div(
  () => `
    margin-top: 20px; 
    border: 1px solid #555; 
    border-radius: 15px; 
    padding: 20px 0.5rem;
    display: flex;
    justify-content: space-between; 
    align-items: center;
    
    @media only screen and (max-width: 475px) {
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 1rem; 
      
      .image {
        display: none;
      }
    }
    
    .image {
        margin: 0;
        font-size: 1.1rem;
        cursor: pointer;
    }
    
    input {
        border: none; 
        outline: none; 
        padding: 0.2rem 0.5rem; 
        border-radius: 5px;
        background-color: inherit; 
        color: #fff;
        font-size: 1rem;
        flex: 1;
        
        &::placeholder {
            color: #ccc;
        }
    }
`
);

export const AlignDiv = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  min-width: 80%;

  @media only screen and (max-width: 475px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  border: none;
  outline: none;
  padding: 1rem;
  cursor: pointer;
  background-color: #1744aa;
  color: #fff;
  border-radius: 5px;
`;
