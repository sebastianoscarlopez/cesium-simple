import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import css from "rollup-plugin-import-css";
import copy from 'rollup-plugin-copy'
import incremental from '@mprt/rollup-plugin-incremental'
// import postcss from 'rollup-plugin-postcss'

// rollup.config.mjs
export default {
  input: 'src/main.js',
  treeshake: false,
  output: {
    dir: 'dist',
    format: 'cjs',
    // // //ATTENTION: preserveModules must be enabled!
    // preserveModules: true,
    // preserveModulesRoot: 'src',
    //ATTENTION: minifyInternalExports must be disabled!
    // minifyInternalExports: false,
  },
  plugins: [
    // incremental(),
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
    }),
    //ATTENTION: this fixes issues with syntheticNamedExports in commonjs modules
    //it should be last 
    // incremental.fixSNE(),
  ]
};
