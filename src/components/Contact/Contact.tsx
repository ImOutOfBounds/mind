import { Container, Title, TitleRed, TextContainer, Text, ContainerInfos, Infos, SubContainer, SubTitle } from "./Styles"

export default function Contact() {
    return (
        <Container id="contact-us">
            <TextContainer>
            <Title>Contact <TitleRed>Us</TitleRed></Title>
            <Text>Interested in partnerships or have questions about our games? 
            </Text>

            <Text>Our team is ready to discuss sales opportunities and strategic 
                partnerships for our psychological horror game portfolio. If you prefer, 
                reach out directly via phone or email below. We’re excited to explore 
                ways to bring immersive and intense experiences to audiences together! 
                </Text>
                <SubContainer>
                
                    <ContainerInfos>
                        <SubTitle>
                        E-MAIL
                        </SubTitle>
                        <Infos>
                        mindhauntstudios@gmail.com
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
            </TextContainer>
        </Container>
        
    )
}