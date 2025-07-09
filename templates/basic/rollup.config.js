import terser from '@rollup/plugin-terser';

export default [
  {
    input: 'src/main.js',
    output: {
      file: 'dist/addonTemplate.min.js',
      format: 'iife',
      name: 'addonTemplate',
      plugins: [
        terser()
      ]
    }
  },
  {
    input: 'src/main.js',
    output: {
      file: 'dist/addonTemplate.esm.js',
      format: 'esm'
    }
  }
];