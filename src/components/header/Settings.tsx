import clsx from 'clsx';
import * as React from 'react';

import {
  useOnEmojiClearConfig,
  usePreviewConfig
} from '../../config/useConfig';
import Flex from '../Layout/Flex';
import { Button } from '../atoms/Button';

import './Settings.css';

export function SettingsContainer() {
  const previewConfig = usePreviewConfig();

  if (!previewConfig.showClearButton) {
    return null;
  }

  return (
    <Flex className="epr-header-overlay settings">
      <SettingsMenu />
      <ClearButton />
    </Flex>
  );
}

function SettingsMenu() {
  return <Flex className="epr-settings-menu-container">{''}</Flex>;
}

function ClearButton() {
  const onEmojiClear = useOnEmojiClearConfig();

  return (
    <Flex className="epr-clear-button-container">
      <Button className={clsx('epr-btn-clear-emoji')} onClick={onEmojiClear}>
        Remove
      </Button>
    </Flex>
  );
}
