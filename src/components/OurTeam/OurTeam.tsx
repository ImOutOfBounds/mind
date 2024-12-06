import React, { useState } from 'react';
import { Container, Title, PersonContainer, PersonCardContainer, PersonCard, PersonIcon, PersonName, PersonButton } from "./Styles";

export default function OurTeam() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const teamMembers = [
        { name: "Israel Carvalho", role: "Game Developer", picture: "https://cdn.discordapp.com/avatars/343429989104091137/44b9272f8be30d882419f689a42b214a.webp?size=240" },
        { name: "Leandro Custódio", role: "Game Developer", picture: "https://cdn.discordapp.com/avatars/579352244651294730/3961565e64d39b5e478f5abc0bff743c.webp?size=240" },
        { name: "Anna Aragão", role: "Game Designer, Producer & Biz Dev", picture: "https://cdn.discordapp.com/avatars/1080130032153940008/b829fb9cbbdab9847304eec7014a42bb.webp?size=240" },
        { name: "Gabriel Gallo", role: "Game Developer", picture: "https://cdn.discordapp.com/avatars/1002676311208251393/e896b0b18817bc3d96fa07589e4d0c91.webp?size=128" },
        { name: "Lucas Fernandes", role: "Game Artist", picture: "https://cdn.discordapp.com/avatars/276880557831618561/39148a1e7a6fff16911a40ecd03fa418.webp?size=80" },
        { name: "Vivian Shibata", role: "Game Artist", picture: "https://cdn.discordapp.com/avatars/1011988822977957938/81316fde83476bcec03d5e0528eac411.webp?size=128" },
    ];

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1));
    };

    const getVisibleMembers = () => {
        return [
            teamMembers[currentIndex],
            teamMembers[(currentIndex + 1) % teamMembers.length],
            teamMembers[(currentIndex + 2) % teamMembers.length]
        ];
    };

    return (
        <Container id="team">
            <Title color="red">MindHaunt</Title>
            <Title>Team</Title>
            <PersonContainer>
                <PersonButton onClick={prevSlide}>◀</PersonButton>

                {getVisibleMembers().map((member, index) => (
                    <PersonCardContainer key={index}>
                        <PersonIcon src={member.picture}></PersonIcon>
                        <PersonName>{member.name}</PersonName>
                        <PersonName>{member.role}</PersonName>
                    </PersonCardContainer>
                ))}

                <PersonButton onClick={nextSlide}>▶</PersonButton>
            </PersonContainer>
        </Container>
    );
}
