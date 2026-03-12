import { createClient } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";

export default async function Home() {
  const client = createClient();
  const page = await client.getByUID("page", "home");

  return (
    <>
      {/* NAVBAR */}
      <nav style={{
        position: "fixed", top: 0, width: "100%", zIndex: 100,
        background: "rgba(10,10,20,0.85)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "0 48px", height: "64px", boxSizing: "border-box",
      }}>
        <span style={{ color: "#fff", fontWeight: 800, fontSize: "20px" }}>
          ⚡ VijayTest
        </span>
        <div style={{ display: "flex", gap: "32px" }}>
          {[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ].map((item) => (
            <a key={item.label} href={item.href} style={{
              color: "rgba(255,255,255,0.7)", textDecoration: "none",
              fontSize: "14px", fontWeight: 500,
            }}>{item.label}</a>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        minHeight: "100vh", display: "flex", alignItems: "center",
        justifyContent: "center", flexDirection: "column", textAlign: "center",
        background: "linear-gradient(135deg, #0a0a14 0%, #0f0f2e 50%, #0a0a14 100%)",
        padding: "80px 24px 0", position: "relative", overflow: "hidden",
      }}>
        {/* Glow */}
        <div style={{
          position: "absolute", width: "600px", height: "600px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(91,78,232,0.15) 0%, transparent 70%)",
          top: "50%", left: "50%", transform: "translate(-50%, -50%)", pointerEvents: "none",
        }} />

        {/* Badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          background: "rgba(91,78,232,0.15)", border: "1px solid rgba(91,78,232,0.4)",
          borderRadius: "100px", padding: "6px 16px", marginBottom: "32px",
        }}>
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#5B4EE8", display: "inline-block" }} />
          <span style={{ color: "#a78bfa", fontSize: "13px", fontWeight: 500 }}>
            Powered by Next.js & Prismic CMS
          </span>
        </div>

        {/* Heading from Prismic */}
        <h1 style={{
          fontSize: "clamp(40px, 7vw, 80px)", fontWeight: 900, color: "#fff",
          lineHeight: 1.1, marginBottom: "24px", letterSpacing: "-2px",
          fontFamily: "Arial, sans-serif",
        }}>
          {page.data.page_title as string}
        </h1>

        {/* Description from Prismic */}
        <div style={{
          fontSize: "clamp(16px, 2vw, 20px)", color: "rgba(255,255,255,0.6)",
          maxWidth: "600px", lineHeight: 1.7, marginBottom: "48px",
          fontFamily: "Arial, sans-serif",
        }}>
          <PrismicRichText field={page.data.description} />
        </div>

        {/* CTA Buttons */}
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
          <a href="/about" style={{
            background: "linear-gradient(135deg, #5B4EE8, #7C3AED)",
            color: "#fff", padding: "14px 32px", borderRadius: "8px",
            textDecoration: "none", fontWeight: 700, fontSize: "15px",
            boxShadow: "0 0 30px rgba(91,78,232,0.4)",
          }}>
            Explore Pages →
          </a>
          <a href="/contact" style={{
            background: "transparent", color: "#fff",
            padding: "14px 32px", borderRadius: "8px",
            textDecoration: "none", fontWeight: 600, fontSize: "15px",
            border: "1px solid rgba(255,255,255,0.2)",
          }}>
            Contact Me
          </a>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: "absolute", bottom: "32px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "12px", letterSpacing: "2px" }}>SCROLL</span>
          <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)" }} />
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section style={{
        background: "#0a0a14", padding: "100px 48px",
        display: "flex", flexDirection: "column", alignItems: "center",
      }}>
        <p style={{ color: "#5B4EE8", fontWeight: 700, fontSize: "13px", letterSpacing: "3px", marginBottom: "16px" }}>
          WHAT'S INSIDE
        </p>
        <h2 style={{
          color: "#fff", fontSize: "40px", fontWeight: 800,
          marginBottom: "64px", textAlign: "center", letterSpacing: "-1px",
        }}>
          Built with modern tools
        </h2>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "24px", maxWidth: "1000px", width: "100%",
        }}>
          {[
            { icon: "⚡", title: "Next.js 14", desc: "App Router, Server Components, and blazing fast performance out of the box." },
            { icon: "🎨", title: "Prismic CMS", desc: "Edit content visually without touching code. Publish instantly to your live site." },
            { icon: "🚀", title: "Vercel Deploy", desc: "Deployed globally on Vercel's edge network for lightning-fast load times." },
          ].map((card) => (
            <div key={card.title} style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "16px", padding: "32px",
            }}>
              <div style={{ fontSize: "32px", marginBottom: "16px" }}>{card.icon}</div>
              <h3 style={{ color: "#fff", fontSize: "18px", fontWeight: 700, marginBottom: "10px" }}>{card.title}</h3>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", lineHeight: 1.7 }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        background: "#07070f", borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "32px 48px", display: "flex", justifyContent: "space-between",
        alignItems: "center", flexWrap: "wrap", gap: "16px",
      }}>
        <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "14px" }}>
          © 2025 VijayTest. Built with Next.js & Prismic.
        </span>
        <div style={{ display: "flex", gap: "24px" }}>
          {[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ].map((item) => (
            <a key={item.label} href={item.href} style={{
              color: "rgba(255,255,255,0.3)", fontSize: "13px", textDecoration: "none",
            }}>{item.label}</a>
          ))}
        </div>
      </footer>
    </>
  );
}