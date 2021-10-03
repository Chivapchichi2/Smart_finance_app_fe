import styled from 'styled-components';

const Styled = styled.button`
  background: ${props => (props.primary ? '#ff751d' : 'transparent')};
  color: ${props => (props.primary ? '#fff' : '#52555F')};

  width: 125px;
  height: 44px;

  border-radius: 16px;
  border-color: ${props => (props.primary ? '#ff751d' : '#F5F6FB')};
  border-style: solid;
  box-shadow: none;
  outline: none;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  &:hover {
    background: ${props => (props.primary ? '#fff' : 'transparent')};
    color: #ff751d;
    border-color: #ff751d;
  }
`;

export default Styled;
