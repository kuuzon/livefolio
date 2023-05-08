import HeroBox from '@/components/common/HeroBox';
import AbpButton from '@/components/common/AbpButton';
import Container from 'react-bootstrap/Container';
import { BsPersonCircle } from "react-icons/bs";

const HomePage = () => {
  const values = {
    title: "Welcome to LiveFolio",
    content: "My name is Alex ~ I build things, break things and mend things!",
    path: "/about"
  }

  return (
    <Container>
      <HeroBox values={values}>
        <BsPersonCircle />        
      </HeroBox>
    </Container>
  )
}

export default HomePage