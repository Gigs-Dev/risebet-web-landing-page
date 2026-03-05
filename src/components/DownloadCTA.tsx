import { Download, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const speckles = Array.from({ length: 200 }, (_, i) => ({
  id: i,
  size: Math.random() * 4 + 1.5,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 6 + 4,
  delay: Math.random() * 4,
  opacity: Math.random() * 0.5 + 0.1,
}));

const DownloadCTA = () => {
  return (
    <section className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl gradient-accent p-10 sm:p-16 text-center overflow-hidden"
        >
          {/* Radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(152_69%_45%/0.15),transparent_90%)]" />

          {/* Speckles */}
          {speckles.map((s) => (
            <motion.div
              key={s.id}
              className="absolute rounded-full bg-white pointer-events-none"
              style={{
                width: s.size,
                height: s.size,
                left: `${s.x}%`,
                top: `${s.y}%`,
                opacity: s.opacity,
              }}
              animate={{
                y: [0, -12, 0],
                opacity: [s.opacity, s.opacity * 2, s.opacity],
                scale: [1, 1.4, 1],
              }}
              transition={{
                duration: s.duration,
                delay: s.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Soft glowing orbs */}
          <div className="absolute top-6 right-12 w-24 h-24 rounded-full bg-white/5 blur-2xl" />
          <div className="absolute bottom-8 left-16 w-32 h-32 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-white/5 blur-xl" />

          {/* Content */}
          <div className="relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-background/10 backdrop-blur flex items-center justify-center mx-auto mb-6">
              <Smartphone className="w-8 h-8" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Ready to Start Winning?
            </h2>
            <p className="text-foreground/80 max-w-md mx-auto mb-8">
              Download the Rise Bet app now and get started with as little as ₦500.
              Your first trade is just seconds away.
            </p>
            <Button size="lg" className="bg-[#ffffff] text-primary hover:bg-background/300 font-display font-semibold h-14 px-10 gap-2 text-base">
              <Download className="w-5 h-5" />
              Download App Now
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadCTA;