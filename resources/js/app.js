import "vite/dynamic-import-polyfill";

import "../css/app.css";

import "./bootstrap";

import { createApp, defineAsyncComponent } from "vue";


var app = createApp({
    data() {
        return {
            isSetupSuccess: "grand success",
        };
    },
});
app.component(
    "UsersPage",
    defineAsyncComponent(() => import("./components/pages/MyPage.vue"))
);

// Registering a global component
