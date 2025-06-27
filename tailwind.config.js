/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",             // Memastikan Tailwind memindai file HTML utama Anda
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        // Definisikan keyframes untuk efek bounce
        bounce: {
          '0%, 100%': { transform: 'translateY(-25%)', animationTimingFunction: 'cubic-bezier(0.8,0,1,1)' },
          '50%': { transform: 'none', animationTimingFunction: 'cubic-bezier(0,0,0.2,1)' },
        },
        // Anda juga bisa membuat bounce yang lebih lembut
        softBounce: {
          '0%, 100%': { transform: 'translateY(-10%)', animationTimingFunction: 'cubic-bezier(0.8,0,1,1)' },
          '50%': { transform: 'none', animationTimingFunction: 'cubic-bezier(0,0,0.2,1)' },
        },
      },
      animation: {
        // Kaitkan keyframes dengan nama animasi yang akan digunakan di HTML
        bounce: 'bounce 1s infinite', // Nama animasi, durasi, dan iterasi
        softBounce: 'softBounce 1s infinite',
        // Contoh bounce sekali: 'bounceOnce': 'bounce 1s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}
