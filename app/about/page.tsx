import About from "./About";

export default function page() {
  return (
    <div>
      <div className="">
        <div>
          <video
            autoPlay loop muted playsInline preload="auto"
            className="w-full h-screen object-cover opacity-30 absolute"
          >
            <source src="/video/bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <About/>
      </div>
    </div>
  );
}
