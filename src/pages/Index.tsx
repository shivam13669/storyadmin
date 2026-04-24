import Navigation from "@/components/Navigation";
import { useRef } from "react";

const Index = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  return (
    <div className="h-screen w-full bg-white flex flex-col pt-16">
      <Navigation />

      <iframe
        ref={iframeRef}
        src="/cliffhanger/index.html"
        className="w-full flex-1 border-none block overflow-hidden"
        title="Cliffhanger Home"
      />
    </div>
  );
};

export default Index;
