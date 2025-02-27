
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code, Info, MessageSquare, Settings, LogIn, LogOut, Sun, Moon, Menu } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import AuthModal from "./Auth/AuthModal";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const { toast } = useToast();

  // Check and set the theme on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newMode;
    });
  };

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
  };

  const handleOpenInfo = () => {
    toast({
      title: "CDP Assistant",
      description: "This assistant helps you find information about Customer Data Platforms including Segment, mParticle, Lytics, and Zeotap.",
    });
  };

  const handleOpenCode = () => {
    toast({
      title: "Documentation",
      description: "Browse CDP documentation directly from the sources to get deeper insights.",
      action: (
        <a 
          href="https://segment.com/docs/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-primary text-primary-foreground px-3 py-1 rounded-md text-xs"
        >
          View Docs
        </a>
      ),
    });
  };

  const handleOpenSettings = () => {
    toast({
      title: "Settings",
      description: "Customize your experience with themes, notifications, and more features coming soon.",
    });
  };

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
          <button 
            className="p-2 rounded-full hover:bg-secondary/80 transition-colors"
            onClick={toggleTheme}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5 text-muted-foreground" />
            ) : (
              <Moon className="h-5 w-5 text-muted-foreground" />
            )}
          </button>
          
          <button 
            className="p-2 rounded-full hover:bg-secondary/80 transition-colors"
            onClick={handleOpenInfo}
          >
            <Info className="h-5 w-5 text-muted-foreground" />
          </button>
          
          <button 
            className="p-2 rounded-full hover:bg-secondary/80 transition-colors"
            onClick={handleOpenCode}
          >
            <Code className="h-5 w-5 text-muted-foreground" />
          </button>
          
          <button 
            className="p-2 rounded-full hover:bg-secondary/80 transition-colors"
            onClick={handleOpenSettings}
          >
            <Settings className="h-5 w-5 text-muted-foreground" />
          </button>
          
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="ml-2">
                  <Menu className="h-4 w-4 mr-2" />
                  {user?.username}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button 
              variant="outline" 
              size="sm" 
              className="ml-2"
              onClick={() => setIsAuthModalOpen(true)}
            >
              <LogIn className="h-4 w-4 mr-2" />
              Login
            </Button>
          )}
        </motion.div>
      </div>
      
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </motion.header>
  );
};

export default Header;
