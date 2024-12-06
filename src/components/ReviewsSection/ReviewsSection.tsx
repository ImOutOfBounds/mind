import { Container, Title, ReviewContainer, ReviewCardContainer, ReviewCard, SpeechBubble, SpeechBubbleDetail, Text, ReviwerContainer, Reviwer, TextBox } from "./Styles"
import None from '../../assets/none.jpg';

export default function Reviews() {
    return (
        <Container>
            <Title id="reviews">Reviews</Title>
            <ReviewContainer>
                <ReviewCardContainer>
                    <ReviewCard>
                        <SpeechBubble>
                            <Text color="red">“EITA COMO EU AMEI OS JOGOS Q INCRÍVEIS PEGUEM TODO O MEU DINHEIRO POR FAVOR”</Text>
                        </SpeechBubble>
                        <SpeechBubbleDetail></SpeechBubbleDetail>
                    </ReviewCard>
                    <ReviwerContainer>
                        <Reviwer backgroundImage={None}></Reviwer>
                        <TextBox>
                            <Text color="#fff">GABRIEL GALLO</Text>
                        </TextBox>
                        
                    </ReviwerContainer>
                </ReviewCardContainer>

                <ReviewCardContainer>
                    <ReviewCard>
                        <SpeechBubble>
                            <Text color="red">“EITA COMO EU AMEI OS JOGOS Q INCRÍVEIS PEGUEM TODO O MEU DINHEIRO POR FAVOR”</Text>
                        </SpeechBubble>
                        <SpeechBubbleDetail></SpeechBubbleDetail>
                    </ReviewCard>
                    <ReviwerContainer>
                        <Reviwer backgroundImage={None}></Reviwer>
                        <TextBox>
                            <Text color="#fff">GABRIEL GALLO</Text>
                        </TextBox>
                        
                    </ReviwerContainer>
                </ReviewCardContainer>

                <ReviewCardContainer>
                    <ReviewCard>
                        <SpeechBubble>
                            <Text color="red">“EITA COMO EU AMEI OS JOGOS Q INCRÍVEIS PEGUEM TODO O MEU DINHEIRO POR FAVOR”</Text>
                        </SpeechBubble>
                        <SpeechBubbleDetail></SpeechBubbleDetail>
                    </ReviewCard>
                    <ReviwerContainer>
                        <Reviwer backgroundImage={None}></Reviwer>
                        <TextBox>
                            <Text color="#fff">GABRIEL GALLO</Text>
                        </TextBox>
                        
                    </ReviwerContainer>
                </ReviewCardContainer>

            </ReviewContainer>
        </Container>
        
    )
}