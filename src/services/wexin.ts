import { WxPlatformService } from '../lib/wechat/wx-platform';
import config from '../config';
import { sharedState } from './shared-state';


export const wxService = new WxPlatformService(config.wechat as any, sharedState);
