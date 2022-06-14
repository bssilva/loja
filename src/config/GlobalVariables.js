import Vue from 'vue';

// JS CONTEXT
window.API = require('../../src/api/Routes').routesApi;

// VUE CONTEXT
Vue.prototype.API = window.API;

