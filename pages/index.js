import config from "../config.json";
import styled from "styled-components";


function HomePage() {
    //const mensagem = "Bem Vindo ao Meu WelTube!";
    const estilosDaHomePage = { backgroundColor: "navy" };

    return (
        <div style={estilosDaHomePage} >
            <Menu></Menu>
            <Header></Header>
            <Timeline></Timeline>
        </div>
    )

};
  export default HomePage
  

  function Menu(){
    return (
        <div>Menu</div>
    )
  }


  const StyledHeader = styled.div`
  img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
  }
  .user-info {
      margin-top: 50px;
      display: flex;
      align-items: center;
      width: 100%;
      padding: 16px 32px;
      gap: 16px;
  }
`;
  function Header(){
    return (
        <StyledHeader>
           <img src="banner"/> 
            
            <section className="user-info">
            <img src={'https://github.com/${config.github}.png'}/>
            {config.name}
            {config.job}
            </section>
        </StyledHeader>
    )
  }


  function Timeline(){
    return (
        <div>Timeline</div>
    )
  }