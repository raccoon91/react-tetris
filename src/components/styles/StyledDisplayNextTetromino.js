import styled from 'styled-components';

export const StyledDisplayNextTetrominoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85px;
  margin-right: 10px;
  border: 2px solid #333;
`;

export const StyledDisplayNextTetromino = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${(props) => props.height}, 20px
  );
  grid-template-columns: repeat(
    ${(props) => props.width}, 20px
  );
  grid-gap: 1px;
  /* border: 2px solid #333; */
  width: fit-content;
  background: #111;
  margin-bottom: 20px;
`;

export const StyledDisplayTetrominoLists = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${(props) => props.height}, 10px
  );
  grid-template-columns: repeat(
    ${(props) => props.width}, 10px
  );
  grid-gap: 1px;
  /* border: 2px solid #333; */
  width: fit-content;
  background: #111;
  margin-bottom: 10px;
`;
