import { useState } from "react";
import { Mail, Phone } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const Footer = () => {
  const [supportOpen, setSupportOpen] = useState<boolean>(false);
  const [termsOpen, setTermsOpen] = useState<boolean>(false);
  const [privacyOpen, setPrivacyOpen] = useState<boolean>(false);

  return (
    <footer id="support" className="border-t border-border py-12">
      {/* ================= SUPPORT MODAL ================= */}
      <Dialog open={supportOpen} onOpenChange={setSupportOpen}>
        <DialogContent className="sm:max-w-md bg-card border-border">
          <DialogHeader>
            <DialogTitle>Contact Support</DialogTitle>
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
              href="tel:+2347048667552"
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

      {/* ================= TERMS MODAL ================= */}
      <Dialog open={termsOpen} onOpenChange={setTermsOpen}>
        <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto bg-card border-border">
          <DialogHeader>
            <DialogTitle>Terms of Service</DialogTitle>
            <DialogDescription>Last updated: March 2026</DialogDescription>
          </DialogHeader>

          <div className="space-y-4 text-sm text-muted-foreground">
            <p>
              Welcome to <strong>Rise Bet</strong>. By accessing or using our
              platform, you agree to comply with and be bound by these Terms.
            </p>

            <h4 className="font-semibold text-foreground">1. Eligibility</h4>
            <p>
              You must be at least 18 years old and legally permitted to
              participate in online betting or virtual trading activities in
              your jurisdiction.
            </p>

            <h4 className="font-semibold text-foreground">
              2. Nature of Service
            </h4>
            <p>
              Rise Bet provides a virtual prediction and chart trading platform.
              Outcomes are system-generated simulations and do not represent
              real-world financial markets.
            </p>

            <h4 className="font-semibold text-foreground">3. Financial Risk</h4>
            <p>
              Participation involves financial risk. Users acknowledge that
              losses may occur and accept full responsibility for their
              decisions.
            </p>

            <h4 className="font-semibold text-foreground">
              4. Deposits & Withdrawals
            </h4>
            <p>
              All transactions are subject to verification. We reserve the right
              to delay or refuse withdrawals in cases of suspected fraud or
              abuse.
            </p>

            <h4 className="font-semibold text-foreground">
              5. Prohibited Activities
            </h4>
            <p>
              Users may not exploit technical errors, manipulate outcomes, use
              bots, create multiple accounts, or engage in fraudulent conduct.
            </p>

            <h4 className="font-semibold text-foreground">
              6. Account Suspension
            </h4>
            <p>
              Rise Bet reserves the right to suspend or terminate accounts
              violating these terms without prior notice.
            </p>

            <h4 className="font-semibold text-foreground">
              7. Changes to Terms
            </h4>
            <p>
              We may update these Terms at any time. Continued use of the
              platform constitutes acceptance of revised terms.
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* ================= PRIVACY MODAL ================= */}
      <Dialog open={privacyOpen} onOpenChange={setPrivacyOpen}>
        <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto bg-card border-border">
          <DialogHeader>
            <DialogTitle>Privacy Policy</DialogTitle>
            <DialogDescription>Last updated: March 2026</DialogDescription>
          </DialogHeader>

          <div className="space-y-4 text-sm text-muted-foreground">
            <p>
              Rise Bet is committed to protecting your privacy and personal
              data.
            </p>

            <h4 className="font-semibold text-foreground">
              1. Information Collected
            </h4>
            <p>
              We may collect your name, email, phone number, transaction
              details, and device information when you use our services.
            </p>

            <h4 className="font-semibold text-foreground">
              2. Use of Information
            </h4>
            <p>
              Information is used to operate the platform, process payments,
              improve services, prevent fraud, and comply with legal
              obligations.
            </p>

            <h4 className="font-semibold text-foreground">3. Data Security</h4>
            <p>
              We implement industry-standard safeguards. However, no digital
              transmission method is completely secure.
            </p>

            <h4 className="font-semibold text-foreground">4. Data Sharing</h4>
            <p>
              We do not sell personal data. Information may be shared with
              trusted partners for payment processing or regulatory compliance.
            </p>

            <h4 className="font-semibold text-foreground">5. Cookies</h4>
            <p>
              Cookies may be used to enhance user experience and analyze
              platform performance.
            </p>

            <h4 className="font-semibold text-foreground">6. User Rights</h4>
            <p>
              You may request access, correction, or deletion of your data by
              contacting our support team.
            </p>

            <h4 className="font-semibold text-foreground">7. Policy Updates</h4>
            <p>
              We may update this Privacy Policy periodically. Continued use of
              Rise Bet signifies acceptance of updates.
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* ================= FOOTER CONTENT ================= */}
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="font-display text-xl font-bold text-gradient mb-3">
              Rise Bet
            </div>
            <p className="text-sm text-muted-foreground">
              Online virtual betting platform. Predict, trade, and
              win.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-3">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a
                href="#features"
                className="hover:text-foreground transition-colors"
              >
                Features
              </a>
              <a
                href="#referral"
                className="hover:text-foreground transition-colors"
              >
                Referral Program
              </a>
              <a
                href="#winners"
                className="hover:text-foreground transition-colors"
              >
                Latest Winners
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-3">Legal</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <button
                onClick={() => setTermsOpen(true)}
                className="hover:text-foreground transition-colors text-left"
              >
                Terms of Service
              </button>
              <button
                onClick={() => setPrivacyOpen(true)}
                className="hover:text-foreground transition-colors text-left"
              >
                Privacy Policy
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-3">Support</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a
                href="mailto:official.risebet@gmail.com"
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                official.risebet@gmail.com
              </a>
              <button
                onClick={() => setSupportOpen(true)}
                className="flex items-center gap-2 hover:text-foreground transition-colors text-left"
              >
                <Phone className="w-4 h-4" />
                Contact Support
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
          Rise Bet Official © 2026. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
