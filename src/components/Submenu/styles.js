import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SidebarLink = styled(Link)`
  display:flex;
  color:#e9e5fc;
  justify-content:space-between;
  align-items:center;
  padding:10px 30px;
  list-style:none;
  height:40px;
  text-decoration:none;
  font-size:18px;
  /* border-top: 1px solid #060b16; */
  margin:5px 0;
  background:${props => props.clicado ? '#8259ea' : '#181b21'};

  &:hover{
    background:${props => props.clicado ? '#8259ea' : '#181b21'};
    border-left: 4px solid #632ce4;
    cursor:pointer;
    transition: 200ms ease-in
  }
`;

export const SidebarLabel = styled.span`
  margin-left:16px;

`; 

export const DropdownLink = styled(Link)`
background: #252830;
  height: 40px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 16px;
  border-bottom:3px solid #181b21;

  &:hover {
    background: #632ce4;
    cursor: pointer;
    transition: 150ms ease-in

  }
`;