export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          DevOps Finance Tool
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
          Calculate the Real Cost of{" "}
          <span className="text-[#58a6ff]">Cloud Outages</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Instantly quantify downtime losses, SLA breach penalties, and revenue impact across AWS, Google Cloud, and Azure — so you can justify resilience investments with hard numbers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Free Trial — $39/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn More
          </a>
        </div>
        <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            ["$2.3M", "Avg. annual outage cost"],
            ["99.9%", "SLA breach detection"],
            ["3 clouds", "AWS · GCP · Azure"]
          ].map(([stat, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <div className="text-[#58a6ff] font-bold text-xl">{stat}</div>
              <div className="text-[#8b949e] text-xs mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features strip */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            ["Real-Time Monitoring", "Webhook-driven detection of AWS, GCP, and Azure status changes the moment they happen."],
            ["Cost Engine", "Input your hourly revenue, team size, and SLA tiers — get instant financial impact calculations."],
            ["Audit-Ready Reports", "Export PDF/CSV reports for finance reviews, insurance claims, and vendor negotiations."]
          ].map(([title, desc]) => (
            <div key={title as string} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <h3 className="text-white font-semibold mb-2">{title}</h3>
              <p className="text-[#8b949e] text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-xl p-8">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$39</div>
          <div className="text-[#8b949e] text-sm mb-6">/month · cancel anytime</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited outage tracking",
              "AWS, GCP & Azure monitoring",
              "Custom cost metrics & SLA tiers",
              "Webhook integrations (PagerDuty, Slack)",
              "PDF/CSV export reports",
              "Priority email support"
            ].map(f => (
              <li key={f} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>{f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "How does outage detection work?",
              "We poll official AWS, GCP, and Azure status pages every 60 seconds and accept webhooks from your monitoring tools. When a service degrades, your cost meter starts immediately."
            ],
            [
              "Can I customize the cost calculation?",
              "Yes. You define hourly revenue, affected team headcount, SLA penalty tiers, and any fixed costs (e.g., on-call fees). The engine combines these into a real-time running total."
            ],
            [
              "Is there a free trial?",
              "Every new account gets a 14-day full-access trial — no credit card required. After that, it's $39/month with no usage limits."
            ]
          ].map(([q, a]) => (
            <div key={q as string} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} OutageCost. All rights reserved.
      </footer>
    </main>
  );
}
