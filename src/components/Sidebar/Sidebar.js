import React, { useState } from "react";
import {SidebarData} from './sidebardata'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'

import {Nav,NavIcon,SidebarNav,SidebarWrap} from './styles'

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false)

  //função que alterna se o
  // sidebar vai estar aberto ou não
  const showSidebar = () =>{
    setSidebar(!sidebar)
  }

  return (
    <>
    <Nav>
      <NavIcon to="#  "> 
        <FaIcons.FaBars onClick={showSidebar}/>
      </NavIcon>
    </Nav>
    <SidebarNav sidebar={sidebar}>
      <SidebarWrap>
      <NavIcon to="#  "> 
        <AiIcons.AiOutlineClose onClick={showSidebar}/>
      </NavIcon>
      </SidebarWrap>
    </SidebarNav>
    </>
  )
}

export default Sidebar
