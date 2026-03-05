import { useState, useEffect } from "react";
import { Trophy, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAMES = [
  "Chidi A.",
  "Blessing O.",
  "Emeka N.",
  "Fatima B.",
  "David K.",
  "Amina S.",
  "Tunde M.",
  "Grace E.",
  "Yusuf D.",
  "Ngozi P.",
  "Kemi L.",
  "Ibrahim T.",
  "Chisom W.",
  "Adeola F.",
  "Musa R.",
  "Precious C.",
  "Segun B.",
  "Aisha J.",
  "Obinna Q.",
  "Halima V.",
  "Femi Z.",
  "Zainab H.",
  "Dele X.",
  "Miriam G.",
];

const AMOUNTS = [
  "₦5,200",
  "₦8,750",
  "₦12,500",
  "₦15,000",
  "₦18,300",
  "₦22,750",
  "₦27,000",
  "₦33,000",
  "₦45,000",
  "₦52,500",
  "₦61,000",
  "₦78,000",
  "₦95,000",
  "₦104,500",
  "₦120,000",
];

const TIMES = [
  "2 mins ago",
  "5 mins ago",
  "8 mins ago",
  "12 mins ago",
  "15 mins ago",
  "18 mins ago",
];

function seededRandom(seed) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return (s >>> 0) / 0xffffffff;
  };
}

function generateWinners(seed) {
  const rand = seededRandom(seed);
  const usedNames = new Set();
  const winners = [];

  while (winners.length < 6) {
    const name = NAMES[Math.floor(rand() * NAMES.length)];
    if (usedNames.has(name)) continue;
    usedNames.add(name);
    winners.push({
      name,
      amount: AMOUNTS[Math.floor(rand() * AMOUNTS.length)],
      game: "Chart Option",
      time: TIMES[winners.length],
    });
  }

  return winners;
}

const WinnersSection = () => {
  const [winners, setWinners] = useState(() => generateWinners(Date.now()));
  const [cycleKey, setCycleKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWinners(generateWinners(Date.now()));
      setCycleKey((k) => k + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="winners" className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display font-semibold text-sm uppercase tracking-widest">
            Real Wins
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3">
            Latest <span className="text-gradient">Winners</span>
          </h2>
          <p className="text-muted-foreground mt-3">
            People are winning every minute. You could be next.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <AnimatePresence mode="popLayout">
            {winners.map((w, i) => (
              <motion.div
                key={`${cycleKey}-${i}`}
                initial={{ opacity: 0, y: 16, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -16, scale: 0.95 }}
                transition={{ delay: i * 0.08, duration: 0.35 }}
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 shadow-card"
              >
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center shrink-0">
                  <Trophy className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-display font-semibold text-sm blur-sm">
                    {w.name}
                  </div>
                  <div className="text-xs text-muted-foreground">{w.game}</div>
                </div>
                <div className="font-display font-bold text-primary flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  {w.amount}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default WinnersSection;
