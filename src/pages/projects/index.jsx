import { Container } from "react-bootstrap";
import HeroBox from "@/components/common/HeroBox";
import AnchorCard from "@/components/common/AnchorCard";
import folioOne from "../../../public/folio1.jpg";
import folioTwo from "../../../public/folio2.jpg";
import Image from "next/image";

const ProjectsPage = () => {
  return (
    <Container>
      {/* PROJECTS BOX */}
      <HeroBox title='Highlighted Projects'>
        <div className='customGrid'>
          <AnchorCard href='/projects'>
            <Image
              src={folioOne}
              alt='portfolio one'
              width='400'
              height='250'
            />
          </AnchorCard>
          <AnchorCard href='/projects'>
            <Image
              src={folioTwo}
              alt='portfolio one'
              width='400'
              height='250'
            />
          </AnchorCard>
        </div>
      </HeroBox>
    </Container>
  );
};

export default ProjectsPage;
