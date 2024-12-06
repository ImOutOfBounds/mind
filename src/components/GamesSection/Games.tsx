import { Container, Title, GameCard, GamesContainer, GameCardContainer, Button, GameDescription } from "./Styles";
import game1 from '../../assets/game_1.jpeg';
import game2 from '../../assets/Game_2.png';

export default function Games() {
    return (
        <Container id="games">
            <Title>Games</Title>
            <br></br>
            <GamesContainer>

                <GameCardContainer>
                    <GameCard backgroundImage={game1}></GameCard>
                    <Button>Drowned Soul</Button>
                    <GameDescription>Submerge yourself in the mysterious world of Drowned Soul, where a young swimmer, after a 
                        tragic accident, is given a second chance with enigmatic powers. Without her memories, she faces 
                        supernatural forces as she searches for the truth about her true nature.</GameDescription>
                </GameCardContainer>

                <GameCardContainer>
                    <GameCard backgroundImage={game2}></GameCard>
                    <Button>File Gamble</Button>
                    <GameDescription>You want to access the deep web? 
                    No problem! This OS will help you do it safely and anonymous! if it wants to play, it's better to bet then 
                    to lose it all</GameDescription>
                </GameCardContainer>


            </GamesContainer>
        </Container>
    );
}
