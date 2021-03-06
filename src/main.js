import {createApp} from 'vue';
import App from './App.vue';
import router from './utilities/router';
import store from './utilities/store';
import Notifications from '@kyvg/vue3-notification';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { SetupCalendar } from 'v-calendar';
import Maska from 'maska';
import properties from './utilities/global-properties';
import style from './utilities/style';
import {delay} from "@/utilities/utils";
import VueTippy from 'vue-tippy';
import 'tippy.js/dist/tippy.css';

const application = createApp(App);

application.provide('unknownError', async () => {
    google.script.run
        .withSuccessHandler(() => { google.script.host.close(); })
        .unknownError();
});

application.provide('permissionDenied', async () => {
    google.script.run
        .withSuccessHandler(() => { google.script.host.close(); })
        .permissionDenied();
});

application.provide('getSessionUserProperties', async (onSuccess, onFailure) => {
    // setTimeout(() => {
    //     onSuccess({
    //         email: 'info@intelion.co.id',
    //         tempKey: '123456'
    //     })
    // }, 2000)
    google.script.run
        .withSuccessHandler(onSuccess)
        .withFailureHandler(onFailure)
        .getSessionUserProperties();
});

application.provide('insertGraphicImage', async (graphicImageName, onSuccess, onFailure) => {
    // setTimeout(() => {
    //     onSuccess();
    // }, 1000);
    google.script.host.editor.focus();
    google.script.run
        .withSuccessHandler(onSuccess)
        .withFailureHandler(onFailure)
        .insertGraphic(graphicImageName);
});

application.config.globalProperties.$style = style;
application.config.globalProperties.$RED = properties;

application.config.globalProperties.$error = function (msg) {
    this.$notify({
        title: msg,
        type: 'error'
    })
};
application.config.globalProperties.$success = function (msg) {
    this.$notify({
        title: msg,
        type: 'success'
    })
};

application.config.globalProperties.$tagTooltip = function (msg) {
    return String(msg).length > 24 ? String(msg) : '';
};

application.config.globalProperties.$normalizeTag = function (msg) {
    return String(msg).length > 24 ? `${String(msg).substring(0, 23)}...` : msg;
};

application.config.globalProperties.$me = function (data) {
    if (data.requestKey) {
        this.$store.commit('setMe', {...this.$store.state.me, requestKey: data.requestKey});
    }
};

// Register a global custom directive called `v-focus`
application.directive('focus', {
    mounted(el) {
        el.focus()
    }
});

application.use(router);
application.use(store);
application.use(Notifications);
application.use(VueAxios, axios);
application.use(SetupCalendar, {});
application.use(Maska);
application.use(
    VueTippy,
    {
        directive: 'tippy', // => v-tippy
        defaultProps: {
            placement: 'auto-end',
            allowHTML: true,
            delay: 100,
            moveTransition: 'transform 0.2s ease-out',
            appendTo: 'parent',
            theme: 'red',
            // arrow: false
        }, // => Global default options * see all props
    }
);
application.mount('#brpl-red');
