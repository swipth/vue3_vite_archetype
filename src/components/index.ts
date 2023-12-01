import { App } from 'vue'
import SvgIcon from './svg-icon/index.vue'

const components = [
  SvgIcon,
]

export const installComponents = (app: App) => {
  components.forEach(c => {
    app.component(`${c.name}`, c)
  })
}

export {
  SvgIcon
}
