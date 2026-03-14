import romanticLeft from "@/assets/romantic-left.png";
import romanticRight from "@/assets/romantic-right.png";

const FloatingImages = () => {
  return (
    <>
      <div className="fixed left-[-60px] top-1/4 w-48 h-48 opacity-40 floating-image pointer-events-none hidden lg:block">
        <img src={romanticLeft} alt="Romantic roses decoration" className="w-full h-full object-contain drop-shadow-2xl" />
      </div>
      <div className="fixed right-[-60px] bottom-1/4 w-48 h-48 opacity-40 floating-image pointer-events-none hidden lg:block" style={{ animationDelay: "-10s" }}>
        <img src={romanticRight} alt="Crystal heart decoration" className="w-full h-full object-contain drop-shadow-2xl" />
      </div>
    </>
  );
};

export default FloatingImages;
