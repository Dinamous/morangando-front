import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Nav = styled.div`
  background: #15171c;
  height:60px;
  display:flex;
  justify-content:flex-start;
  align-items:center;
`;

export const NavIcon = styled(Link)`
  margin-left:2rem;
  font-size:2rem;
  height:60px;
  display:flex;
  justify-content:flex-start;
  align-items:center;
`;

export const SidebarNav = styled.nav`
  background:#15171c;
  width:250px;
  height:100vh;
  display:flex;
  justify-content:center;
  position:fixed;
  top:0;
  left:${({sidebar}) => (sidebar? '0' : '-100%')};
  //se o botão for clicado (state == true), o valor altera
  transition:500ms ease-in-out ;
  z-index:10;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const SidebarWrap = styled.div`
  width:100%
`;