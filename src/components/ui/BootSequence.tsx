"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function BootSequence() {
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("");
  
  useEffect(() => {
    // Only run once per session
    if (sessionStorage.getItem("booted")) {
      setLoading(false);
      return;
    }
    
    const sequence = [
      "BIOS Date 10/01/26 17:30:21 Ver 1.00",
      "CPU: KWAQ Processor (3.2GHz)",
      "Memory Test: 32768K OK",
      "Initializing hardware... OK",
      "Loading KWAQ-OS...",
      "Mounting file systems... OK",
      "Starting terminal services... OK",
      "Welcome."
    ];
    
    let i = 0;
    const interval = setInterval(() => {
      setText((prev) => prev + (prev ? "\n" : "") + sequence[i]);
      i++;
      if (i >= sequence.length) {
        clearInterval(interval);
        setTimeout(() => {
          setLoading(false);
          sessionStorage.setItem("booted", "true");
        }, 800);
      }
    }, 250);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[999] flex flex-col items-start justify-start bg-black text-[#0F0] font-mono p-4 md:p-8 text-sm md:text-base pointer-events-none"
        >
          <div className="whitespace-pre-wrap">{text}</div>
          {text.length > 0 && (
            <motion.div
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="w-3 h-5 bg-[#0F0] mt-1 inline-block"
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
