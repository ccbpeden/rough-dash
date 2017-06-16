import { Injectable } from '@angular/core';

import { BaThemeConfigProvider } from './theme.configProvider';
import { colorHelper } from './theme.constants';

@Injectable()
export class BaThemeConfig {

  constructor(private _baConfig: BaThemeConfigProvider) {
  }

  config() {
    this._baConfig.changeTheme({ name: 'light' });
    //
    let colorScheme = {
      primary: '#F0F3F4',
      info: '#9fa1a3',
      success: '#90b900',
      warning: '#dfb81c',
      danger: '#990039',
    };

    this._baConfig.changeColors({
      default: '#ffffff',
      defaultText: '#666666',
      border: '#d6d6d6',
      borderDark: '#aaaaaa',

      primary: colorScheme.primary,
      info: colorScheme.info,
      success: colorScheme.success,
      warning: colorScheme.warning,
      danger: colorScheme.danger,

      primaryLight: colorHelper.tint(colorScheme.primary, 30),
      infoLight: colorHelper.tint(colorScheme.info, 30),
      successLight: colorHelper.tint(colorScheme.success, 30),
      warningLight: colorHelper.tint(colorScheme.warning, 30),
      dangerLight: colorHelper.tint(colorScheme.danger, 30),

      primaryDark: colorHelper.shade(colorScheme.primary, 15),
      infoDark: colorHelper.shade(colorScheme.info, 15),
      successDark: colorHelper.shade(colorScheme.success, 15),
      warningDark: colorHelper.shade(colorScheme.warning, 15),
      dangerDark: colorHelper.shade(colorScheme.danger, 15),

      dashboard: {
        blueStone: '#005562',
        surfieGreen: '#0e8174',
        silverTree: '#6eba8c',
        gossip: '#b9f2a1',
        white: '#10c4b5',
      },

      custom: {
        dashboardPieChart: colorHelper.hexToRgbA('#aaaaaa', 0.8),
        dashboardLineChart: '#6eba8c',
      },
    });
  }
}
