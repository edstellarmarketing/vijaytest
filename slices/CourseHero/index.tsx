import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

type CourseHeroProps = SliceComponentProps<Content.CourseHeroSlice>;

export default function CourseHero({ slice }: CourseHeroProps) {
  return (
    <>
      <style>{`
        .course-hero {
          position: relative;
          min-height: 420px;
          display: flex;
          align-items: center;
          background: #1a237e;
          padding: 60px 80px;
          box-sizing: border-box;
          width: 100%;
        }
        .course-hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .course-hero-content {
          position: relative;
          z-index: 1;
          max-width: 620px;
          width: 100%;
        }
        .course-hero h1 {
          font-size: clamp(26px, 3.5vw, 44px);
          font-weight: 800;
          line-height: 1.2;
          margin: 0 0 16px 0;
          font-family: Arial, sans-serif;
        }
        .course-hero-desc {
          color: rgba(255,255,255,0.85);
          font-size: 15px;
          line-height: 1.75;
          margin-bottom: 24px;
          font-family: Arial, sans-serif;
          max-width: 560px;
        }
        .course-hero-desc p {
          margin: 0;
        }
        .stats-grid {
          display: flex;
          flex-direction: row;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 8px;
          padding: 16px 0;
          margin-bottom: 28px;
          max-width: 560px;
        }
        .stat-col {
          flex: 1;
          padding: 0 20px;
          border-right: 1px solid rgba(255,255,255,0.15);
        }
        .stat-col:last-child {
          border-right: none;
        }
        .stat-label {
          color: rgba(255,255,255,0.6);
          font-size: 11px;
          margin: 0 0 6px 0;
        }
        .stat-value {
          color: #fff;
          font-weight: 700;
          font-size: 14px;
          margin: 0;
        }
        .stat-sub {
          color: rgba(255,255,255,0.7);
          font-size: 13px;
          margin: 2px 0 0 0;
        }
        .course-btns {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 16px;
        }
        .btn-outline {
          background: transparent;
          color: #fff;
          padding: 11px 24px;
          border-radius: 4px;
          text-decoration: none;
          font-weight: 700;
          font-size: 14px;
          border: 2px solid #fff;
          font-family: Arial, sans-serif;
        }
        .btn-primary {
          background: #c6ff00;
          color: #000;
          padding: 11px 24px;
          border-radius: 4px;
          text-decoration: none;
          font-weight: 700;
          font-size: 14px;
          font-family: Arial, sans-serif;
        }
        .bottom-link {
          color: rgba(255,255,255,0.8);
          font-size: 13px;
          margin: 0;
          font-family: Arial, sans-serif;
        }
        .bottom-link a {
          color: #c6ff00;
          text-decoration: underline;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .course-hero {
            padding: 40px 24px;
          }
          .course-hero-content {
            max-width: 100%;
          }
          .course-hero-desc {
            max-width: 100%;
            font-size: 14px;
          }
          .stats-grid {
            flex-direction: column;
            max-width: 100%;
            padding: 0;
          }
          .stat-col {
            border-right: none;
            border-bottom: 1px solid rgba(255,255,255,0.15);
            padding: 14px 20px;
          }
          .stat-col:last-child {
            border-bottom: none;
          }
        }
      `}</style>

      <section className="course-hero">
        <div className="course-hero-bg">
          <PrismicNextImage
            field={slice.primary.background_image}
            fill
            style={{ objectFit: "cover", opacity: 0.35 }}
          />
        </div>

        <div className="course-hero-content">
          <h1>
            <span style={{ color: "#ffffff" }}>{slice.primary.course_title_white_1 as string} </span>
            <span style={{ color: "#c6ff00" }}>{slice.primary.course_title_highlight as string} </span>
            <span style={{ color: "#ffffff" }}>{slice.primary.course_title_white_2 as string}</span>
          </h1>

          <div className="course-hero-desc">
            <PrismicRichText field={slice.primary.description} />
          </div>

          <div className="stats-grid">
            <div className="stat-col">
              <p className="stat-label">⏱ Duration</p>
              <p className="stat-value">{slice.primary.duration as string}</p>
            </div>
            <div className="stat-col">
              <p className="stat-label">🖥 Delivery Type</p>
              <p className="stat-value">{slice.primary.delivery_type as string}</p>
            </div>
            <div className="stat-col">
              <p className="stat-label">🌐 Training Available in</p>
              <p className="stat-value">{slice.primary.languages as string}</p>
              <p className="stat-sub">{slice.primary.locations as string}</p>
            </div>
          </div>

          <div className="course-btns">
            <PrismicNextLink field={slice.primary.course_outline_url} className="btn-outline">
              View Course Outline
            </PrismicNextLink>
            <PrismicNextLink field={slice.primary.enquire_url} className="btn-primary">
              Enquire Now
            </PrismicNextLink>
          </div>

          <p className="bottom-link">
            Looking for multiple trainings?{" "}
            <PrismicNextLink field={slice.primary.bottom_link_url}>
              {slice.primary.bottom_link_text as string}
            </PrismicNextLink>
          </p>
        </div>
      </section>
    </>
  );
}