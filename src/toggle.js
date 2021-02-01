import React from 'react'
import { func, string } from 'prop-types';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
// import { lightTheme, darkTheme, grayTheme } from './theme';
import { ReactComponent as Green } from './icons/Green.svg';
import { ReactComponent as Blue } from './icons/Blue.svg';
import { ReactComponent as Gray } from './icons/Gray.svg';

const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-color:white;
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  // justify-content: space-between;
  margin: auto;
  overflow: hidden;
  padding: 1rem;
  position: relative;
  width: 6rem;
  height: 2.5rem;
  top: 1.2rem;
  outline: 0;

  svg {
    height: 2rem;
    width: 1.5rem;
    transition: all 1s linear;
    

    &:first-child {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(-8px)' : 'translateY(50px)'};
    }
    
    &:nth-child(2) {
      transform: ${({ darkTheme }) => darkTheme ? 'translateY(-8px)' : 'translateY(50px)'};
    }
    &:nth-child(3) {
      transform: ${({ grayTheme }) => grayTheme ? 'translateY(-8px)' : 'translateY(50px)'};
    }
  }
`;

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  const isGray = theme === 'gray';
  const isDark = theme === 'dark';
  return (
    <ToggleContainer lightTheme={isLight} grayTheme={isGray} darkTheme={isDark} onClick={toggleTheme} >
      <Green />
      <Blue />
      <Gray />
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle;