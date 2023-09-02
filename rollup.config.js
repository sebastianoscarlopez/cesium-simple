import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import css from "rollup-plugin-import-css";
import copy from 'rollup-plugin-copy'

// import postcss from 'rollup-plugin-postcss'

// rollup.config.mjs
export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  plugins: [
    commonjs({ sourceMap: false }),
    nodeResolve(),
    css({
      output: 'dist/bundle.css'
    }),
    copy({
      targets: [
        {
          src: [
            'index.html',
            'node_modules/cesium/Build/Cesium/Workers',
            'node_modules/cesium/Build/Cesium/ThirdParty',
            'node_modules/cesium/Build/Cesium/Assets',
            'node_modules/cesium/Build/Cesium/Widgets'
          ],
          dest: 'dist'
        }
      ]
    })
  ]
};
