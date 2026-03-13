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
      overflow: "visible",
      padding: "60px 20px",
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
      <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "620px" }}>

        {/* Title */}
        <h1 style={{
          fontSize: "clamp(24px, 4vw, 44px)",
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
          fontSize: "clamp(13px, 1.5vw, 15px)",
          lineHeight: 1.75,
          marginBottom: "28px",
          fontFamily: "Arial, sans-serif",
        }}>
          <PrismicRichText field={slice.primary.description} />
        </div>

        {/* Stats Box */}
        <style>{`
          .stats-box {
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
            background: rgba(255,255,255,0.08);
            border: 1px solid rgba(255,255,255,0.15);
            border-radius: 8px;
            padding: 16px 20px;
            margin-bottom: 28px;
          }
          .stat-item {
            flex: 1;
            min-width: 120px;
          }
          .stat-item + .stat-item {
            border-left: 1px solid rgba(255,255,255,0.15);
            padding-left: 16px;
          }
          @media (max-width: 480px) {
            .stat-item + .stat-item {
              border-left: none;
              padding-left: 0;
              border-top: 1px solid rgba(255,255,255,0.15);
              padding-top: 12px;
            }
          }
        `}</style>

        <div className="stats-box">
          <div className="stat-item">
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "11px", marginBottom: "6px", marginTop: 0 }}>⏱ Duration</p>
            <p style={{ color: "#fff", fontWeight: 700, fontSize: "14px", margin: 0 }}>{slice.primary.duration as string}</p>
          </div>
          <div className="stat-item">
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "11px", marginBottom: "6px", marginTop: 0 }}>🖥 Delivery Type</p>
            <p style={{ color: "#fff", fontWeight: 700, fontSize: "14px", margin: 0 }}>{slice.primary.delivery_type as string}</p>
          </div>
          <div className="stat-item">
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