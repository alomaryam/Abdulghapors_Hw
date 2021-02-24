import AbdulghaporsChanel from "../images/abdulghapor.png";
import styled from "styled-components";

const Image = styled.img`
  height: 50%;
  width: 20%;
`;
const Text = styled.div`
  text-align: center;
  font-size: 20pt;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Lastsentence = styled.p`
  color: ${(props) => props.theme.differentColor};
  font-weight: bold;
`;

const Abdulghapor = () => {
  return (
    <Text>
      <h1>Abdulghapor's Channel Status</h1>
      <Image alt="AbdulghaporsChanel" src={AbdulghaporsChanel} />
      <p>
        Why ya Abdulghaphor why is there only one student in your channel!{" "}
        <br />{" "}
      </p>
      <Lastsentence> sorry not sorry:P</Lastsentence>
    </Text>
  );
};

export default Abdulghapor;
