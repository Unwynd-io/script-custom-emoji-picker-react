import * as React from 'react';

import Relative from '../Layout/Relative';
import { CategoryNavigation } from '../navigation/CategoryNavigation';

import './Header.css';
import { SearchContainer } from './Search';

import { SettingsContainer } from './Settings';

export function Header() {
  return (
    <Relative className="epr-header">
      <SettingsContainer />
      <SearchContainer />
      <CategoryNavigation />
    </Relative>
  );
}
