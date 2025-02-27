
import { motion } from "framer-motion";
import { ExternalLink, MessageSquare, Heart } from "lucide-react";

const Footer = () => {
  const cdpLogos = [
    { name: "Segment", color: "bg-cdp-segment", url: "https://segment.com/docs/" },
    { name: "mParticle", color: "bg-cdp-mparticle", url: "https://docs.mparticle.com/" },
    { name: "Lytics", color: "bg-cdp-lytics", url: "https://docs.lytics.com/" },
    { name: "Zeotap", color: "bg-cdp-zeotap", url: "https://docs.zeotap.com/home/en-us/" }
  ];

  return (
    <motion.footer 
      className="w-full py-8 px-6 border-t glass-morphism"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-6 w-6 text-primary" />
              <h2 className="text-xl font-semibold">CDP Assistant</h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Your personal guide to Customer Data Platforms. Ask questions, get detailed answers, and compare features across Segment, mParticle, Lytics, and Zeotap.
            </p>
            <div className="flex items-center text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 mx-1 text-cdp-mparticle animate-pulse" />
              <span>for data enthusiasts</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-4">CDP Documentation</h3>
            <div className="grid grid-cols-2 gap-4">
              {cdpLogos.map((cdp) => (
                <motion.a
                  key={cdp.name}
                  href={cdp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center ${cdp.color} bg-opacity-20`}>
                    <div className={`h-4 w-4 rounded-full ${cdp.color}`}></div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm group-hover:underline">{cdp.name}</span>
                    <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-border text-center text-xs text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} CDP Assistant. All documentation belongs to their respective platforms.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
