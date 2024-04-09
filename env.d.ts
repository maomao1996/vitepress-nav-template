/// <reference types="vitepress/client" />

import { DefaultTheme } from 'vitepress'

declare module 'vitepress' {
  export namespace DefaultTheme {
    export interface Config {
      /**
       * 访客统计配置
       */
      visitor?: {
        /** 统计 id（单独页面的统计会作为前缀使用）*/
        badgeId: string
      }
    }
  }
}
