import {
  Download,
  TrendingUp,
  Shield,
  Users,
  PhoneCall,
  Mail,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroBg from "../assets/hero-bg.jpg";
import appMockup from "../assets/app-mockup.png";
import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const HeroSection = () => {
  const [supportOpen, setSupportOpen] = useState<boolean>(false);

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <Dialog open={supportOpen} onOpenChange={setSupportOpen}>
        <DialogContent className="sm:max-w-md bg-card border-border">
          <DialogHeader>
            <DialogTitle className="font-display text-xl">
              Contact Support
            </DialogTitle>
            <DialogDescription>
              Reach out to us anytime — we're here to help.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 py-4">
            <a
              href="mailto:official.risebet@gmail.com"
              className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
            >
              <Mail className="w-5 h-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-sm font-medium">
                  official.risebet@gmail.com
                </p>
              </div>
            </a>
            <a
              href="tel:+2348000000000"
              className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
            >
              <Phone className="w-5 h-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Phone</p>
                <p className="text-sm font-medium">+234 704 866 7552</p>
              </div>
            </a>
          </div>
        </DialogContent>
      </Dialog>

      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 gradient-hero" />

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="font-display text-[2.5rem] sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 pl-4">
            Predict. Trade. <br />
            <span className="text-gradient">Cash Out Big.</span>
          </h1>

          <p className="text-[1rem] text-muted-foreground max-w-lg mb-8 pl-5">
            Experience the thrill of virtual chart trading. Buy UP or Sell DOWN
            on live charts, win up to 1.5x your stake in seconds, and withdraw
            instantly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 pl-5">
            <Button
              size="sm"
              className="gradient-primary font-display font-semibold gap-2 text-base h-14 px-8 shadow-glow"
            >
              <Download className="8 h-5" />
              Download APK
            </Button>
            <Button
              size="sm"
              variant="secondary"
              className="font-display font-semibold text-base h-14 px-8 border-border hover:bg-muted"
              onClick={() => setSupportOpen(true)}
            >
              <PhoneCall className="w-5 h-5" />
              Contact Support
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-6 pl-5 items-center text-center justify-center">
            {[
              { icon: Users, label: "1K+", sub: "Active players" },
              { icon: TrendingUp, label: "₦5M+", sub: "Won daily" },
              { icon: Shield, label: "100%", sub: "Transactions" },
            ].map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <stat.icon className="w-6 h-6 text-primary mb-1 mx-auto sm:mx-0" />
                <div className="font-display font-bold text-lg">
                  {stat.label}
                </div>
                <div className="text-xs text-muted-foreground">{stat.sub}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="hidden lg:flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-8 rounded-full bg-primary/10 blur-3xl" />
            <img
              src={appMockup}
              alt="Rise Bet mobile app showing live chart trading"
              className="relative w-80 rounded-3xl shadow-card"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
