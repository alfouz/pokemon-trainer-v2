import Footer from "../../components/Footer/Footer";
import ContentSection from "../ContentSection/ContentSection";
import { Container } from "./MainSection.styles";

function MainSection() {
  return (
    <Container>
      <ContentSection></ContentSection>
      <Footer />
    </Container>
  );
}

export default MainSection;
