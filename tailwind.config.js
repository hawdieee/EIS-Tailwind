/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './dist/**/*.{html,js}'
  ],
  theme: {
    extend: {
      colors:{
        primary:'#05488D',
        secondary:'#027F28',
        light:'#BCCDDE',
        dark:'#3E0202',
      },
    },
    // container:{
    //   center:true,
    //   padding:'15px',
      
    // },

  
  },
  // ...
}

