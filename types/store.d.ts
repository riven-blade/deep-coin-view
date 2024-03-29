import { VabRouteMeta, VabRouteRecord } from '/#/router'

declare interface ApiModuleType {
  apis: any[]
  buttons: any[]
}

declare interface WebSocketType {
  messages: any[]
  ws: any
}

declare interface WebSocketMessage {
  uuid: string
  type: string
  action: string
  param: string
}

declare interface AclModuleType {
  admin: boolean
  role: string[]
  permission: string[]
}

declare interface ErrorLogModuleType {
  errorLogs: any[]
}

declare interface RoutesModuleType {
  tab: {
    data: string | undefined
  }
  tabMenu: string | undefined
  activeMenu: {
    data: string | undefined
  }
  routes: VabRouteRecord[]
}

declare type DeviceType = 'mobile' | 'desktop'
declare type LanguageType = 'zh' | 'en'

declare interface SettingsModuleType {
  theme: ThemeType
  device: DeviceType
  collapse: boolean
  language: LanguageType
  lock: boolean
  logo: string
  title: string
  echartsGraphic1: string[]
  echartsGraphic2: string[]
}

declare interface TabsModuleType {
  visitedRoutes: VabRouteRecord[]
}

declare interface OptionType {
  name?: string
  title?: string
  meta: VabRouteMeta
}

declare interface UserModuleType {
  token: string | boolean
  username: string
  avatar: string
}
