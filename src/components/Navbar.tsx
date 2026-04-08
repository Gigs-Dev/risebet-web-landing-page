import { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

import logo from "../assets/icon.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = ["Features", "Referral", "Winners", "Support"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Rise Bet logo"
            className="w-12 h-12 object-contain rounded-full"
          />
          <span className="font-display text-[1.1rem] font-bold text-gradient">
            Rise Bet
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button
            className="gradient-primary font-display font-semibold gap-2"
            asChild
          >
            <a href="https://github.com/UdumiziSolomon/rising-sun-virtual-games/releases/download/risebet/application-86622a3b-2f21-43be-96bd-b53cd345683f.apk" download="RiseBet.apk">
              <Download className="w-4 h-4" />
              Download App
            </a>
          </Button>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-border/50 bg-background"
          >
            <div className="container py-4 flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  className="py-2 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {l}
                </a>
              ))}
              <Button className="gradient-primary font-display font-semibold gap-2 mt-2">
                <Download className="w-4 h-4" />
                Download App
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
