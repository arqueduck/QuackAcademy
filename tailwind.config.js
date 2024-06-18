/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    // themes: ["corporate"]
    themes: [
      {
        site: {          
          "primary": "#f97316",
          "primary-content": "#f3f4f6",
          "secondary": "#2563eb",
          "secondary-content": "#d3e6d1",
          "accent": "#4ade80",
          "accent-content": "#001400",
          "neutral": "#374151",
          "neutral-content": "#c8c5cb",
          "base-100": "#f3f4f6",
          "base-200": "#e5e7eb",
          "base-300": "#d1d5db",
          "base-content": "#141616",
          "info": "#38bdf8",
          "info-content": "#00080f",
          "success": "#22c55e",
          "success-content": "#000a02",
          "warning": "#fde047",
          "warning-content": "#160500",
          "error": "#ff1f48",
          "error-content": "#160002",
        },
      },
    ]
  }
};
