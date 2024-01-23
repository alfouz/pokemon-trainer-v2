import { Container, StyledAnchor } from "./Footer.styles";
import GithubIcon from "../../assets/utils/githubIcon.svg";
import { StyledImage } from "./Footer.styles";

const githubLink = "https://github.com/alfouz/pokemon-trainer-v2";

const Footer = () => {
  return (
    <Container>
      Game made by alfouz V.0.2
      <StyledAnchor href={githubLink} target="_blank">
        <StyledImage src={GithubIcon} width={20} height={20} />
      </StyledAnchor>
    </Container>
  );
};

export default Footer;
