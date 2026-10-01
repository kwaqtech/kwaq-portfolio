"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Square } from "lucide-react";

interface TerminalModalProps {
  open: boolean;
  onClose: () => void;
}

interface LogLine {
  id: string;
  type: "input" | "output" | "system";
  text: string;
}

const TypewriterText = ({ text, delay = 15, onComplete }: { text: string; delay?: number; onComplete?: () => void }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    // Simple audio click sound simulation for mechanical feel
    const playClick = () => {
      try {
        const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        oscillator.type = "sine";
        oscillator.frequency.setValueAtTime(400 + Math.random() * 200, audioCtx.currentTime);
        gainNode.gain.setValueAtTime(0.01, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);
        oscillator.start(audioCtx.currentTime);
        oscillator.stop(audioCtx.currentTime + 0.05);
      } catch (e) {
        // Ignore if AudioContext is not allowed
      }
    };

    const timer = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      if (i % 2 === 0) playClick();
      i++;
      if (i >= text.length) {
        clearInterval(timer);
        if (onComplete) onComplete();
      }
    }, delay);
    return () => clearInterval(timer);
  }, [text, delay, onComplete]);

  return <span>{displayedText}</span>;
};

const INITIAL_LOG: LogLine = {
  id: "init",
  type: "system",
  text: 'Welcome to KWAQ OS v1.0.0. Type "help" for a list of available commands.'
};

export function TerminalModal({ open, onClose }: TerminalModalProps) {
  const [logs, setLogs] = useState<LogLine[]>([INITIAL_LOG]);
  const [input, setInput] = useState("");
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Auto focus input when opened
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  // Auto scroll to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    const newLogs: LogLine[] = [...logs, { id: Date.now().toString(), type: "input", text: trimmed }];
    let output = "";

    const lowerCmd = trimmed.toLowerCase();

    if (lowerCmd === "help") {
      output = `Available commands:
  help       - Show this message
  whoami     - Display user information
  theme <t>  - Change theme (light, dark, hacker)
  matrix     - Enter the matrix
  clear      - Clear terminal
  snake      - Play Snake
  dino       - Play Chrome Dino
  music      - Play Lofi Music
  cv         - Download Curriculum Vitae`;
    } else if (lowerCmd === "whoami") {
      output = "Cao Minh Quang\nFull-Stack Engineer\nBackend & System Enthusiast\nBuilding Presist";
    } else if (lowerCmd === "snake") {
      output = "Initializing Snake protocol... Opening in external container.";
      setTimeout(() => window.open("https://playsnake.org/", "_blank"), 1000);
    } else if (lowerCmd === "dino") {
      output = "Network disconnect simulated. Launching T-Rex runner...";
      setTimeout(() => window.open("https://chromedino.com/", "_blank"), 1000);
    } else if (lowerCmd === "music") {
      if (isMusicPlaying) {
        setIsMusicPlaying(false);
        output = "Stopping Lofi radio...";
      } else {
        setIsMusicPlaying(true);
        output = "Playing Lofi radio in the background... (Type 'music' again to stop)";
      }
    } else if (lowerCmd === "cv") {
      output = "Extracting Curriculum Vitae... Downloading.";
      setTimeout(() => {
        const a = document.createElement('a');
        a.href = "/CaoMinhQuangCV.pdf";
        a.download = "CaoMinhQuangCV.pdf";
        a.target = "_blank";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }, 500);
    } else if (lowerCmd === "clear") {
      setLogs([{ ...INITIAL_LOG, id: Date.now().toString() }]);
      setInput("");
      return;
    } else if (lowerCmd.startsWith("theme ")) {
      const theme = lowerCmd.split(" ")[1];
      if (theme === "light") {
        document.documentElement.classList.remove("dark", "hacker");
        document.documentElement.classList.add("light");
        output = "Theme changed to Light.";
      } else if (theme === "dark") {
        document.documentElement.classList.remove("light", "hacker");
        document.documentElement.classList.add("dark");
        output = "Theme changed to Dark.";
      } else if (theme === "hacker") {
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add("hacker");
        output = "Theme changed to Hacker. Welcome to the underground.";
      } else {
        output = `Unknown theme: ${theme}. Available: light, dark, hacker.`;
      }
    } else if (lowerCmd === "advice") {
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add("hacker");
      output = "Wake up, my friend...\nThe Matrix has been controlling you, and continues to do so...\nBuddhist practice.";
    } else {
      output = `Command not found: ${trimmed}. Type "help" for a list of commands.`;
    }

    if (output) {
      newLogs.push({ id: (Date.now() + 1).toString(), type: "output", text: output });
    }

    setLogs(newLogs);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="w-full max-w-2xl bg-card/70 backdrop-blur-2xl border border-white/10 rounded-xl overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] font-mono text-sm"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-secondary/50 border-b border-white/10 relative">
              {isMusicPlaying && (
                <iframe
                  width="0"
                  height="0"
                  src="https://www.youtube.com/embed/l-vSSYEuO88?autoplay=1&list=RDl-vSSYEuO88&start=67"
                  frameBorder="0"
                  allow="autoplay"
                  className="absolute hidden"
                ></iframe>
              )}
              <div className="flex gap-2">
                <button onClick={onClose} className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors" />
                <button className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors" />
                <button className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors" />
              </div>
              <div className="text-xs font-medium text-muted-foreground">quang@kwaq-os: ~</div>
              <div className="w-12" /> {/* Spacer for centering */}
            </div>

            {/* Terminal Body */}
            <div
              className="p-4 h-[400px] overflow-y-auto flex flex-col gap-2 text-foreground"
              onClick={() => inputRef.current?.focus()}
            >
              {logs.map((log) => (
                <div key={log.id} className="flex flex-col">
                  {log.type === "input" ? (
                    <div className="flex items-start gap-2">
                      <span className="text-accent shrink-0">quang@kwaq-os:~$</span>
                      <span>{log.text}</span>
                    </div>
                  ) : (
                    <div className={`whitespace-pre-wrap ${log.type === "system" ? "text-muted-foreground" : "text-foreground"}`}>
                      {log.id === "init" ? log.text : <TypewriterText text={log.text} />}
                    </div>
                  )}
                </div>
              ))}

              <div className="flex items-center gap-2 mt-2">
                <span className="text-accent shrink-0">quang@kwaq-os:~$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent border-none outline-none text-foreground caret-foreground"
                  spellCheck={false}
                  autoComplete="off"
                />
              </div>
              <div ref={bottomRef} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
