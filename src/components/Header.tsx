
import { motion } from "framer-motion";
import { Code, Info, MessageSquare, Settings } from "lucide-react";

const Header = () => {
  return (
    <motion.header 
      className="w-full py-4 px-6 border-b glass-morphism neo-morphism sticky top-0 z-10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div 
          className="flex items-center gap-2"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <MessageSquare className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-semibold tracking-tight">CDP Assistant</h1>
        </motion.div>
        
        <motion.div 
          className="flex items-center gap-4"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <button className="p-2 rounded-full hover:bg-secondary/80 transition-colors">
            <Info className="h-5 w-5 text-muted-foreground" />
          </button>
          <button className="p-2 rounded-full hover:bg-secondary/80 transition-colors">
            <Code className="h-5 w-5 text-muted-foreground" />
          </button>
          <button className="p-2 rounded-full hover:bg-secondary/80 transition-colors">
            <Settings className="h-5 w-5 text-muted-foreground" />
          </button>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
