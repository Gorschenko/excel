export class DomListener {
  costructor($root, listeners = []) {
    if (!$root) {
      throw new Error('No $rppt provided for DomListener')
    }
    this.$root = $root
    this.listeners = listeners
  }
  initDOMListeners() {

  }
  removeDOMListeners() {

  }
}
