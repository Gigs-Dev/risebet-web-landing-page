import {
  TrendingUp,
  Wallet,
  Users,
  Shield,
  Zap,
  Headphones,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: TrendingUp,
    title: "Live Chart Trading",
    desc: "Predict market movements on charts. Buy UP or Sell DOWN and win up to 1.5x in 15 seconds.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Wallet,
    title: "Instant Deposits & Withdrawals",
    desc: "Fund your wallet instantly and withdraw winnings directly to your bank account—no delays.",
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
  {
    icon: Users,
    title: "Referral Rewards",
    desc: "Earn ₦500 for every friend who signs up and makes their first deposit. Unlimited referrals.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Shield,
    title: "Secure Transactions",
    desc: "Bank-grade encryption protects every transaction. Your funds and data are always safe.",
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
  {
    icon: Zap,
    title: "Multiple Games",
    desc: "From chart options to crash games—explore a growing library of exciting virtual betting games.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Get help anytime via email, or phone. Our support team is always ready.",
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
];

function generateCardSpeckles(seed, count = 14) {
  let s = seed * 9301 + 49297;
  const rng = () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return (s >>> 0) / 0xffffffff;
  };
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    size: rng() * 3 + 1.5,
    x: rng() * 100,
    y: rng() * 100,
    duration: rng() * 5 + 4,
    delay: rng() * 3,
    opacity: rng() * 0.35 + 0.08,
  }));
}

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display font-semibold text-[1.1rem] uppercase tracking-widest">
            Why RiseBet
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3">
            Everything You Need to <span className="text-gradient">Win</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const speckles = generateCardSpeckles(i + 1);
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative rounded-xl border border-border bg-card p-6 hover:border-primary/30 transition-colors shadow-card group overflow-hidden"
              >
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
                      y: [0, -8, 0],
                      opacity: [s.opacity, s.opacity * 2.2, s.opacity],
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      duration: s.duration,
                      delay: s.delay,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}

                {/* Content */}
                <div className="relative z-10">
                  <div
                    className={`w-12 h-12 rounded-lg ${f.bg} flex items-center justify-center mb-4`}
                  >
                    <f.icon className={`w-6 h-6 ${f.color}`} />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">
                    {f.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
