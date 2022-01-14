export interface KamiConfig {
  name: string
  site: Site
  function: Function
}

interface Function {
  analyze: Analyze

  donate: Donate

  player: {
    id: number[]
  }
}

interface Analyze {
  enable: boolean
  ga: string
}

interface Donate {
  enable: boolean
  link: string
}

interface Site {
  favicon: string
  logoSvg?: string
  figure?: string[]
  header: Header
  social: Social[]
  footer: Footer
  custom: Custom

  background: Background
}

interface Background {
  src: {
    light: string
    dark: string
  }
  position: string
}

interface Custom {
  script?: string
  css?: string[]
  style?: string
  js?: string[]
}

interface Footer {
  homePage: string
  motto: Motto
  icp: ICP
  background: Background
  navigation: Navigation[]
}
interface Navigation {
  newtab?: boolean
  name: string
  path: string
}

interface ICP {
  enable: boolean
  label: string
  link: string
}

interface Motto {
  content: string
  author: string
}

interface Header {
  menu: Menu[]
}

interface Menu {
  title: string
  path: string
  type?: string
  icon: string
  subMenu?: Menu[]
}

interface Social {
  url: string
  title: string
  icon: string
  color: string
}