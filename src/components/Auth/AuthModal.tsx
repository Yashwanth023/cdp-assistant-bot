
import React, { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { AnimatePresence } from 'framer-motion';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [showLoginForm, setShowLoginForm] = useState(true);
  
  const toggleForm = () => {
    setShowLoginForm(prev => !prev);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] p-0 bg-transparent border-none shadow-none">
        <AnimatePresence mode="wait">
          {showLoginForm ? (
            <LoginForm key="login" onToggleForm={toggleForm} />
          ) : (
            <SignupForm key="signup" onToggleForm={toggleForm} />
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
