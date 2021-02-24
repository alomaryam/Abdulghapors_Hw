import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeStyle = styled.div`
  text-align: center;
  font-size: 20pt;
  flex-wrap: wrap;
`;

const Home = () => {
  return (
    <HomeStyle>
      <h1> Guess who's the winner?</h1> <b />
      <h2> Select an Instructor to see the result </h2>
      <Link to="/Abdulghapor"> Go to Abdulghapor</Link> <br />
      <Link to="/Salwa"> Go to Salwa </Link>
    </HomeStyle>
  );
};
export default Home;
