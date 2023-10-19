/** @type {import('tailwindcss').Config} */
export const content = [
  
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
 

  // Or if using `src` directory:
  
  "./node_modules/flowbite-react/**/*.js",
];
export const theme = {
  extend: {},
};
export const plugins = [
  require("flowbite/plugin")
];
