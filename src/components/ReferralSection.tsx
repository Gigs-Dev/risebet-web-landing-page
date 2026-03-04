import { Gift, Share2, UserPlus, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const steps = [
  { icon: Share2, num: "1", title: "Share Your Code", desc: "Send your unique referral code to friends" },
  { icon: UserPlus, num: "2", title: "Friend Signs Up", desc: "They create an account using your code" },
  { icon: DollarSign, num: "3", title: "Earn ₦500", desc: "Get rewarded when they make their first deposit" },
];

const ReferralSection = () => {
  return (
    <section id="referral" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Gift className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            Refer & <span className="text-gradient">Earn</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">
            Invite friends and earn <span className="text-primary font-semibold">₦500</span> for each successful referral. No limits.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-12">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center mx-auto mb-4 relative">
                <s.icon className="w-6 h-6 text-muted-foreground" />
                <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full gradient-primary text-xs font-bold flex items-center justify-center text-primary-foreground">
                  {s.num}
                </span>
              </div>
              <h3 className="font-display font-semibold mb-1">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="gradient-primary font-display font-semibold h-14 px-10 shadow-glow">
            Download & Start Referring Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ReferralSection;
