import React from 'react'

export const Cart = ({color}) => {
  return <>
  <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path 
  d="M25.2354 19.1926H8.95225L9.76982 17.5273L23.3542 17.5027C23.8136 17.5027 24.2073 17.1746 24.2894 16.7207L26.1706 6.19062C26.2198 5.91445 26.146 5.63008 25.9655 5.41406C25.8763 5.30775 25.7651 5.22211 25.6395 5.16309C25.5139 5.10407 25.377 5.07308 25.2382 5.07227L7.95693 5.01484L7.80928 4.32031C7.71631 3.87734 7.31709 3.55469 6.86318 3.55469H2.63857C2.38258 3.55469 2.13707 3.65638 1.95605 3.8374C1.77503 4.01841 1.67334 4.26393 1.67334 4.51992C1.67334 4.77592 1.77503 5.02143 1.95605 5.20245C2.13707 5.38346 2.38258 5.48516 2.63857 5.48516H6.08115L6.72646 8.55312L8.31514 16.2449L6.26982 19.5836C6.16361 19.727 6.09963 19.8972 6.08514 20.075C6.07064 20.2528 6.1062 20.4312 6.18779 20.5898C6.35186 20.9152 6.68271 21.1203 7.04912 21.1203H8.76631C8.40023 21.6065 8.20249 22.1988 8.20303 22.8074C8.20303 24.3551 9.46084 25.6129 11.0085 25.6129C12.5562 25.6129 13.814 24.3551 13.814 22.8074C13.814 22.1977 13.6116 21.6043 13.2507 21.1203H17.6558C17.2897 21.6065 17.0919 22.1988 17.0925 22.8074C17.0925 24.3551 18.3503 25.6129 19.8979 25.6129C21.4456 25.6129 22.7034 24.3551 22.7034 22.8074C22.7034 22.1977 22.5011 21.6043 22.1401 21.1203H25.2382C25.7687 21.1203 26.2034 20.6883 26.2034 20.1551C26.2018 19.8994 26.0992 19.6546 25.9178 19.4743C25.7365 19.294 25.4912 19.1927 25.2354 19.1926ZM8.35889 6.91797L24.1034 6.96992L22.5612 15.6051L10.1937 15.627L8.35889 6.91797ZM11.0085 23.6715C10.5327 23.6715 10.1444 23.2832 10.1444 22.8074C10.1444 22.3316 10.5327 21.9434 11.0085 21.9434C11.4843 21.9434 11.8726 22.3316 11.8726 22.8074C11.8726 23.0366 11.7815 23.2564 11.6195 23.4184C11.4574 23.5805 11.2377 23.6715 11.0085 23.6715ZM19.8979 23.6715C19.4222 23.6715 19.0339 23.2832 19.0339 22.8074C19.0339 22.3316 19.4222 21.9434 19.8979 21.9434C20.3737 21.9434 20.762 22.3316 20.762 22.8074C20.762 23.0366 20.671 23.2564 20.5089 23.4184C20.3469 23.5805 20.1271 23.6715 19.8979 23.6715Z" 
  fill={`${color ? color : '#606060'}`}/>
</svg>


  </>
}
