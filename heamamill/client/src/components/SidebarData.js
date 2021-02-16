import React from 'react';
import * as RiIcons from 'react-icons/ri';
import * as HiIcons from 'react-icons/hi';
import * as BsIcons from 'react-icons/bs';
import * as GiIcons from 'react-icons/gi';
import * as BiIcons from 'react-icons/bi';

export const SidebarData = [
  {
    title: 'Mustard',
    path: '/',
    icon: <GiIcons.GiGrain />,
    cName: 'nav-text',
  },
  {
    title: 'Oil',
    path: '/oil',
    icon: <BsIcons.BsDropletHalf />,
    cName: 'nav-text',
  },
  {
    title: 'Containers',
    path: '/container',
    icon: <BiIcons.BiCylinder />,
    cName: 'nav-text',
  },
  {
    title: 'Employees',
    path: '/employee',
    icon: <BsIcons.BsPeopleFill />,
    cName: 'nav-text',
  },
  {
    title: 'Payments',
    path: '/payment',
    icon: <HiIcons.HiCurrencyRupee />,
    cName: 'nav-text',
  },
  {
    title: 'Cake',
    path: '/cake',
    icon: <GiIcons.GiCow />,
    cName: 'nav-text',
  },
  {
    title: 'Other',
    path: '/other',
    icon: <RiIcons.RiBillFill />,
    cName: 'nav-text',
  },
];
