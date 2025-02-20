import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import GreenCheckIcon from "@/src/asset/icons/green-check-icon.svg";

interface snackbarProps {
  message: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  duration?: number;
}

const SnackbarDiv = styled(motion.div)`
  position: fixed;
  transform: translate(-50%, -50%);
  top: 10%;
  left: 50%;
  width: 150px;
  height: 40px;
  border: 1px solid #4cbfa4;
  background-color: #eef9f6;
  border-radius: 10px;
  color: #4cbfa4;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const Snackbar = ({
  message,
  isOpen,
  onClose,
  duration = 2000,
}: snackbarProps) => {
  const [visible, setVisible] = useState(isOpen);
  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        setTimeout(() => onClose(), 300);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isOpen, duration, onClose]);

  return (
    <>
      <AnimatePresence>
        {visible && (
          <SnackbarDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <GreenCheckIcon /> {message}
          </SnackbarDiv>
        )}
      </AnimatePresence>
    </>
  );
};

export default Snackbar;
