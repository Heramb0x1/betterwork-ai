<script>
    const formId = "imOZ4_p";
</script>

<div class="w-full min-h-screen bg-[var(--bg-hero)]">
    <div class="w-full max-w-5xl mx-auto px-3 md:px-2">
        <h1 class="head-text text-5xl mt-12 md:mt-16 lg:mt-24 text-white sm:text-5xl font-bold mb-4">Contact Form</h1>
        <form action="https://api.web3forms.com/submit" method="POST">
            <div class="p-2 w-full">
                <div class="relative">
                    <label for="name" class="leading-7 py-4 text-lg text-white">Name</label>
                    <input type="hidden" name="access_key" value="9819a35b-60cc-45e3-938f-bf6f2622fb46">
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required
                        class="w-full content bg-white !text-gray-900 rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none py-1 px-1 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>
            </div>
            
            <div class="p-2 w-full mt-2 md:mt-6 lg:mt-2">
                <div class="relative">
                    <label for="email" class=" leading-7 py-4 text-lg text-white">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required
                        class="w-full content bg-white !text-gray-900 rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none py-1 px-1 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>
            </div>
            
            <div class="p-2 w-full mt-2 md:mt-6 lg:mt-2">
                <div class="relative">
                    <label for="message" class=" leading-7 py-4 text-lg text-white">Message</label>
                    <textarea 
                        id="message" 
                        name="message" 
                        required
                        class="w-full content bg-white !text-gray-900 rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none py-1 px-1 leading-8 transition-colors duration-200 ease-in-out"
                    ></textarea>
                </div>
            </div>
            <div class="p-2 w-full mt-2 md:mt-6 lg:mt-2">
                <div>
                    <button type="submit"
                        class="flex text-white  bg-gray-900 border-0 py-3 px-6 focus:outline-none hover:bg-blue-900 rounded text-xl font-bold shadow-lg mx-0 flex-col text-center">
                        Send
                    </button>
                </div>
        </form>
        <a 
        href="mailto:betterwork.ai@gmail.com" 
        class="font-medium mt-2 md:mt-4 lg:mt-2 content text-indigo-400 hover:underline"
    >
        Or contact us at betterwork.ai@gmail.com    
    </a>
    </div>
    </div>

<style>
    .head-text {
    font-family: "League Spartan", serif;
    font-optical-sizing: auto;
    font-weight: 500;
    color: #fff;
}

    .content {
    font-family: "League Spartan", serif;
    font-optical-sizing: auto;
    font-weight: 200;
    color: #fff;
}
</style>
