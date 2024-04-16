import AbpLink from "@/components/common/AbpLink";
import { Container } from "react-bootstrap";
import { BsPersonCircle } from "react-icons/bs";

const HomePage = () => {
  return (
    <Container>
      <div id="hero-section" className="text-center">
        <h1>Portfolio Base</h1>
        <p>My name is Alex ~ I build things, break things and mend things!</p>
        
        {/* Custom Button Component */}
        <AbpLink path="/about">
          <BsPersonCircle />
        </AbpLink>
      </div>
    </Container>
  );
};

export default HomePage;
