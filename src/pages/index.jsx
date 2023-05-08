import HeroBox from "@/components/common/HeroBox";
import AbpButton from "@/components/common/AbpButton";
import { Container, Row, Col, Card } from "react-bootstrap";
import { BsPersonCircle } from "react-icons/bs";

const HomePage = () => {
  return (
    <Container>
      {/* TITLE BOX */}
      <HeroBox title='Welcome to LiveFolio'>
        <p>
          My name is Alex ~ I build things, break things and mend things!
        </p>
        <AbpButton path='/about'>
          <BsPersonCircle />
        </AbpButton>
      </HeroBox>

      {/* PROJECTS BOX */}
      <HeroBox title='Highlighted Projects'>
        <p>Projects Boxes</p>
      </HeroBox>
    </Container>
  );
};

export default HomePage;
