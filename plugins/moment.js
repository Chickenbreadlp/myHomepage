import Vue from 'vue'
import moment from 'moment'
import 'moment-feiertage'

Vue.prototype.$moment = moment

export default ({ app }, inject) => {
  inject('moment', moment)
}
