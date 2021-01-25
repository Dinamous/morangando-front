import React,{useState} from 'react'


import {SidebarLink,SidebarLabel,DropdownLink} from './styles'

const Submenu = ({item}) => {

  const [subnave, setSubnave] = useState(false)
  const [clicado, setClicado] = useState(false)
  //função para mostrar/esconder o submenu  
  const ShowSubnave = () =>{
    setSubnave(!subnave)
    
  }

  const Clicou = () =>{
    setClicado(!clicado)
    ShowSubnave()
  }

  return (
    <>
      <SidebarLink to={item.path} clicado={subnave} onClick={Clicou }>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnave
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>

        
      </SidebarLink>
     {subnave && item.subNav ?
      item.subNav.map((item, index) => {
        return (
          <DropdownLink to={item.path} key={index}>
            {item.icon}
            <SidebarLabel>{item.title}</SidebarLabel>
          </DropdownLink>
        );
      }) 
      : null
    }
    </>
  );
}

export default Submenu
