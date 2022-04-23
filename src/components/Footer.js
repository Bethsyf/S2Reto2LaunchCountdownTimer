import React, { Component } from 'react'
import { StyledFooter, StyledIcon } from '../styled/styles'

export default class Footer extends Component {
  render() {
    return (
      <StyledFooter>
        <a href='https://www.facebook.com'>
          <StyledIcon src='images/icon-facebook.svg' alt='icon-facebook' />
        </a>
        <a href='https://www.instagram.com'>
          <StyledIcon src='images/icon-pinterest.svg' alt='icon-pinterest' />
        </a>
        <a href='https://co.pinterest.com'>
          <StyledIcon src='images/icon-instagram.svg' alt='icon-instagram' />
        </a>
      </StyledFooter>
    )
  }
}
