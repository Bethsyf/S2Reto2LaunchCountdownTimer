import styled from 'styled-components'

export const StyledMain = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const StyledH1 = styled.h1`
    color: hsl(0, 0%, 100%);
    font-size: 19px;
    margin-bottom: 60px;    
    letter-spacing: 5px;

    @media screen and (max-width:600px){
        margin: 90px 5px;
        font-size: 17px;
        width: 100%;
        text-align: center;
    }
`

export const ContainerStyle = styled.div`
    width: 100%;
    margin-bottom: 20%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media screen and (max-width:600px){
        justify-content: space-around;
    }
`

export const StyledBox = styled.div`
width: 120px;
margin: 0 15px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
position: relative;
&::before{
    content: "";
    width: 100%;
    height: 55px;
    background-color: hsl(236, 21%, 26%);
    opacity: 70%;
    position: absolute;
    top: 20px;
    z-index: -1;
    border-radius: 8px 8px 4px 4px;
    box-shadow: 0px -1px 0px 1px hsl(234, 17%, 12%);
}
&::after{
    content: "";
    width: 100%;
    height: 55px;
    background-color:hsl(236, 21%, 26%);
    position: absolute;
    top: 75px;
    z-index: -1;
    border-radius: 4px 4px 8px 8px;
    box-shadow: 0px 8px 0px 1px hsl(234, 17%, 12%);
}
@media screen and (max-width:600px){
    width:20%;
    margin: 0;
}
`

export const StyledValue = styled.h2`
    color: hsl(345, 95%, 68%);
    font-size: 70px;
    margin: 30px 0;    
    opacity: 80%;

    @media screen and (max-width:480px){
        font-size: 60px;
    }
`

export const StylesTime = styled.p`
    color: hsl(237, 18%, 59%);
    font-size: 12px;      
`

export const StyledFooter = styled.footer`
    background-image: url("./images/pattern-hills.svg");    
    width: 100%;
    height: 197px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
    position: absolute;
    bottom: 0;
    
`

export const StyledIcon = styled.img`
    margin: 40px 15px;
    &:hover{
    color: pink;
  }
`