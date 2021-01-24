import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

//array de objetos que formará a sidebar

export const SidebarData = [
  {
    title: 'Overview',
    path: '/overview',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subnave: [
      {
        title: 'Users',
        path: '/overview/users',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Revenue',
        path: '/overview/revenue',
        icon: <IoIcons.IoIosPaper />,
      },
    ]
  }, {
    title: 'Reports',
    path: '/reports',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subnave: [
      {
        title: 'Reports',
        path: '/reports/rep',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Reports',
        path: '/reports/rep',
        icon: <IoIcons.IoIosPaper />,
      },
    ]
  }, {
    title: 'Products',
    path: '/products',
    icon: <FaIcons.FaCartPlus />,
  }
]