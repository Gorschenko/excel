import { ExcelComponent } from '@core/ExcelComponent'
import { createTable } from '@/components/table/table.template'
import { resizeHandler } from './table.resize'

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor ($root) {
    super($root, {
      listeners: ['mousedown']
    })
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
