import styled from '@emotion/styled';

const PhoneBookForm = styled.form`
  padding: 10px 15px;
  border: 1px solid black;
`;
const NameTitle = styled.h3`
  margin-bottom: 10px;
  font-weight: 500;
`;
const PhoneBookInput = styled.input`
  width: 177px;
  margin-bottom: 15px;
  border-color: rgba(0, 0, 0, 0.5);
  border-width: 2px;
  :hover {
    border-color: rgba(0, 0, 255, 0.5);
  }
`;
const AddBtn = styled.button`
  border: 1px solid gray;
  border-radius: 15px;
  background-color: inherit;
  :hover {
    color: rgba(0, 0, 255, 0.5);
    border: 1px solid rgba(0, 0, 255, 0.5);
  }
`;

export { PhoneBookForm, NameTitle, PhoneBookInput, AddBtn };
