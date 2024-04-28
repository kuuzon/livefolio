import { useState } from "react";
import { Container } from "react-bootstrap"

import AccordionList from "@/components/feature/accordion/AccordionList";

const AboutPage = () => {
  const [panels, setPanels] = useState([
    { id: 1, title: "What Am I Currently Up To", content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet quis libero praesentium repellat quo sequi laborum ducimus quia molestiae blanditiis repellendus voluptatum aliquam, ratione a voluptatem doloribus aperiam? Ad, suscipit." },
    { id: 2, title: "What Makes Me Code", content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet quis libero praesentium repellat quo sequi laborum ducimus quia molestiae blanditiis repellendus voluptatum aliquam, ratione a voluptatem doloribus aperiam? Ad, suscipit." },
    { id: 3, title: "What Have I Got Involved In", content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet quis libero praesentium repellat quo sequi laborum ducimus quia molestiae blanditiis repellendus voluptatum aliquam, ratione a voluptatem doloribus aperiam? Ad, suscipit." },
  ]);

  return (
    <Container className="text-center">
      <h1>About Me</h1>
      <AccordionList 
        panels={panels}
      />
    </Container>
  )
}

export default AboutPage