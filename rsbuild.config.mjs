import { defineConfig } from '@rsbuild/core';
export default {
    tools: {
      postcss: (config) => {
        config.postcssOptions.plugins.push(require('tailwindcss'));
        return config;
      },
    },
  };