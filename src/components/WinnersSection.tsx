import { Trophy, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const winners = [
  { name: "Chidi A.", amount: "₦45,000", game: "Chart Option", time: "2 mins ago" },
  { name: "Blessing O.", amount: "₦12,500", game: "Chart Option", time: "5 mins ago" },
  { name: "Emeka N.", amount: "₦78,000", game: "Chart Option", time: "8 mins ago" },
  { name: "Fatima B.", amount: "₦5,200", game: "Chart Option", time: "12 mins ago" },
  { name: "David K.", amount: "₦33,000", game: "Chart Option", time: "15 mins ago" },
  { name: "Amina S.", amount: "₦22,750", game: "Chart Option", time: "18 mins ago" },
];

const WinnersSection = () => {
  return (
    <section id="winners" className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display font-semibold text-sm uppercase tracking-widest">Real Wins</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3">
            Latest <span className="text-gradient">Winners</span>
          </h2>
          <p className="text-muted-foreground mt-3">People are winning every minute. You could be next.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {winners.map((w, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 shadow-card"
            >
              <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center shrink-0">
                <Trophy className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-display font-semibold text-sm">{w.name}</div>
                <div className="text-xs text-muted-foreground">{w.game}</div>
                {/* <div className="text-xs text-muted-foreground">{w.game} · {w.time}</div> */}
              </div>
              <div className="font-display font-bold text-primary flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                {w.amount}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WinnersSection;
