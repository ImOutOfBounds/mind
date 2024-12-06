import { InavBar, Container, Image, ImageContainer, NavItem } from "./Styles";
import logoMind from '../../assets/logo_mind.png';

export default function NavBar(props: InavBar) {
    return (
        <Container isActive={props.isActive} margin={props.margin}>
            <ImageContainer>
                <Image src={logoMind} />
            </ImageContainer>
            <NavItem as="a" href="#main">
                Main
            </NavItem>
            <NavItem as="a" href="#about-us">
                About Us
            </NavItem>
            <NavItem as="a" href="#games">
                Games
            </NavItem>
            <NavItem as="a" href="#team">
                Team
            </NavItem>
            <NavItem as="a" href="#reviews">
                Reviews
            </NavItem>
            <NavItem as="a" href="#art-gallery">
                Art Gallery
            </NavItem>
            <NavItem as="a" href="#contact-us">
                Contact Us
            </NavItem>
        </Container>
    );
}
