import HeroContent from "../sub/HeroContent";
 
export default function Hero() {
  return (
    <div className="relative flex flex-col h-full w-full">
    
      <video
        autoPlay
        muted
        loop
        className=" top-[-500px] rotate-180 absolute md:top-[-340px] left-0 z-[1] w-full h-full object-cover"
      >
        <source src="/blackhole.webm" type="video/webm"/>
      </video>
     <HeroContent/>
    </div>
  );
}
