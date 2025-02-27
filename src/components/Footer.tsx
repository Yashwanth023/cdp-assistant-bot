
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer 
      className="w-full py-4 px-6 border-t glass-morphism text-center text-sm text-muted-foreground"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto">
        <p>
          CDP Assistant provides information about Segment, mParticle, Lytics, and Zeotap.
        </p>
        <div className="mt-2 flex justify-center space-x-4">
          <a href="https://segment.com/docs/" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Segment Docs
          </a>
          <a href="https://docs.mparticle.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
            mParticle Docs
          </a>
          <a href="https://docs.lytics.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Lytics Docs
          </a>
          <a href="https://docs.zeotap.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Zeotap Docs
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
