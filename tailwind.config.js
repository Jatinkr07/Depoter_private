/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
   
    extend: {
      // // screens: {
      // //   'max-[600px]': {'max': '600px'},
      // // },
      // screens:{

      // },
      backgroundImage: {
        "text-gradient":
          "linear-gradient(89.99deg, #EDA119 0.01%, #252525 71.79%)",
      },
    },
  },
  plugins: [],
};
