import { Container, Title, TitleRed, TextContainer, Text, ImageContainer, Image } from "./Styles"
import lobo from '../../assets/lobo.png';

export default function AboutUs() {
    return (
        <Container id="about-us">
            <TextContainer>
            <Title>About <TitleRed>Us</TitleRed></Title>
            <Text>We are a studio committed to producing psychological horror experiences, focused on creating 
                experiences that provoke deep reflections on the horror that is intrinsic to the human being. </Text>

            <Text>Through a passion for innovation, engaging storytelling and exploration of impactful themes, 
                our studio is proud to reveal stories based on real events that are dark and undercover, showing 
                the importance of tackling uncomfortable topics that deeply affect our society. </Text>
            </TextContainer>
            <ImageContainer>
                <Image src={lobo}/>
            </ImageContainer>
        </Container>
        
    )
}