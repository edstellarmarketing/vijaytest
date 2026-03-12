import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";

type ServiceSectionProps = SliceComponentProps<Content.ServiceSectionSlice>;

export default function ServiceSection({ slice }: ServiceSectionProps) {
  return (
    <section style={{
      background: "#0a0a14",
      padding: "100px 48px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}>
      <p style={{ color: "#5B4EE8", fontWeight: 700, fontSize: "13px", letterSpacing: "3px", marginBottom: "16px" }}>
        OUR SERVICES
      </p>
      <h2 style={{ color: "#fff", fontSize: "40px", fontWeight: 800, marginBottom: "16px", textAlign: "center", letterSpacing: "-1px" }}>
        {slice.primary.section_title as string}
      </h2>
      <div style={{ color: "rgba(255,255,255,0.6)", marginBottom: "64px", textAlign: "center", maxWidth: "600px" }}>
        <PrismicRichText field={slice.primary.subtitle} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px", maxWidth: "1100px", width: "100%" }}>
        {slice.primary.service_items.map((item, index) => (
          <div key={index} style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "16px",
            padding: "32px",
            transition: "border-color 0.2s",
          }}>
            <div style={{ fontSize: "36px", marginBottom: "16px" }}>{item.icon as string}</div>
            <h3 style={{ color: "#fff", fontSize: "18px", fontWeight: 700, marginBottom: "10px" }}>
              {item.service_title as string}
            </h3>
            <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", lineHeight: 1.7 }}>
              <PrismicRichText field={item.service_description} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}