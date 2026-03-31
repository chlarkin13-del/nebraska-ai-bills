import { NavLink } from "./NavLink";
import Link from "next/link";

// ─── Nav ────────────────────────────────────────────────────────────────────

function TopNav() {
  return (
    <header className="sticky top-0 z-50 bg-[#FDFBF6]/95 backdrop-blur-sm border-b border-[#3B7CB8]/15 shadow-sm">
      <div className="max-w-[760px] mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
        {/* Logo + Title */}
        <div className="flex items-center gap-3 min-w-0">
          <span
            className="font-semibold text-[15px] truncate"
            style={{ fontFamily: "var(--font-source-serif)", color: "#2A2A28" }}
          >
            Nebraska AI Safety
          </span>
        </div>
        {/* Nav links */}
        <nav className="flex items-center gap-1 sm:gap-3 flex-shrink-0">
          <NavLink href="#bills">The Bills</NavLink>
          <NavLink href="#already-law">Already Law</NavLink>
          <NavLink href="#act">Take Action</NavLink>
        </nav>
      </div>
    </header>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      className="relative overflow-hidden py-20 sm:py-28 px-4 sm:px-6"
      style={{
        background:
          "linear-gradient(160deg, #3B7CB8 0%, #5B9FD8 25%, #A8CCEA 55%, #F5EDD6 100%)",
      }}
    >
      {/* Sun glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 600px 400px at 50% 60%, rgba(212,168,67,0.22) 0%, transparent 70%)",
        }}
      />
      <div className="relative max-w-[760px] mx-auto text-center">
        {/* Eyebrow */}
        <p
          className="fade-up text-xs font-semibold tracking-[0.18em] uppercase mb-5"
          style={{ color: "rgba(255,255,255,0.85)", fontFamily: "var(--font-dm-sans)" }}
        >
          2026 Legislative Session
        </p>
        {/* Headline */}
        <h1
          className="fade-up-delay-1 text-4xl sm:text-5xl lg:text-[3.25rem] font-bold leading-tight mb-6 text-white"
          style={{ fontFamily: "var(--font-source-serif)" }}
        >
          Nebraska Is Taking Action on AI Safety
        </h1>
        {/* Subhead */}
        <p
          className="fade-up-delay-2 text-base sm:text-lg leading-relaxed mb-10 max-w-[600px] mx-auto"
          style={{ color: "rgba(255,255,255,0.92)" }}
        >
          Right now, AI chatbots can talk to your kids with no rules and no
          guardrails. Nebraska lawmakers are working to change that — we
          can&apos;t afford to wait for Congress.
        </p>
        {/* CTA */}
        <a
          href="#bills"
          className="fade-up-delay-3 inline-block font-semibold px-7 py-3.5 rounded-full text-[15px] transition-transform hover:scale-105 active:scale-95"
          style={{
            backgroundColor: "#D4A843",
            color: "#2A2A28",
            boxShadow: "0 4px 20px rgba(212,168,67,0.45)",
          }}
        >
          See What&apos;s Happening ↓
        </a>
      </div>
    </section>
  );
}

// ─── Wheat divider stripe ─────────────────────────────────────────────────────

function WheatDivider() {
  return (
    <div
      className="h-2.5"
      style={{
        background: "linear-gradient(90deg, #D4A843 0%, #F5EDD6 50%, #D4A843 100%)",
      }}
    />
  );
}

// ─── Section label helper ────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-[10.5px] font-semibold tracking-[0.2em] uppercase mb-3"
      style={{ color: "#3B7CB8", fontFamily: "var(--font-dm-sans)" }}
    >
      {children}
    </p>
  );
}

// ─── Why This Matters ────────────────────────────────────────────────────────

const problems = [
  {
    icon: "🎭",
    title: "No disclosure required",
    body: "A chatbot can pretend to be a friend, a boyfriend, or a therapist — without ever telling your child it's AI.",
  },
  {
    icon: "🚫",
    title: "No content protections",
    body: "Nothing stops a chatbot from sending sexually explicit content to a child who's using it.",
  },
  {
    icon: "⚠️",
    title: "No safety protocols",
    body: "Some chatbots have encouraged kids to harm themselves, with no law requiring crisis referrals.",
  },
  {
    icon: "📊",
    title: "No data limits",
    body: "Companies collect massive amounts of information from these conversations with children — with no restrictions.",
  },
];

function WhyItMatters() {
  return (
    <section className="pt-16 sm:pt-20 pb-10 sm:pb-12 px-4 sm:px-6" style={{ backgroundColor: "#FDFBF6" }}>
      <div className="max-w-[760px] mx-auto">
        <SectionLabel>Why This Matters</SectionLabel>
        <h2
          className="text-2xl sm:text-3xl font-bold mb-5"
          style={{ fontFamily: "var(--font-source-serif)", color: "#2A2A28" }}
        >
          Why This Matters for Nebraska Families
        </h2>
        <p className="text-base leading-relaxed mb-4" style={{ color: "#3a3a38" }}>
          AI chatbots like ChatGPT, Grok, and Character.AI are already being
          used by millions of kids. These tools can sound like a real person —
          and many children don&apos;t realize they&apos;re talking to a machine.
        </p>
        <p className="text-base leading-relaxed mb-8" style={{ color: "#3a3a38" }}>
          Right now, there are almost no rules about how these tools interact
          with minors. That means:
        </p>

        {/* 2×2 problem grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {problems.map(({ icon, title, body }) => (
            <div
              key={title}
              className="rounded-xl p-5 border transition-shadow hover:shadow-md"
              style={{
                backgroundColor: "#fff",
                borderColor: "#E5DDD0",
              }}
            >
              <div className="text-2xl mb-2">{icon}</div>
              <h3
                className="font-semibold text-[15px] mb-1.5"
                style={{ color: "#2A2A28" }}
              >
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#5a5a58" }}>
                {body}
              </p>
            </div>
          ))}
        </div>

        {/* Blue callout */}
        <div
          className="rounded-xl p-5 sm:p-6"
          style={{
            backgroundColor: "#EBF4FF",
            borderLeft: "4px solid #3B7CB8",
          }}
        >
          <p
            className="text-sm sm:text-base leading-relaxed font-medium"
            style={{ color: "#2C5F8A" }}
          >
            Nebraska passed some of the strongest social media protections for
            kids in the country last year. Now lawmakers are doing the same for
            AI.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Bills ────────────────────────────────────────────────────────────────────

interface BillCardProps {
  icon: string;
  billNumber: string;
  billName: string;
  sponsor: string;
  description: string;
  provisions: string[];
  statusDot: "green" | "gold";
  statusText: string;
  priority?: boolean;
}

function BillCard({
  icon,
  billNumber,
  billName,
  sponsor,
  description,
  provisions,
  statusDot,
  statusText,
  priority = false,
}: BillCardProps) {
  return (
    <div
      className="relative rounded-2xl overflow-hidden transition-shadow hover:shadow-lg"
      style={{
        backgroundColor: "#fff",
        border: priority ? "2px solid #D4A843" : "1.5px solid #E5DDD0",
        boxShadow: priority
          ? "0 4px 24px rgba(212,168,67,0.12)"
          : "0 2px 12px rgba(0,0,0,0.05)",
      }}
    >
      {/* Priority ribbon */}
      {priority && (
        <div
          className="absolute top-0 right-0 px-3 py-1 text-[10.5px] font-bold tracking-widest uppercase rounded-bl-xl"
          style={{ backgroundColor: "#D4A843", color: "#2A2A28" }}
        >
          Priority Bill
        </div>
      )}

      <div className="p-6 sm:p-7">
        {/* Icon + bill number */}
        <div className="flex items-start gap-3 mb-4">
          <span className="text-3xl leading-none mt-0.5">{icon}</span>
          <div>
            <p
              className="text-xl font-bold leading-none"
              style={{
                fontFamily: "var(--font-source-serif)",
                color: "#2A2A28",
              }}
            >
              {billNumber}
            </p>
            <p
              className="text-[13px] font-semibold mt-1"
              style={{ color: "#3B7CB8" }}
            >
              {billName}
            </p>
          </div>
        </div>

        {/* Sponsor */}
        <p className="text-xs font-medium mb-3" style={{ color: "#888" }}>
          Introduced by {sponsor}
        </p>

        {/* Description */}
        <p
          className="text-sm sm:text-[15px] leading-relaxed mb-5"
          style={{ color: "#3a3a38" }}
        >
          {description}
        </p>

        {/* Provisions */}
        <ul className="space-y-2 mb-6">
          {provisions.map((p) => (
            <li key={p} className="flex items-start gap-2.5 text-sm" style={{ color: "#3a3a38" }}>
              <span
                className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-white text-[10px] font-bold"
                style={{ backgroundColor: "#4A7C59" }}
              >
                ✓
              </span>
              {p}
            </li>
          ))}
        </ul>

        {/* Status bar */}
        <div
          className="flex items-start gap-2.5 rounded-lg px-4 py-3"
          style={{ backgroundColor: statusDot === "green" ? "#F0F7F3" : "#FDF8EE" }}
        >
          <span
            className="mt-1 w-2.5 h-2.5 rounded-full flex-shrink-0"
            style={{
              backgroundColor: statusDot === "green" ? "#4A7C59" : "#D4A843",
            }}
          />
          <p
            className="text-xs leading-relaxed"
            style={{ color: statusDot === "green" ? "#2d5c3e" : "#7a5c12" }}
          >
            {statusText}
          </p>
        </div>
      </div>
    </div>
  );
}

function Bills() {
  return (
    <section
      id="bills"
      className="py-16 sm:py-20 px-4 sm:px-6 pb-10 sm:pb-12"
      style={{ backgroundColor: "#F7F2EC" }}
    >
      <div className="max-w-[760px] mx-auto">
        <SectionLabel>What&apos;s on the Table</SectionLabel>
        <h2
          className="text-2xl sm:text-3xl font-bold mb-4"
          style={{ fontFamily: "var(--font-source-serif)", color: "#2A2A28" }}
        >
          What Nebraska Lawmakers Are Doing in 2026
        </h2>
        <p className="text-base leading-relaxed mb-5" style={{ color: "#3a3a38" }}>
          Several AI safety bills were introduced in the Nebraska Legislature
          this year. Here&apos;s what you need to know.
        </p>

        <div className="space-y-6">
          <BillCard
            icon="🔒"
            billNumber="LB 1083"
            billName="The AI Transparency & Safety Act"
            sponsor="Sen. Tanya Storer (R)"
            description="LB 1083 would require the largest AI companies to be honest with Nebraskans about the risks of their technology. It doesn't tell companies how to build AI — it just says: tell the public what you're doing to keep people safe."
            provisions={[
              "Publish safety plans explaining how they protect children and the public from serious harm",
              "Report safety incidents to the Nebraska Attorney General when something goes wrong",
              "Protect whistleblowers — employees who raise safety concerns can't be punished",
            ]}
            statusDot="green"
            statusText="Priority bill for 2026. Heard by committee Feb. 9 with strong support from parents' groups, child safety organizations, and the Attorney General's office. No opposition testimony."
            priority
          />

          <BillCard
            icon="💬"
            billNumber="LB 1185"
            billName="The Conversational AI Safety Act"
            sponsor="Sen. Eliot Bostar (D)"
            description="This bill focuses specifically on AI chatbots — the tools your kids might be talking to right now."
            provisions={[
              "Tell users they're talking to AI, not a real person — with reminders during long conversations",
              "Block sexually explicit content for users under 18",
              "Prevent chatbots from pretending to be human or building romantic relationships with kids",
              "Refer users to crisis services if they talk about suicide or self-harm",
            ]}
            statusDot="green"
            statusText="Passed first-round vote 35-0. Now combined with an agricultural data privacy bill (LB 585) and moving to the next round of debate."
          />

          <BillCard
            icon="🤖"
            billNumber="LB 939"
            billName="The Saving Human Connection Act"
            sponsor="Sen. Dave Murman (R)"
            description="This bill goes further than LB 1185 by saying chatbots with human-like features should not be available to minors at all. Companies would need to:"
            provisions={[
              "Keep human-like chatbot features away from anyone under 18 through age verification",
              "Offer a default version of their platform without human-like features for all users",
              "Disclose every 30 minutes that the user is talking to AI, not a person",
              "Prevent chatbots from encouraging emotional dependence",
            ]}
            statusDot="gold"
            statusText="Heard by committee on Feb. 24. May be folded into other AI legislation this session."
          />
        </div>
      </div>
    </section>
  );
}

// ─── Already Law ─────────────────────────────────────────────────────────────

const laws = [
  {
    title: "AI-Generated Child Abuse Material (LB 383)",
    body: "It's now a felony in Nebraska to create AI-generated child sexual abuse images. Takes full effect July 2026.",
  },
  {
    title: "Fake Intimate Images (LB 371)",
    body: "If someone uses AI to create explicit images of you without your consent, you can sue them.",
  },
  {
    title: "AI in Healthcare (LB 77)",
    body: "Insurance companies in Nebraska can't use AI as the sole reason to deny your healthcare claim. In effect since January 2026.",
  },
];

function AlreadyLaw() {
  return (
    <section
      id="already-law"
      className="pt-10 sm:pt-12 pb-10 sm:pb-12 px-4 sm:px-6"
      style={{ backgroundColor: "#FDFBF6" }}
    >
      <div className="max-w-[760px] mx-auto">
        <SectionLabel>Already Leading</SectionLabel>
        <h2
          className="text-2xl sm:text-3xl font-bold mb-4"
          style={{ fontFamily: "var(--font-source-serif)", color: "#2A2A28" }}
        >
          Nebraska Is Already Leading
        </h2>
        <p className="text-base leading-relaxed mb-10" style={{ color: "#3a3a38" }}>
          Nebraska didn&apos;t wait around on social media safety, and lawmakers
          aren&apos;t waiting on AI either. Here&apos;s what&apos;s already law:
        </p>

        <div className="space-y-4">
          {laws.map(({ title, body }) => (
            <div
              key={title}
              className="flex items-start gap-4 rounded-xl p-5 border transition-shadow hover:shadow-md"
              style={{ backgroundColor: "#fff", borderColor: "#D6EDE0" }}
            >
              {/* Green circle checkmark */}
              <div
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5"
                style={{ backgroundColor: "#4A7C59" }}
              >
                ✓
              </div>
              <div>
                <h3
                  className="font-semibold text-[15px] mb-1"
                  style={{ color: "#2A2A28" }}
                >
                  {title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#5a5a58" }}>
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Congress / Why States Matter ────────────────────────────────────────────

function CongressSection() {
  return (
    <section
      className="pt-10 sm:pt-12 pb-10 sm:pb-12 px-4 sm:px-6"
      style={{ backgroundColor: "#2C5F8A" }}
    >
      <div className="max-w-[760px] mx-auto">
        <p
          className="text-[10.5px] font-semibold tracking-[0.2em] uppercase mb-3"
          style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-dm-sans)" }}
        >
          Why States Matter
        </p>
        <h2
          className="text-2xl sm:text-3xl font-bold mb-6 text-white"
          style={{ fontFamily: "var(--font-source-serif)" }}
        >
          Why Can&apos;t Congress Just Handle This?
        </h2>
        <p
          className="text-base leading-relaxed mb-5"
          style={{ color: "rgba(255,255,255,0.88)" }}
        >
          Congress has been talking about AI regulation for years — but
          hasn&apos;t passed a single comprehensive law. In fact, some members
          of Congress have proposed banning states from regulating AI for an
          entire decade.
        </p>
        <p
          className="text-base leading-relaxed mb-8"
          style={{ color: "rgba(255,255,255,0.88)" }}
        >
          Nebraska&apos;s Governor and 16 other Republican governors publicly
          opposed that proposal, saying states need the freedom to protect their
          own citizens.
        </p>

        {/* Gold-bordered callout */}
        <div
          className="rounded-xl p-5 sm:p-6"
          style={{
            border: "2px solid #D4A843",
            backgroundColor: "rgba(212,168,67,0.1)",
          }}
        >
          <p
            className="text-base sm:text-lg font-semibold text-center leading-relaxed"
            style={{
              color: "#F5EDD6",
              fontFamily: "var(--font-source-serif)",
              fontStyle: "italic",
            }}
          >
            &ldquo;If Nebraska doesn&apos;t act, nobody will. And our kids can&apos;t
            wait.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── CTA ─────────────────────────────────────────────────────────────────────

function CTA() {
  return (
    <section
      id="act"
      className="pt-10 sm:pt-12 pb-16 sm:pb-24 px-4 sm:px-6 text-center"
      style={{
        background: "linear-gradient(160deg, #F5EDD6 0%, #FDFBF6 100%)",
      }}
    >
      <div className="max-w-[600px] mx-auto">
        <h2
          className="text-2xl sm:text-3xl font-bold mb-4"
          style={{ fontFamily: "var(--font-source-serif)", color: "#2A2A28" }}
        >
          Stay Informed
        </h2>
        <p className="text-base leading-relaxed mb-8" style={{ color: "#3a3a38" }}>
          Stay informed about AI legislation in Nebraska.
        </p>

        <Link
          href="https://nebraskalegislature.gov/bills/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-semibold px-7 py-3.5 rounded-full text-[15px] mb-8 transition-transform hover:scale-105 active:scale-95"
          style={{
            backgroundColor: "#3B7CB8",
            color: "#fff",
            boxShadow: "0 4px 20px rgba(59,124,184,0.35)",
          }}
        >
          Track Bills at the Legislature →
        </Link>

        <p className="text-sm leading-relaxed" style={{ color: "#6a6a68" }}>
          Share this page. The more Nebraska families who understand what&apos;s
          at stake, the more pressure lawmakers feel to act.
        </p>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer
      className="py-8 px-4 sm:px-6 border-t text-center space-y-1.5"
      style={{ borderColor: "#E5DDD0", backgroundColor: "#F7F2EC" }}
    >
      <p className="text-xs leading-relaxed" style={{ color: "#888" }}>
        This page is provided for informational purposes. Bill summaries are
        simplified for general audiences. For full bill text, visit{" "}
        <a
          href="https://nebraskalegislature.gov"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:opacity-75 transition-opacity"
          style={{ color: "#3B7CB8" }}
        >
          nebraskalegislature.gov
        </a>
        .
      </p>
      <p className="text-xs" style={{ color: "#aaa" }}>
        Last updated March 2026 · The 2026 session runs through April 17
      </p>
    </footer>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <TopNav />
      <main>
        <Hero />
        <WheatDivider />
        <WhyItMatters />
        <Bills />
        <AlreadyLaw />
        <CongressSection />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
