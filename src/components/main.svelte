<script lang="ts">
    let handleLoadStart = (event: Event) => {
    //   console.log('Video load started', event);
    const videoElement = event.target as HTMLVideoElement;
    videoElement.playbackRate = 2;
    };
</script>
<main class="flex flex-col min-h-screen text-white">
    <section class="relative flex min-h-screen flex-col items-center justify-center">
        <section id="intro" class="flex flex-col items-center justify-center text-center px-4 pt-0 backdrop-blur-sm rounded-3xl py-48">
            <div class="max-w-2xl px-7 pt-24 mx-auto text-center">
                <h2 class="text-base font-semibold text-pink-300 tracking-wide uppercase">
                    Automate the Grind, Elevate the Results
                </h2> 
                <p class="mt-2 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
                    10X Your Efficiency & Secure Recognition with 
                    <span class="px-2 py-1 relative inline-block">
                        <svg class="stroke-current bottom-0 absolute text-indigo-300 -translate-x-2" viewBox="0 0 410 18" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 6.4c16.8 16.8 380.8-11.2 397.6 5.602" stroke-width="12" fill="none" fill-rule="evenodd" stroke-linecap="round"></path>
                        </svg>
                        <span class="relative">AI-Powered Smarts!</span>
                    </span>
                </p>
            </div>


            <div class="flex flex-row gap-4 items-center justify-center mt-16">
                <a 
                    href="#features" 
                    class="px-6 py-2 rounded-full border border-gray-200 bg-white text-black hover:bg-gray-50 transition-colors duration-200"
                >
                    See features
                </a>
                
                <a 
                    href="#callout" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    class="px-6 py-2 rounded-full border-solid border-2 border-slate-800 bg-black text-white hover:bg-gray-900 transition-colors duration-200"
                >
                    Get Started
                </a>
            </div>

            <div class="w-auto h-auto relative px-20 py-48 rounded-lg">
                <!-- Desktop Video -->
                <div class="hidden md:block">
                    <video 
                        muted 
                        autoplay 
                        loop 
                        preload="true" 
                        disablepictureinpicture 
                        on:loadstart={handleLoadStart}
                    >
                        <source src="./open-in-scihub-demo-recreated.mp4" type="video/mp4"/>
                    </video>
                </div>
            
                <!-- Mobile Image -->
                <div class="block md:hidden">
                    <img 
                        src="/open-in-scihub-mobile.png" 
                        alt="Feature Demo" 
                        class="rounded-lg shadow-lg w-full h-auto"
                    />
                </div>
            </div>



            <div id="features" class="grid md:grid-cols-2 lg:grid-cols-3 gap-5 px-20 pt-84 py-44">
                <h1  class="underline decoration-[#78C00C] decoration-[wavy decoration-[5px]  underline-offset-[16px] head-text text-5xl text-slate-200 sm:text-5xl font-bold mb-4">What We Provide</h1>
                <div class="p-4 bg-black shadow border rounded-[10px]">
                        <button class="p-2 bg-[#F5F8FF] rounded-[10px] cursor-default">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12 4V5M12 19V20M5.07178 8L5.9378 8.5M18.0622 15.5L18.9282 16M18.9282 7.99999L18.0622 8.49999M5.93781 15.5L5.07178 16M16 12C16 9.79086 14.2091 8 12 8C9.79084 8 7.99998 9.79086 7.99998 12C7.99998 14.2091 9.79084 16 12 16C14.2091 16 16 14.2091 16 12Z"
                                    stroke="#252432" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                
                        <p class="font-[Inter] text-lg text-[#ffffff] my-5">Stay 10X</p>
                
                        <p class="font-[Inter] text-sm text-[#8987A1] font-[400]">From streamlined tasks to impactful outcomes, 
                            betterwork.ai transforms how you work and ensures you get noticed..</p>
                
                    </div>
                
                    <div class="p-4 bg-black shadow border rounded-[10px]">
                
                        <button class="p-2 bg-[#F5F8FF] rounded-[10px] cursor-default">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10.2442 4.86956C11.0022 3.47968 12.9979 3.47968 13.7559 4.86956L14.9723 7.09993C15.2599 7.62738 15.7694 7.99758 16.36 8.10817L18.8571 8.57579C20.4132 8.86719 21.0299 10.7653 19.9422 11.9157L18.1969 13.7617C17.7842 14.1983 17.5895 14.7973 17.6668 15.3931L17.9938 17.9125C18.1975 19.4824 16.5829 20.6555 15.1527 19.9766L12.8577 18.8871C12.3149 18.6295 11.6851 18.6295 11.1424 18.8871L8.84732 19.9766C7.41713 20.6555 5.80257 19.4824 6.00629 17.9125L6.3332 15.3931C6.41051 14.7973 6.21588 14.1983 5.80313 13.7617L4.05781 11.9157C2.97019 10.7653 3.58689 8.86719 5.14299 8.57579L7.64007 8.10817C8.2306 7.99758 8.74014 7.62738 9.02779 7.09993L10.2442 4.86956Z"
                                    stroke="#252432" stroke-width="1.5" stroke-linejoin="round" />
                            </svg>
                
                        </button>
                
                        <p class="font-[Inter] text-lg text-[#ffffff] my-5">Outperform Expectations</p>
                
                        <p class="font-[Inter] text-sm text-[#8987A1] font-[400]">Our smart solutions optimize processes, 
                            analyze performance, and position you for career growth.</p>
                
                    </div>
                    <div class="p-4 bg-black shadow border rounded-[10px]">
                
                        <button class="p-2 bg-[#F5F8FF] rounded-[10px] cursor-default">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 9L9.53354 10.5201C10.7287 11.2372 10.8423 12.9262 9.75394 13.7968L7 16M12 16H17M6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21Z"
                                    stroke="#252432" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                
                        </button>
                
                        <p class="font-[Inter] text-lg text-[#ffffff] my-5">Open-Source Contribution</p>
                
                        <p class="font-[Inter] text-sm text-[#8987A1] font-[400]">Contribute to our cutting-edge tools and be part of an 
                            open-source community driving innovation with betterwork.ai</p>
                
                    </div>
                
                    <div class="p-4 bg-black shadow border rounded-[10px] lg:col-span-2 flex justify-between gap-5">
                
                        <div>
                            <button class="p-3 py-4 bg-[#F5F8FF] rounded-[10px] cursor-default">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="9" cy="12" r="3"></circle>
                                    <circle cx="15" cy="12" r="3"></circle>
                                    <path d="M8 16c-2 0-4 1-4 3"></path>
                                    <path d="M16 16c2 0 4 1 4 3"></path>
                                    <path d="M12 14c-2 0-4 1-4 3"></path>
                                </svg>
                
                            </button>
                
                            <p class="font-[Inter] text-lg text-[#ffffff] my-5">Innovate Together!</p>
                
                            <p class="font-[Inter] text-sm text-[#8987A1] font-[400]">Share your vision, and we’ll help you bring 
                                it to life with the support of betterwork.ai tools.</p>
                
                        </div>
                        <div>
                            <img class="hidden lg:block mt-5 rounded-[10px]" src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=400" alt="Pictures" />
                        </div>
                
                    </div>
            </div>











        
            <div class="w-full h-auto bg-slate-800/50 backdrop-blur-sm relative px-7 py-7 rounded-[12px]">
                <div style=" padding-bottom: 48px;">
                    <a id="callout" href="https://microsoftedge.microsoft.com/addons/detail/egadimjlhhanibmneobhgcpoemmdgmco" 
                    target="_blank" 
                    class="group relative inline-flex items-center justify-start overflow-hidden rounded bg-indigo-50 py-3 pl-6 pr-16 font-semibold text-indigo-600 transition-all duration-150 ease-in-out hover:pl-16 hover:pr-6">
                    <span class="absolute bottom-0 left-0 h-1 w-full bg-indigo-600 transition-all duration-150 ease-in-out group-hover:h-full"></span>
                    
                    <span class="absolute right-0 pr-7 duration-200 ease-out group-hover:translate-x-12">
                        <svg class="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </span>
                    
                    <span class="absolute left-0 -translate-x-12 pl-7 duration-200 ease-out group-hover:translate-x-0">
                        <svg class="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </span>
                    
                    <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                        Try `open-in-Sci-Hub`
                    </span>
                </a>
                </div>

                <h2 class="text-5xl font-bold manrope tracking-tighter font-sans mb-4 pt-14">We're betterwork.<span class="text-violet-400 font-bold manrope text-5xl tracking-tighter font-sans">ai</span></h2>
                <p class=" text-sky-300 mb-8 manrope text-2xl  font-sans" style="padding-top:12px ;">
                    Building web tools because <span class="text-violet-400 bg-slate-700 bg-opacity-50 rounded-lg p-1"><code class="tracking-wide">404: Not Found</code></span> is never an option.
                </p>
                
                <div class="w-full pt-5 pb-5">
                    <form class="flex flex-col items-center gap-4">
                        <div>
                            <a href="https://tally.so/r/mZPY4y" target="_blank" class="button-link block w-full text-center px-12 py-2   bg-transparent border-2 border-blue-400 text-blue-400 rounded-full hover:bg-blue-400 hover:text-white transition-colors duration-300 relative ">
                                Join Waitlist
                                <span class="arrow-hover inline-block ml-2">
                                    →
                                </span>
                            </a>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    </section>
    <style>
        .arrow-hover {
            transition: transform 0.3s ease;
        }
        .button-link:hover .arrow-hover {
            transform: translateX(10px);
        }
        .head-text {
            font-family: "League Spartan", serif;
            font-optical-sizing: auto;
            font-weight: 500;
            color: #fff;
        }
        .underline1 {
        text-decoration-line: underline;
        text-decoration-style: wavy;
        text-decoration-color: #78C00C;
        text-decoration-thickness: 60px;
        text-underline-offset: 16px;
        } 
    </style>
</main>

