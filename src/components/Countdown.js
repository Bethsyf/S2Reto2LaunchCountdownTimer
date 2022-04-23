import React, { useEffect, useState } from 'react'
import { ContainerStyle, StyledBox, StyledH1, StyledMain, StyledValue, StylesTime } from '../styled/styles'

const Countdown = () => {
  const date = new Date(2022, 4, 3, 18, 0, 0);

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const actualizar = setInterval(() => {
      const now = Date.now();
      const diff = date - now;
      const difDays = diff / (1000 * 60 * 60 * 24);
      const difHours = (difDays - Math.floor(difDays)) * 24;
      const difMinutes = (difHours - Math.floor(difHours)) * 60;
      const difSeconds = (difMinutes - Math.floor(difMinutes)) * 60;

      setDays(difDays);
      setHours(difHours);
      setMinutes(difMinutes);
      setSeconds(difSeconds);
    }, 1000);
    return () => clearInterval(actualizar)
  },)

  const numbers = (num) => {
    num = Math.floor(num)
    let response = ""

    if (num < 10) {
      if (num < 0) {
        response = "00"
      } else {
        response = "0" + String(num)
      }
    } else {
      response = String(num)
    }
    return response
  }

  return (
    <StyledMain>
      <StyledH1>
        WE'RE LAUNCHING SOON
      </StyledH1>
      <ContainerStyle>
        <StyledBox>
          <StyledValue>
            {numbers(days)}
          </StyledValue>
          <StylesTime>
            DAYS
          </StylesTime>
        </StyledBox>
        <StyledBox>
          <StyledValue>
            {numbers(hours)}
          </StyledValue>
          <StylesTime>
            HOURS
          </StylesTime>
        </StyledBox>
        <StyledBox>
          <StyledValue>
            {numbers(minutes)}
          </StyledValue>
          <StylesTime>
            MINUTOS
          </StylesTime>
        </StyledBox>
        <StyledBox>
          <StyledValue>
            {numbers(seconds)}
          </StyledValue>
          <StylesTime>
            SECONDS
          </StylesTime>
        </StyledBox>
      </ContainerStyle>
    </StyledMain>
  )
}

export default Countdown