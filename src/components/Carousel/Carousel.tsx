import { Container, Button } from "./Styles";
import wallPaper from '../../assets/mind_wallpaper.png';

export default function Carousel() {
    return (
        <Container backgroundImage={wallPaper} id="main">
            <Button>VIEW GAMES</Button>
        </Container>
    );
}
