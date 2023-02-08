
import React from 'react'
import "../styles/Footer.css";

import { useLocation } from 'react-router-dom';


export const Footer = () => {
  return (

          <footer>
                        <div class="footer">
                            <div class="arr">
                                <div class="arr_uno">
                                    <h3>Services</h3>
                                    <ul>
                                        <li><a href="">Web desing</a></li>
                                        <li><a href="">Development</a></li>
                                        <li><a href="">Hosting</a></li>
                                    </ul>
                                </div>
                                <div class="arr_dos">
                                    <h3>About</h3>
                                    <ul>
                                        <li><a href="">Company</a></li>
                                        <li><a href="">Team</a></li>
                                        <li><a href="">Carrers</a></li>
                                    </ul>

                                </div>
                                <div class="arr_tres">
                                    <h3>Services</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt veritatis magni consequatur quaerat unde repudiandae, voluptas dolorem deleniti necessitatibus fugiat temporibus obcaecati minima corporis molestias nihil autem suscipit, laudantium rem!</p>
                                </div>
                            </div>
                            <div class="aba">
                                <div class="aba_uno">
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    width="45" height="45"
                                    viewBox="0 0 24 24"
                                    style=" fill:#808080;">    <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    width="45" height="45"
                                    viewBox="0 0 24 24"
                                    style=" fill:#808080;"><path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.014467 17.065322 19.313017 13.21875 19.898438 L 13.21875 14.384766 L 15.546875 14.384766 L 15.912109 12.019531 L 13.21875 12.019531 L 13.21875 10.726562 C 13.21875 9.7435625 13.538984 8.8710938 14.458984 8.8710938 L 15.935547 8.8710938 L 15.935547 6.8066406 C 15.675547 6.7716406 15.126844 6.6953125 14.089844 6.6953125 C 11.923844 6.6953125 10.654297 7.8393125 10.654297 10.445312 L 10.654297 12.019531 L 8.4277344 12.019531 L 8.4277344 14.384766 L 10.654297 14.384766 L 10.654297 19.878906 C 6.8702905 19.240845 4 15.970237 4 12 C 4 7.5698774 7.5698774 4 12 4 z"></path></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    width="45" height="45"
                                    viewBox="0 0 24 24"
                                    style=" fill:#808080;">    <path d="M 12 2 C 6 2 6 8 6 8 L 6 9 C 6 9 5.9775 8.9980469 5.9375 8.9980469 C 5.5975 8.9980469 4 9.0685313 4 10.394531 C 4 11.939531 5.6968438 12 5.9648438 12 L 6 12 C 6 13 4.3476719 14.170406 3.2636719 14.441406 C 2.2536719 14.833406 2.013 15.502766 2 16.009766 C 1.992 16.312766 2.0654687 16.557344 2.1054688 16.652344 C 2.4824687 17.537344 3.6022188 17.994141 4.6992188 17.994141 C 4.7372188 19.433141 5.7757031 20 6.4707031 20 C 7.2647031 20 8.1054688 19.611328 8.1054688 19.611328 C 8.1464688 19.645328 9.425 21 12 21 C 14.575 21 15.854484 19.645328 15.896484 19.611328 C 15.896484 19.611328 16.734297 20 17.529297 20 C 18.224297 20 19.262781 19.433141 19.300781 17.994141 C 20.397781 17.994141 21.517531 17.537344 21.894531 16.652344 C 21.934531 16.557344 22.008 16.312766 22 16.009766 C 21.987 15.502766 21.746328 14.833406 20.736328 14.441406 C 19.652328 14.170406 18 13 18 12 L 18.035156 12 C 18.303156 12 20 11.939531 20 10.394531 C 20 9.0685312 18.4025 8.9980469 18.0625 8.9980469 C 18.0225 8.9980469 18 9 18 9 L 18 8 C 18 8 18 2 12 2 z M 12 4 C 15.653 4 15.985 7.073 16 8 L 16 12 C 16 13.864 17.746984 15.297141 19.208984 15.994141 L 17.351562 15.994141 L 17.300781 17.943359 C 17.300781 17.953359 17.298828 17.962656 17.298828 17.972656 C 17.096828 17.931656 16.864375 17.854875 16.734375 17.796875 L 15.605469 17.275391 L 14.636719 18.058594 L 14.556641 18.125 L 14.494141 18.183594 C 14.408141 18.266594 13.599 19 12 19 C 10.401 19 9.5909063 18.267594 9.5039062 18.183594 L 9.4277344 18.109375 L 9.3613281 18.056641 L 8.3964844 17.292969 L 7.2773438 17.791016 C 7.1393438 17.853016 6.9041719 17.931656 6.7011719 17.972656 C 6.7001719 17.963656 6.6992187 17.953359 6.6992188 17.943359 L 6.6484375 15.996094 L 4.7910156 15.996094 C 6.2530156 15.298094 8 13.864 8 12 L 8 8 C 8 7.332 8.193 4 12 4 z"></path></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    width="48" height="48"
                                    viewBox="0 0 64 64"
                                    style=" fill:#808080;"><path d="M57,17.114c-1.32,1.973-2.991,3.707-4.916,5.097c0.018,0.423,0.028,0.847,0.028,1.274c0,13.013-9.902,28.018-28.016,28.018	c-5.562,0-12.81-1.948-15.095-4.423c0.772,0.092,1.556,0.138,2.35,0.138c4.615,0,8.861-1.575,12.23-4.216	c-4.309-0.079-7.946-2.928-9.199-6.84c1.96,0.308,4.447-0.17,4.447-0.17s-7.7-1.322-7.899-9.779c2.226,1.291,4.46,1.231,4.46,1.231	s-4.441-2.734-4.379-8.195c0.037-3.221,1.331-4.953,1.331-4.953c8.414,10.361,20.298,10.29,20.298,10.29s-0.255-1.471-0.255-2.243	c0-5.437,4.408-9.847,9.847-9.847c2.832,0,5.391,1.196,7.187,3.111c2.245-0.443,4.353-1.263,6.255-2.391	c-0.859,3.44-4.329,5.448-4.329,5.448S54.314,18.335,57,17.114z M24.141,47.503c8.334,0.376,23.156-6.394,23.971-24.018	c0.007-0.16,0.032-0.447,0.017-0.706c-0.02-0.334,0.146-0.556,0.285-0.702c0.228-0.241,0.475-0.534,0.71-0.971	c0.199-0.369,0.077-0.526-0.169-0.569c-0.167-0.029-0.34-0.071-0.532-0.113c-0.343-0.075-0.492-0.396-0.33-0.722	c0.11-0.221,0.257-0.527,0.365-0.846c0.107-0.314-0.032-0.386-0.271-0.344c-0.198,0.034-0.427,0.077-0.632,0.115	c-0.318,0.059-0.647-0.005-0.958-0.362c-1.206-1.388-2.512-1.768-4.366-1.768c-3.246,0-5.847,2.623-5.847,5.847	c0,0.888,0.229,1.955,0.389,2.986c0.299,1.925-0.553,3.741-3.504,3.511c-4.335-0.338-11.005-1.287-16.082-5.034	c0.505,0.999,1.718,2.543,2.681,3.702c0.748,0.9,0.515,2.294-0.452,2.748c-0.485,0.228-1.073,0.418-1.749,0.541	c1.774,1.435,3.811,2.365,5.37,3.027c1.954,0.829,2.492,2.176,1.292,3.518c-0.431,0.482-0.988,0.969-1.708,1.402	c0.866,0.598,2.318,1.099,3.979,1.369c1.677,0.273,2.78,2.114,1.056,4.398C26.817,45.624,25.617,46.692,24.141,47.503z"></path></svg> */}
                                </div>
                                <div class="aba_dos">
                                    <p>Reduce tu huella @ 2022</p>
                                </div>
                            </div>
                        </div>
          </footer>

  )
}