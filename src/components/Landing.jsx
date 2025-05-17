import heroImage from "../assets/image-2.jpg"; // ✅ Use a valid variable name for the imported image
import { ChevronRight, Play } from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen  bg-[#E9EFEC] text-black">
      {" "}
      <div className="container mx-auto px-4 py-10">
        {/* Main Content */}
        <main className="mt-12 grid grid-cols-1 py-16 items-center gap-8 md:mt-20 md:grid-cols-2">
          {/* Left Column - Hero Text */}
          <div className="relative z-10">
            <h1 className="text-6xl leading-tight font-sora font-bold tracking-tighter uppercase md:text-8xl">
              Obboloota
              <br />
              Yesuus.
            </h1>

            <div className="mt-12 md:mt-20">
              <div className="text-sm font-sora font-medium uppercase md:text-base">
                Grow in Christ, Flourish in Faith
              </div>
              <p className="mt-2  max-w-lg text-sm leading-snug font-sora font-large text-black uppercase md:text-base">
                Welcome to a place where your spiritual journey is nurtured and
                your faith deepens. As it is written, “But grow in the grace and
                knowledge of our Lord and Savior Jesus Christ” (2 Peter 3:18),
                we are called to continual growth in Him. Whether you’re just
                beginning your walk or seeking deeper intimacy with God, we
                believe in His promise: “Like a tree planted by streams of
                water, which yields its fruit in season and whose leaf does not
                wither—whatever they do prospers” (Psalm 1:3). Let’s grow
                together, rooted in truth, strengthened by grace, and
                transformed by the Spirit.
              </p>

              <button className="mt-6 flex items-center font-sora font-bold space-x-2 rounded-lg bg-white/20 px-6 py-2 backdrop-blur-sm hover:bg-rose-400">
                <span className="text-sm uppercase">Explore More</span>
                <ChevronRight size={16} />
              </button>
            </div>

            <div className="absolute right-0 bottom-0 text-xl font-light tracking-widest opacity-50">
              BSOBBOLOOTA
            </div>
          </div>

          {/* Right Column - Image and Stats */}
          <div className="relative">
            {/* Profile Image with Glow */}
            <div className="relative flex justify-center">
              <div className="absolute h-64 w-64  bg-white/30 blur-xl"></div>
              <img
                src={heroImage}
                alt="Profile with digital glow"
                width={700}
                height={700}
                className="relative z-10 border-white "
              />

              {/* Play Button */}
              <button className="absolute bottom-10 left-10 z-20 rounded-full bg-white/20 p-2 backdrop-blur-sm hover:bg-rose-400 hover:shadow-rose-200">
                <Play size={20} />
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
