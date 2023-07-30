/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'primary':'#121213'
      },
      colors:{
        'text':'#D7DADC',
        "title":"#D7DADC",
        'icon':'#3A3A3C',
      },
      borderColor:{
        'primary':'#3A3A3C',
      },
      
    },
  },
  plugins: [],
}

