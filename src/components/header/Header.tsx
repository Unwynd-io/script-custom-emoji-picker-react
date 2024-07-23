import { cx } from "flairup";
import * as React from "react";

import { commonInteractionStyles } from "../../Stylesheet/stylesheet";
import Relative from "../Layout/Relative";
import { CategoryNavigation } from "../navigation/CategoryNavigation";

import { SearchContainer } from "./Search/Search";

import { SettingsContainer } from "./Settings";

export function Header() {
  return (
    <Relative className={cx("epr-header", commonInteractionStyles.hiddenOnReactions)}>
      <SettingsContainer />
      <SearchContainer />
      <CategoryNavigation />
    </Relative>
  );
}
