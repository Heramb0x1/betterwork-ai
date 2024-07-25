<script lang="ts">
    import { base } from '$app/paths';
    console.log(base);
    
</script>
<main class="flex flex-col min-h-full bg-gray-1000 text-white" style="padding-top:30px ;">
    <section class="relative flex h-[100vh] shrink-0 flex-col items-center justify-center">
        <video class="absolute -z-10 w-full h-full object-cover"muted autoplay loop playsinline disablepictureinpicture>
            <source src="{base}/retro.webm" type="video/webm"/>
            <source src="{base}/retro.mp4" type="video/mp4"/>
        </video>        
        <section id="intro" class="flex flex-col items-center justify-center flex-grow text-center px-4">
            <h2 class="text-5xl font-bold mb-4">We're betterwork <span class="text-violet-400">AI</span></h2>
            <p class="text-2xl text-blue-400 mb-8" style="padding-top:12px ;">
                Building web tools because <span class="text-violet-400">'404: Not Found'</span> is never an option.
            </p>
            
            <div class="w-full max-w-md" style="padding-top:20px; padding-bottom:80px ;">
                <form class="flex flex-col items-center gap-4">
                    <div>
                        <a href="https://forms.gle/MzbAwGPbGgKunPEZ8" target="_blank"  class="px-6 py-2 bg-transparent border-2 border-blue-400 text-blue-400 rounded-full hover:bg-blue-400 hover:text-white transition-colors cursor-pointer">
                            Join Waitlist
                        </a>
                    </div>
                </form>
            </div>
        </section>
    </section>
</main>

