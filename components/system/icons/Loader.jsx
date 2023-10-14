import React from 'react'

export default function Loader({scale=1}) {
  return (
    <div className='flex justify-center items-center animate-bounce'>   

    <div className='absolute animate-spin'>
        <svg width="84" height="84" style={{transform:`scale(${scale})`}}  viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M60.311 76.5338C61.0644 77.9547 60.5267 79.7273 59.0571 80.3804C51.7768 83.6161 43.7054 84.7224 35.7866 83.5379C26.9053 82.2094 18.6836 78.0692 12.328 71.7249C5.97241 65.3807 1.81761 57.1664 0.473279 48.2874C-0.87105 39.4085 0.665878 30.3324 4.85853 22.391C9.05118 14.4497 15.6788 8.06128 23.7688 4.16321C31.8588 0.265138 40.9852 -0.937317 49.8088 0.732298C58.6323 2.40191 66.6885 6.85568 72.795 13.44C78.2396 19.3108 81.8788 26.5998 83.3134 34.4364C83.603 36.0184 82.4425 37.4622 80.8443 37.6415V37.6415C79.2461 37.8208 77.8171 36.6671 77.5098 35.0885C76.2255 28.4894 73.1226 22.3578 68.5248 17.4002C63.2651 11.7289 56.326 7.89269 48.726 6.45459C41.1259 5.01649 33.265 6.05221 26.2968 9.40977C19.3286 12.7673 13.62 18.2699 10.0087 25.1101C6.39738 31.9502 5.07357 39.7678 6.23149 47.4156C7.38941 55.0633 10.9681 62.1386 16.4424 67.6032C21.9167 73.0677 28.9983 76.6338 36.6482 77.7781C43.3351 78.7784 50.1484 77.8821 56.3221 75.2204C57.7989 74.5837 59.5576 75.113 60.311 76.5338V76.5338Z" fill="#D08866"/>
        </svg>
    </div>

    <div>
        <svg width="64" height="64" style={{transform:`scale(${scale})`}} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="32" fill="black" fillOpacity="0.95"/>
        <path d="M19 19.5161C19 18.1265 20.1265 17 21.5161 17H42.4839C43.8735 17 45 18.1265 45 19.5161C45 20.9057 43.8735 22.0323 42.4839 22.0323H21.5161C20.1265 22.0323 19 20.9057 19 19.5161Z" fill="url(#paint0_linear_77_42)"/>
        <path d="M19 30.4196C19 29.03 20.1265 27.9034 21.5161 27.9034H42.4839C43.8735 27.9034 45 29.03 45 30.4196C45 31.8092 43.8735 32.9357 42.4839 32.9357H21.5161C20.1265 32.9357 19 31.8092 19 30.4196Z" fill="url(#paint1_linear_77_42)"/>
        <path d="M21.496 47.1604C20.1175 47.1604 19 46.0429 19 44.6644V30.9364C19 29.5579 20.1175 28.4404 21.496 28.4404C22.8745 28.4404 23.992 29.5579 23.992 30.9364V44.6644C23.992 46.0429 22.8745 47.1604 21.496 47.1604Z" fill="url(#paint2_linear_77_42)"/>
        <defs>
        <linearGradient id="paint0_linear_77_42" x1="32" y1="21.5" x2="38" y2="32" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F67600"/>
        <stop offset="0.426041" stopColor="white"/>
        <stop offset="0.613541" stopColor="white"/>
        <stop offset="1" stopColor="#3B9C00"/>
        </linearGradient>
        <linearGradient id="paint1_linear_77_42" x1="32" y1="21.5" x2="38" y2="32" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F67600"/>
        <stop offset="0.426041" stopColor="white"/>
        <stop offset="0.613541" stopColor="white"/>
        <stop offset="1" stopColor="#3B9C00"/>
        </linearGradient>
        <linearGradient id="paint2_linear_77_42" x1="32" y1="21.5" x2="38" y2="32" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F67600"/>
        <stop offset="0.426041" stopColor="white"/>
        <stop offset="0.613541" stopColor="white"/>
        <stop offset="1" stopColor="#3B9C00"/>
        </linearGradient>
        </defs>
        </svg>
    </div>
</div>
  )
}
