import { useEffect } from 'react';
import { Card } from './ui/card';

const RecentWorks = () => {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement('script');
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="recent-works" className="py-16 bg-[#0A0F1A]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gradient">Recent Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="overflow-hidden bg-[#0D1425] border-blue-900/20">
            <blockquote
              className="instagram-media"
              data-instgrm-captioned
              data-instgrm-permalink="https://www.instagram.com/reel/DFNPcr2ym8t/"
              data-instgrm-version="14"
            >
            </blockquote>
          </Card>
          
          <Card className="overflow-hidden bg-[#0D1425] border-blue-900/20">
            <blockquote
              className="instagram-media"
              data-instgrm-captioned
              data-instgrm-permalink="https://www.instagram.com/reel/DFK3RzsSOHi/"
              data-instgrm-version="14"
            >
            </blockquote>
          </Card>
          
          <Card className="overflow-hidden bg-[#0D1425] border-blue-900/20">
            <blockquote
              className="instagram-media"
              data-instgrm-captioned
              data-instgrm-permalink="https://www.instagram.com/reel/DFIWZwITOcK/"
              data-instgrm-version="14"
            >
            </blockquote>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RecentWorks;