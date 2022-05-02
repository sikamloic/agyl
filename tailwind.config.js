module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgrounImage:{
        'banner1': "url('/src/assets/banner.png')",
        'banner2':  "url('/src/assets/banner2.png')",
        'banner3': "url('/src/assets/banner3.png')",
        'banner4':  "url('/src/assets/banner4.png')",
      }
    },
  },
  plugins: [],
}
