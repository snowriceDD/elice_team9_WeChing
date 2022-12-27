import styled from 'styled-components';

export const Main = styled.main`
  margin: 2rem;
  display: flex;
  justify-content: space-evenly;
  height: 100%;

  .ck.ck-editor__editable:not(.ck-editor__nested-editable) {
    min-height: 500px;
    width: 20rem;
    background-color: #f4fff1;
  }

  .ck.ck-toolbar {
    border: none;
    background-color: #f4fff1;
  }
`;

export const PostBtn = styled.button`
  box-shadow: 1px 1px 3px 1px #dadce0;
  color: white;
  background: ${(props) => (props.disabled ? '#bdb9b7' : '#B79D7F')};
  width: 5rem;
  height: 2rem;
  border: none;
  border-radius: 10px;
  align-self: flex-end;
`;

export const Post = styled.article`
  background: white;
  width: inherit;
  min-height: 2rem;
  padding: 2rem;
`;

export const Wrraper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80%;
  gap: 1rem;
`;

export const Title = styled.h1`
  font-size: 150%;
`;
