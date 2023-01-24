import styled from '@emotion/styled';

const MainSection = styled.section`
  margin-bottom: 15px;
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
  border: 1px solid black;
  width: 400px;
  padding: 10px 15px;
  margin-bottom: 15px;
`;

const Input = styled.input`
  margin-bottom: 15px;
`;

const AddBtn = styled.button`
  border: 1px solid gray;
  border-radius: 15px;
  background-color: inherit;
  margin-left: 15px;
`;

const ContactsBox = styled.div`
  /* border: 1px solid black; */
  width: 400px;
  padding: 10px 0px;
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
  margin-left: 40px;
`;

const RemoveBtn = styled.button`
  border: 1px solid gray;
  border-radius: 15px;
  background-color: inherit;
  margin-left: 15px;
`;

const FilterBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 15px;
`;

export {
  MainSection,
  PhoneBookTitle,
  NameTitle,
  FormBox,
  Input,
  AddBtn,
  ContactsBox,
  ContactsTitle,
  ContactItem,
  RemoveBtn,
  FilterBox,
};
