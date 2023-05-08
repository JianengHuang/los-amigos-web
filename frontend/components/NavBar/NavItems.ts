export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export const NAV_ITEMS_NOLOGIN: Array<NavItem> = [
  {
    label: 'Inicio',
    href: '/',
    // children: [
    //   {
    //     label: 'Explore Design Work',
    //     subLabel: 'Trending Design to inspire you',
    //     href: '#',
    //   },
    //   {
    //     label: 'New & Noteworthy',
    //     subLabel: 'Up-and-coming Designers',
    //     href: '#',
    //   },
    // ],
  },
  {
    label: 'Admin',
    href: '/admin',
  }
  // {
  //   label: 'Perfil',
  //   href: '/profile',
  // },
  // {
  //   label: 'Hire Designers',
  //   href: '#',
  // },
  // {
  //   label: 'Find Work',
  //   children: [
  //     {
  //       label: 'Job Board',
  //       subLabel: 'Find your dream design job',
  //       href: '#',
  //     },
  //     {
  //       label: 'Freelance Projects',
  //       subLabel: 'An exclusive list for contract work',
  //       href: '#',
  //     },
  //   ],
  // },
];

export const NAV_ITEMS_LOGIN: Array<NavItem> = [
  ...NAV_ITEMS_NOLOGIN,
  {
    label: 'Perfil',
    href: '/profile',
  },
];

export const NAV_ITEMS_ADMIN: Array<NavItem> = [
  ...NAV_ITEMS_LOGIN,
  {
    label: 'Admin',
    href: '/admin',
  },
];
