import { Container, Title, Span, ArtsContainer, ArtCard, ArtCardContainer, Button, Text, DescriptionContainer } from "./Styles"
import Art1 from '../../assets/art1.png';
import Art2 from '../../assets/art2.png';
import Art3 from '../../assets/art3.png';

export default function ArtGallery() {
    return (
        <Container id="art-gallery">
            <Title><Span color="red">Art </Span> Gallery</Title>

            <ArtsContainer>

                <DescriptionContainer>
                    <Text>Get the chance to have your fan art shared on our site by our 
                        entire community! </Text>

                        <Text> Send us your artwork by email</Text>
                    <Button>View All Arts</Button>
                </DescriptionContainer>
            
                <ArtCardContainer>
                    <ArtCard backgroundImage={Art1}></ArtCard>    
                </ArtCardContainer>

                <ArtCardContainer>
                    <ArtCard backgroundImage={Art2}></ArtCard>
                </ArtCardContainer>

                <ArtCardContainer>
                    <ArtCard backgroundImage={Art3}></ArtCard>
                </ArtCardContainer>

            </ArtsContainer>
        </Container>
        
    )
}