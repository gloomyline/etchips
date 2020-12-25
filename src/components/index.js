import Vue from 'vue';
import EtHeader from './etHeader/EtHeader';
import EtNav from './etNav/EtNav';
import EtFooter from './etFooter/EtFooter';
import EtSearchBox from './etSearchBox/EtSearchBox';
import ETCounterButton from './etCounterButton/ETCounterButton';
import ETContrast from './etContrast/EtContrast';
import eheader from "./ehead/header.vue"
import banner from "./ehead/banner.vue"
import efooter from "./efooter/index.vue"


Vue.component('et-header', EtHeader);
Vue.component('et-nav', EtNav);
Vue.component('et-footer', EtFooter);
Vue.component('et-search-box', EtSearchBox);
Vue.component('et-counter-button', ETCounterButton);
Vue.component('et-contrast', ETContrast);
Vue.component('eheader', eheader);
Vue.component('banner', banner);
Vue.component('efooter', efooter);
