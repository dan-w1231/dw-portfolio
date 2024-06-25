
'use client'
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ModalRoot = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div id="modal-root" key="modal-root"></motion.div>
    </AnimatePresence>
  );
};

export default ModalRoot;