import { Container, Title, TitleRed, TextContainer, Text, SubContainer, ContainerInfos, SubTitle, Infos} from "./Styles"

export default function AboutUs() {
    return (
        <Container id="contact-us">
            <TextContainer>
            <Title>Contact <TitleRed>Us</TitleRed></Title>
            <Text>Our team is ready to discuss sales opportunities and strategic 
                partnerships for our psychological horror game portfolio. If you prefer, 
                reach out directly via phone or email below. We’re excited to explore 
                ways to bring immersive and intense experiences to audiences together!  </Text>
            </TextContainer>
            
            <SubContainer>
                
                    <ContainerInfos>
                        <SubTitle>
                        E-MAIL
                        </SubTitle>
                        <Infos>
                        studiosmindhaunt@gmail.com
                        </Infos>
                    </ContainerInfos>

                    <ContainerInfos>
                        <SubTitle>
                        WHATSAPP
                        </SubTitle>
                        <Infos>
                        +55 (21) 97734-8045
                        </Infos>
                    </ContainerInfos>

                </SubContainer>
        </Container>
        
    )
}