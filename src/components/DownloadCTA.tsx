import { Download, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(152_69%_45%/0.15),transparent_60%)]" />
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
            <Button size="lg" className="bg-popover text-foreground hover:bg-background/90 font-display font-semibold h-14 px-10 gap-2 text-base">
              <Download className="w-5 h-5" />
              Download APK Now
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadCTA;
