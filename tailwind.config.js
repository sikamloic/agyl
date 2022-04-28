module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgrounImage:{
        'banner1': "url('/src/assets/banner.png')",
        'banner2':  "url('/src/assets/banner2.png')",
      }
    },
  },
  plugins: [],
}
