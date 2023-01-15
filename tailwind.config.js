/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",], 
  theme: {
    extend: {},
    colors: {
      'white': "#ffffff",
      'btnActive': '#555658',
      'btnDisabled': '#B7BCC3',
      'btnDisabled2': '#999A9B',
      'success': '#07982f',
      'link': "#004cbd",
      'brdlight': "#e1e1e1",
      'brdLight2': '#b7bcc4',
      'danger': '#f41e10',
      'overlay': '#20262F',
      'warning': '#fff0cb',
    },
  },
  plugins: [],
}
