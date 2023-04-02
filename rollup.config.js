import vue from 'rollup-plugin-vue'
import buble from '@rollup/plugin-buble'
import terser from '@rollup/plugin-terser'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import PostCSS from 'rollup-plugin-postcss'

export default [
  {
    input: 'src/components/Icon.vue',
    output: {
      file: 'src/components/Icon.js',
      format: 'esm'
    },
    external: ['vue'],
    plugins: [
      nodeResolve(),
      commonjs(),
      vue({
        template: {
          optimizeSSR: true
        },
        compileTemplate: true,
        css: true
      }),
      PostCSS(),
      buble({ objectAssign: 'Object.assign' }),
      terser()
    ]
  },
  {
    input: 'src/index.js',
    output: {
      file: 'dist/vue-awesome.js',
      name: 'VueAwesomeV3',
      format: 'umd',
      globals: {
        vue: 'Vue'
      }
    },
    external: ['vue'],
    plugins: [
      nodeResolve(),
      commonjs(),
      vue({
        compileTemplate: true,
        css: true
      }),
      PostCSS(),
      buble({ objectAssign: 'Object.assign' }),
      terser()
    ]
  }
]
