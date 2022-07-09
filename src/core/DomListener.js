import { capitalize } from '@/core/utils'

export class DomListener {
  costructor($root, listeners = []) {
    if (!$root) {
      throw new Error('No $rppt provided for DomListener')
    }
    this.$root = $root
    this.listeners = listeners
  }
  initDOMListeners() {
    this.listeners.forEach(listener => {
      const method = getMethodName(listener)
      if (!this[method]) {
        throw new Error()
      }
      this.$root.on(listener, this[method].bind(this))
    })
  }
  removeDOMListeners() {

  }
}

function getMethodName(eventName) {
  return 'on' + capitalize(eventName)
}
