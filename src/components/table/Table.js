import { ExcelComponent } from '@core/ExcelComponent'
import { createTable } from '@/components/table/table.template'
import { resizeHandler } from './table.resize'
import { TableSelection } from './TableSelection'

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor ($root) {
    super($root, {
      listeners: ['mousedown']
    })
  }
  prepare() {
    this.selection = new TableSelection()
  }
  init() {
    super.init()

    const $cell = this.$root.find('[data-id="0:0"]')
    this.selection.select($cell)
  }
  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHandler(this.$root, event)
    }
  }

  toHTML() {
    return createTable(20)
  }
}
