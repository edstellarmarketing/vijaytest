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
      padding: "60px 80px",
    }}>
      {/* Background Image */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <PrismicNextImage
          field={slice.primary.background_image}
          fill
          style={{ objectFit: "cover", opacity: 0.35 }}
        />
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: "620px" }}>

        {/* Title */}
        <h1 style={{
          fontSize: "clamp(28px, 3.5vw, 44px)",
          fontWeight: 800,
          lineHeight: 1.2,
          marginBottom: "16px",
          marginTop: 0,
          fontFamily: "Arial, sans-serif",
        }}>
          <span style={{ color: "#ffffff" }}>{slice.primary.course_title_white_1 as string} </span>
          <span style={{ color: "#c6ff00" }}>{slice.primary.course_title_highlight as string} </span>
          <span style={{ color: "#ffffff" }}>{slice.primary.course_title_white_2 as string}</span>
        </h1>

        {/* Description */}
        <div style={{
          color: "rgba(255,255,255,0.85)",
          fontSize: "14px",
          lineHeight: 1.75,
          marginBottom: "28px",
          fontFamily: "Arial, sans-serif",
          maxWidth: "560px",
        }}>
          <PrismicRichText field={slice.primary.description} />
        </div>

        {/* Stats Box */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr 1.5fr",
          gap: "0",
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: "8px",
          padding: "16px 24px",
          marginBottom: "28px",
          maxWidth: "560px",
        }}>
          <div style={{ borderRight: "1px solid rgba(255,255,255,0.15)", paddingRight: "20px" }}>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "11px", marginBottom: "6px", marginTop: 0 }}>⏱ Duration</p>
            <p style={{ color: "#fff", fontWeight: 700, fontSize: "14px", margin: 0 }}>{slice.primary.duration as string}</p>
          </div>
          <div style={{ borderRight: "1px solid rgba(255,255,255,0.15)", paddingLeft: "20px", paddingRight: "20px" }}>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "11px", marginBottom: "6px", marginTop: 0 }}>🖥 Delivery Type</p>
            <p style={{ color: "#fff", fontWeight: 700, fontSize: "14px", margin: 0 }}>{slice.primary.delivery_type as string}</p>
          </div>
          <div style={{ paddingLeft: "20px" }}>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "11px", marginBottom: "6px", marginTop: 0 }}>🌐 Training Available in</p>
            <p style={{ color: "#fff", fontWeight: 700, fontSize: "14px", margin: 0 }}>{slice.primary.languages as string}</p>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", margin: 0 }}>{slice.primary.locations as string}</p>
          </div>
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center", marginBottom: "16px" }}>
          <PrismicNextLink
            field={slice.primary.course_outline_url}
            style={{
              background: "transparent",
              color: "#fff",
              padding: "11px 24px",
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
              padding: "11px 24px",
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
        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "13px", margin: 0 }}>
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