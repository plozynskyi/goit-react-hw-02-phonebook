import styled from '@emotion/styled';

const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 400px;
`;

const PhoneBookTitle = styled.h1`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 15px;
`;

const NameTitle = styled.h3`
  margin-bottom: 10px;
  font-weight: 500;
`;

const FormBox = styled.div`
  margin-bottom: 15px;
`;

const PhoneBookForm = styled.form`
  padding: 10px 15px;
  border: 1px solid black;
`;

const Input = styled.input`
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
    color: blue;
    border: 1px solid blue;
  }
`;

const ContactsBox = styled.div`
  margin-bottom: 15px;
`;

const ContactsTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 15px;
`;

const ContactItem = styled.li`
  padding: 5px;
  list-style-type: disc;
`;

const RemoveBtn = styled.button`
  border: 1px solid gray;
  border-radius: 15px;
  background-color: inherit;
  margin-left: 15px;
  :hover {
    color: blue;
    border: 1px solid blue;
  }
`;

const FilterBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 15px;
`;

const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 40px;
`;

export {
  MainSection,
  PhoneBookTitle,
  NameTitle,
  FormBox,
  PhoneBookForm,
  Input,
  AddBtn,
  ContactsBox,
  ContactsTitle,
  ContactItem,
  RemoveBtn,
  FilterBox,
  ContactsList,
};
