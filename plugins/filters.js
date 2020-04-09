import Vue from 'vue'
import { format } from 'date-fns'

export function formatDate(dateStr, formatStr = 'yyyy-MM-dd HH:mm:ss') {
  return format(new Date(dateStr), formatStr)
}

let filters = { formatDate }

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
