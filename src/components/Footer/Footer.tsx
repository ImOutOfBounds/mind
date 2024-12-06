import { Container, Title, Span, SubContainer, Image, RedText, WhiteText, FatherContainer, WaterMarkContainer} from "./Styles"
import logoMind from '../../assets/logo_mind.png';

export default function Footer() {
    return (
        <FatherContainer>
            <Span></Span>
            <SubContainer>
                <Container>
                    <Image src={logoMind} />
                    <Title>MindHaunt Studios </Title>
                    <RedText>a game studio</RedText>
                </Container>
                <Container>
                    <WhiteText as="a" href="#main">Main</WhiteText>
                    <WhiteText as="a" href="#about-us">About Us</WhiteText>
                    <WhiteText as="a" href="#games">Games</WhiteText>
                    <WhiteText as="a" href="#team">Team</WhiteText>
                    <WhiteText as="a" href="#reviews">Reviews</WhiteText>
                    <WhiteText as="a" href="#art-gallery">Art Gallery</WhiteText>
                    <WhiteText as="a" href="#contact-us">Contact Us</WhiteText>
                </Container>
                <Container>
                    <WhiteText as="a" href="#main">Instagram</WhiteText>
                    <WhiteText as="a" href="#main">TikTok</WhiteText>
                    <WhiteText as="a" href="#main">mindhuntsudios@gmail.com</WhiteText>
                </Container>
            </SubContainer>
            
            <Span></Span>

            <WaterMarkContainer>
                <WhiteText>Mindhaunt Studios - 2024. All rights reserved</WhiteText>
            </WaterMarkContainer>
        </FatherContainer>
        
    )
}