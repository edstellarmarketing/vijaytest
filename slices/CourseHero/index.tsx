import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

type CourseHeroProps = SliceComponentProps<Content.CourseHeroSlice>;

export default function CourseHero({ slice }: CourseHeroProps) {
  return (
    <section style={{
      position: "relative",
      minHeight: "420px",
      display: "flex",
      alignItems: "center",
      background: "#1a237e",
      overflow: "hidden",
      padding: "60px 48px",
    }}>
      {/* Background Image */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <PrismicNextImage
          field={slice.primary.background_image}
          fill
          style={{ objectFit: "cover", opacity: 0.3 }}
        />
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: "700px" }}>

        {/* Title */}
        <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, lineHeight: 1.2, marginBottom: "20px", fontFamily: "Arial, sans-serif" }}>
          <span style={{ color: "#ffffff" }}>{slice.primary.course_title_white_1 as string} </span>
          <span style={{ color: "#c6ff00" }}>{slice.primary.course_title_highlight as string} </span>
          <span style={{ color: "#ffffff" }}>{slice.primary.course_title_white_2 as string}</span>
        </h1>

        {/* Description */}
        <div style={{ color: "rgba(255,255,255,0.85)", fontSize: "15px", lineHeight: 1.7, marginBottom: "32px", fontFamily: "Arial, sans-serif" }}>
          <PrismicRichText field={slice.primary.description} />
        </div>

        {/* Stats Box */}
        <div style={{
          display: "flex", gap: "32px", flexWrap: "wrap",
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: "8px", padding: "20px 24px",
          marginBottom: "32px",
        }}>
          <div>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px", marginBottom: "4px" }}>⏱ Duration</p>
            <p style={{ color: "#fff", fontWeight: 700, fontSize: "15px" }}>{slice.primary.duration as string}</p>
          </div>
          <div>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px", marginBottom: "4px" }}>🖥 Delivery Type</p>
            <p style={{ color: "#fff", fontWeight: 700, fontSize: "15px" }}>{slice.primary.delivery_type as string}</p>
          </div>
          <div>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px", marginBottom: "4px" }}>🌐 Training Available in</p>
            <p style={{ color: "#fff", fontWeight: 700, fontSize: "15px" }}>{slice.primary.languages as string}</p>
            <p style={{ color: "#fff", fontSize: "13px" }}>{slice.primary.locations as string}</p>
          </div>
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center", marginBottom: "20px" }}>
          <PrismicNextLink
            field={slice.primary.course_outline_url}
            style={{
              background: "transparent",
              color: "#fff",
              padding: "12px 28px",
              borderRadius: "4px",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "14px",
              border: "2px solid #fff",
            }}
          >
            View Course Outline
          </PrismicNextLink>
          <PrismicNextLink
            field={slice.primary.enquire_url}
            style={{
              background: "#c6ff00",
              color: "#000",
              padding: "12px 28px",
              borderRadius: "4px",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "14px",
            }}
          >
            Enquire Now
          </PrismicNextLink>
        </div>

        {/* Bottom Link */}
        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px" }}>
          Looking for multiple trainings?{" "}
          <PrismicNextLink
            field={slice.primary.bottom_link_url}
            style={{ color: "#c6ff00", textDecoration: "underline", fontWeight: 600 }}
          >
            {slice.primary.bottom_link_text as string}
          </PrismicNextLink>
        </p>

      </div>
    </section>
  );
}