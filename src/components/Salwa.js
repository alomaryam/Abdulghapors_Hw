import SalwasChanel from "../images/salwa.png";
import styled from "styled-components";

const Image = styled.img`
  height: 50%;
  width: 20%;
`;
const Text = styled.div`
  text-align: center;
  font-size: 20pt;
  flex-wrap: wrap;
`;
const Lastsentence = styled.p`
  color: ${(props) => props.theme.differentColor};
  font-weight: bold;
`;

const Salwa = () => {
  return (
    <Text>
      <h1>Salwa's Chanel Status</h1>
      <Image alt="SalwasChanel" src={SalwasChanel} />
      <p>
        Wow ya salwa wow!! <br />{" "}
      </p>
      <Lastsentence>You win everytime!</Lastsentence>
    </Text>
  );
};

export default Salwa;
