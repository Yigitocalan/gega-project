/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container:
    {
      center:true,
      screens:{
        lg:'1140px',
        xl:'1140px',
        '2x1':'1140px',
      }
    }
    ,
    extend: {
      fontFamily:{
        gemunu:[ 'Gemunu Libre', 'sans-serif'],
        open:['open sans','sans-serif']
      },
      colors:{
        'gega-red':'#BC1A45',
        'gega-blue':'#0000ff ',
        'gega-gray':'#a9a9a9',
        'gega-green':'#7fff00'
      }
    },
  },
  plugins: [],
}

