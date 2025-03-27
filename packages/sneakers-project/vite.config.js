"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vite_1 = require("vite");
var plugin_react_1 = require("@vitejs/plugin-react");
var path_1 = require("path");
exports.default = (0, vite_1.defineConfig)({
    plugins: [(0, plugin_react_1.default)()],
    server: {
        port: 5001,
        cors: true,
    },
    resolve: {
        alias: {
            '@shared': path_1.default.resolve(__dirname, '../shared/src'),
        },
    },
    build: {
        target: 'esnext',
        minify: false,
        cssCodeSplit: false,
    },
});
