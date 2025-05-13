const { createThemes } = require('../dist/lib');

/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./**/*.{js,ts,jsx,tsx,html}'],

   plugins: [
      createThemes(
         {
            t1: {
               c1: 'rgb(255 0 0)',
            },
            t2: {
               c1: 'rgb(0 0 255 / 0.5)',
            },
            t3: {
               c1: 'purple',
            },
         },
         {
            defaultTheme: {
               light: 't3', // blueish
               dark: 't2', // purple
            },
            strict: false,
            produceThemeVariant: (themeName) => `theme-${themeName}`,
         },
      ),
      createThemes(
         {
            light: {
               primary: '#ED6D00',
               minor: '#409EFF',
               secondary: '#26A69A',
               accent: '#9C27B0',
               positive: '#21BA45',
               negative: '#C10015',
               info: '#2c3038',
               warning: '#F2C037',
               rouge: '#fb4848',
               white: '#fff',
               black: '#18181B',
               gay: '#f5f5f6',
               main: '#666666',
               'border-color': '#dcdfe6',
            },
            dark: {
               primary: '#EB6100',
               minor: '#409EFF',
               secondary: '#26A69A',
               accent: '#9C27B0',
               positive: '#21BA45',
               negative: '#C10015',
               info: '#9da9bd',
               warning: '#F2C037',
               rouge: '#fb4848',
               white: '#374151',
               black: '#ffffff',
               gay: '#242a37',
               main: '#f5f5f5',
               'border-color': '#6b717d',
            },
         },
         {
            defaultTheme: 'light',
         },
      ),
   ],
};
