import { useEffect } from 'react';
import {
  NavItem,
  NAV_ITEMS_ADMIN,
  NAV_ITEMS_LOGIN,
  NAV_ITEMS_NOLOGIN,
} from '../NavItems';

import { ContextInterface } from '../../../utils/Context';

const useNavItems = (
  context: ContextInterface,
  setNavItems: (navItems: NavItem[]) => void
) => {
  useEffect(() => {
    if (context) {
      if (context.isAdmin) {
        setNavItems(NAV_ITEMS_ADMIN);
      } else {
        setNavItems(NAV_ITEMS_LOGIN);
      }
    } else {
      setNavItems(NAV_ITEMS_NOLOGIN);
    }
  }, [context]);
};

export default useNavItems;
