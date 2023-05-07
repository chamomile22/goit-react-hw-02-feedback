import styled from '@emotion/styled';

export const OptionsList = styled.ul`
  display: flex;
  padding-left: 10px;
  list-style: none;
`;

export const OptionItem = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const OptionBtn = styled.button`
  padding: 4px 10px;
  background-color: #bec3ce;
  border: none;
  border-radius: 4px;

  &:hover {
    background-color: #6586c2;
  }
`;
