import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as BsIcons from 'react-icons/bs';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Finanças',
    path: '/financas',
    icon: <FaIcons.FaMoneyBillAlt />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Pagamentos',
        path: '/financas/pagamentos',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Despesas',
        path: '/financas/despesas',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Colaboradores',
    path: '/colaboradores',
    icon: <FaIcons.FaUserFriends />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Fornecedores',
        path: '/colaboradores/fornecedores',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Clientes',
        path: '/colaboradores/clientes',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Remessas',
    path: '/remessas',
    icon: <FaIcons.FaBox />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Entrada de Produto',
        path: '/remessas/entrada',
        icon: <BsIcons.BsBoxArrowInDown />,
        cName: 'sub-nav'
      },
      {
        title: 'Saída de Produto',
        path: '/remessas/saida',
        icon: <BsIcons.BsBoxArrowInUp />,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Produtos',
    path: '/produtos',
    icon: <FaIcons.FaEnvelopeOpenText />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Cadastrar Produto',
        path: '/produtos/adicionar',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Estoque',
        path: '/produtos/estoque',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />
  }
];