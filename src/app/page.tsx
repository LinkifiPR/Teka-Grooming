"use client";

import { useEffect, useMemo, useState } from "react";

type Locale = "th" | "en";

type SiteCopy = {
  brand: string;
  nav: {
    services: string;
    gallery: string;
    process: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    heading: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    stats: Array<{ label: string; value: string }>;
  };
  services: {
    title: string;
    intro: string;
    cards: Array<{ title: string; description: string }>;
  };
  gallery: {
    title: string;
    intro: string;
    hoverHint: string;
    totalLabel: string;
  };
  process: {
    title: string;
    steps: Array<{ title: string; description: string }>;
  };
  contact: {
    title: string;
    subtitle: string;
    phoneLabel: string;
    lineLabel: string;
    facebookLabel: string;
    hoursLabel: string;
    hoursValue: string;
  };
  footer: string;
};

const copy: Record<Locale, SiteCopy> = {
  th: {
    brand: "Teka Grooming",
    nav: {
      services: "บริการ",
      gallery: "ผลงาน",
      process: "ขั้นตอน",
      contact: "ติดต่อ"
    },
    hero: {
      eyebrow: "ร้านอาบน้ำตัดขนสุนัขระดับพรีเมียม",
      heading: "ดูแลขนอย่างมืออาชีพ เพื่อให้สุนัขของคุณดูดีที่สุดทุกวัน",
      description:
        "บริการอาบน้ำ ตัดแต่งขน ทำความสะอาดหู ตัดเล็บ และดูแลผิวหนังอย่างอ่อนโยน โดยทีมกรูมเมอร์ที่เชี่ยวชาญ",
      primaryCta: "จองคิวตอนนี้",
      secondaryCta: "ดูผลงานจริง",
      stats: [
        { label: "ลูกค้าประจำ", value: "500+" },
        { label: "ประสบการณ์ทีมงาน", value: "8 ปี" },
        { label: "รีวิวความพึงพอใจ", value: "4.9/5" }
      ]
    },
    services: {
      title: "บริการหลัก",
      intro: "ออกแบบแพ็กเกจตามสายพันธุ์ สภาพขน และไลฟ์สไตล์ของน้องหมา",
      cards: [
        {
          title: "อาบน้ำและเป่าแห้ง",
          description: "ใช้ผลิตภัณฑ์อ่อนโยน ช่วยลดกลิ่นและบำรุงขนให้นุ่มเงางาม"
        },
        {
          title: "ตัดแต่งขนสไตล์บูทีค",
          description: "ออกแบบทรงเฉพาะตัวให้เข้ากับบุคลิกของน้องหมา"
        },
        {
          title: "ดูแลสุขอนามัยครบจบ",
          description: "ตัดเล็บ เช็ดหู ทำความสะอาดรอบตา และดูแลอุ้งเท้า"
        }
      ]
    },
    gallery: {
      title: "ผลงานจากลูกค้าจริง",
      intro: "วิดีโอจริงจากบริการของเรา",
      hoverHint: "เลื่อนเมาส์เพื่อเล่น",
      totalLabel: "07 คลิป"
    },
    process: {
      title: "ขั้นตอนบริการ",
      steps: [
        {
          title: "1) ประเมินขนและผิว",
          description: "เช็กสภาพผิว ขน และความต้องการเฉพาะก่อนเริ่มบริการ"
        },
        {
          title: "2) กรูมมิ่งอย่างปลอดภัย",
          description: "ดูแลด้วยเทคนิคอ่อนโยน ลดความเครียดระหว่างทำบริการ"
        },
        {
          title: "3) ตรวจคุณภาพก่อนส่งมอบ",
          description: "ตรวจงานละเอียดทุกจุด พร้อมคำแนะนำการดูแลที่บ้าน"
        }
      ]
    },
    contact: {
      title: "จองคิวและสอบถาม",
      subtitle: "ติดต่อเราได้ทุกช่องทาง แล้วทีมงานจะตอบกลับโดยเร็ว",
      phoneLabel: "โทร",
      lineLabel: "LINE",
      facebookLabel: "Facebook",
      hoursLabel: "เวลาเปิดทำการ",
      hoursValue: "ทุกวัน 09:00 - 19:00"
    },
    footer: "Teka Grooming - สตูดิโอดูแลขนสุนัข"
  },
  en: {
    brand: "Teka Grooming",
    nav: {
      services: "Services",
      gallery: "Gallery",
      process: "Process",
      contact: "Contact"
    },
    hero: {
      eyebrow: "Premium dog grooming studio",
      heading: "Professional grooming that keeps your dog healthy, clean, and camera-ready",
      description:
        "Bath, trim, nail care, ear cleaning, and skin-friendly treatments by experienced groomers.",
      primaryCta: "Book Now",
      secondaryCta: "View Gallery",
      stats: [
        { label: "Returning clients", value: "500+" },
        { label: "Team experience", value: "8 years" },
        { label: "Client rating", value: "4.9/5" }
      ]
    },
    services: {
      title: "Core Services",
      intro: "Packages tailored by breed, coat condition, and lifestyle.",
      cards: [
        {
          title: "Bath & blow-dry",
          description: "Gentle products that remove odor and keep coats soft and shiny."
        },
        {
          title: "Boutique styling",
          description: "Custom grooming styles that match your dog\'s personality."
        },
        {
          title: "Full hygiene care",
          description: "Nails, ears, eye-area cleanup, and paw care in one session."
        }
      ]
    },
    gallery: {
      title: "Real Client Results",
      intro: "Authentic service videos from our studio",
      hoverHint: "Hover to play",
      totalLabel: "07 Clips"
    },
    process: {
      title: "How We Work",
      steps: [
        {
          title: "1) Coat & skin assessment",
          description: "We inspect coat type, skin condition, and special care needs."
        },
        {
          title: "2) Safe, low-stress grooming",
          description: "Gentle handling and calm pacing for a stress-free session."
        },
        {
          title: "3) Final quality check",
          description: "Detailed review and aftercare tips before handoff."
        }
      ]
    },
    contact: {
      title: "Book and Contact",
      subtitle: "Reach out on any channel and we will reply quickly.",
      phoneLabel: "Phone",
      lineLabel: "LINE",
      facebookLabel: "Facebook",
      hoursLabel: "Opening Hours",
      hoursValue: "Daily 09:00 - 19:00"
    },
    footer: "Teka Grooming - Dog Grooming Studio"
  }
};

type GalleryClip = {
  src: string;
  title: {
    th: string;
    en: string;
  };
};

const galleryClips: GalleryClip[] = [
  {
    src: "/brand/videos/AQPAtW1O1UL4HazTalQ2WikUxeaCVnz1EgXpuZPC-eae1_5JHbvpflE18fTzujdaxVgRFmt-GuM-i6tLfEBzE5n3F7_761DIXFpklSnjhSKPdg.mp4",
    title: { th: "ทรงคลาสสิกสะอาดตา", en: "Classic Clean Cut" }
  },
  {
    src: "/brand/videos/AQNNDgIkFjGjR2fmD_jGYFKUnyqTx4cJs4_kKysZe-FXTsMmU-3T2F6exVo5Sm2rtSxPltqj44eafhS98Yz0rd2m_nQ1o_JgKCJviWz-w5LZSw.mp4",
    title: { th: "อาบน้ำบำรุงขนนุ่ม", en: "Silky Bath Finish" }
  },
  {
    src: "/brand/videos/AQNpccobogsZwK2F8Pn5fMELWom2PQ0LWwAFQx4D8irAW1F2Gf1_Y4XGbn3eGYGk8TpGOuSWVy53t45uYpNvC4SjWs07x4Q97dpPAsC7ngBhRA.mp4",
    title: { th: "ตัดแต่งหน้ากลมหวาน", en: "Rounded Face Styling" }
  },
  {
    src: "/brand/videos/AQM-oMlBFPU9L-DCBnzTuGGKNqxLyASXlTPVBc9Gz9y3Q88-MUWRFz-ompgg_AXimdFc6D-FcjtsOL_ZPcEFYrkxdsFRKWzsGj6bWxz6iTfdeA.mp4",
    title: { th: "รีเฟรชขนยาว", en: "Long-Coat Refresh" }
  },
  {
    src: "/brand/videos/AQM7bXlJaBTJQD1jmm38MIZ2oWSdLBQkd-F_--XGmOjxQGmHUW9tiiCm5_IxZJFZroE6gLamVPvwKNwD_5HBNj6_zCA2Wi03P52HZme5FVSUmw.mp4",
    title: { th: "บูทีคสไตล์น่ารัก", en: "Boutique Cute Style" }
  },
  {
    src: "/brand/videos/AQOnAiKdP36XPGvukFhxNjq3zaygaWkCnWdU29S_xQInN3ml3uRicbQeNA1dwIA0SBDA8tX0RTlGAxWenYzaNByPT26fXiuLpjHFUHqjmT-q4w.mp4",
    title: { th: "เซ็ตขนเงาพิเศษ", en: "Premium Shine Set" }
  },
  {
    src: "/brand/videos/AQPJs-ys2t2X2_trtNYtH3WNXWDW6Iz94KqM8mrIk32q6KEyEqxTbCXG5FHsZKRYkRHIbsgEkC40HfS6lvuXd-Lwt89ZmYNpnyBVl31e8Nw6oQ.mp4",
    title: { th: "ทรงสปอร์ตคล่องตัว", en: "Active Sport Trim" }
  },
  {
    src: "/brand/videos/AQMtCwKTS4WJ-q3h2v_mH3eSqiRt92tTIkHdhWNus64mrIk2rpKt4NfijKOlyRU-AzpFyuMdvCGPJzYfxU28kQuYWlgrJg0JwzFD7TJzuYyj7w.mp4",
    title: { th: "ฟินิชงานประกวด", en: "Show-Ready Finish" }
  }
];

const heroVideo = galleryClips[0].src;
const resultClips = galleryClips.slice(1);

export default function HomePage() {
  const [locale, setLocale] = useState<Locale>("th");

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const t = useMemo(() => copy[locale], [locale]);
  const spotlightClip = resultClips[0] ?? galleryClips[0];
  const reelClips = resultClips.slice(1);

  const previewVideo = (node: HTMLElement) => {
    const video = node.querySelector("video");

    if (!video) {
      return;
    }

    video.currentTime = 0;
    void video.play();
  };

  const stopPreview = (node: HTMLElement) => {
    const video = node.querySelector("video");

    if (!video) {
      return;
    }

    video.pause();
    video.currentTime = 0;
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container nav-row">
          <a className="brand" href="#top">
            {t.brand}
          </a>

          <nav className="main-nav" aria-label="Primary Navigation">
            <a href="#services">{t.nav.services}</a>
            <a href="#gallery">{t.nav.gallery}</a>
            <a href="#process">{t.nav.process}</a>
            <a href="#contact">{t.nav.contact}</a>
          </nav>

          <button
            className="lang-toggle"
            type="button"
            onClick={() => setLocale((current) => (current === "th" ? "en" : "th"))}
            aria-label={locale === "th" ? "Switch language to English" : "เปลี่ยนภาษาเป็นไทย"}
          >
            <span className={`toggle-chip ${locale === "th" ? "active" : ""}`}>
              <span aria-hidden="true">🇹🇭</span>
              <span>TH</span>
            </span>
            <span className={`toggle-chip ${locale === "en" ? "active" : ""}`}>
              <span aria-hidden="true">🇬🇧</span>
              <span>EN</span>
            </span>
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <p className="eyebrow">{t.hero.eyebrow}</p>
              <h1>{t.hero.heading}</h1>
              <p className="hero-copy">{t.hero.description}</p>
              <div className="hero-actions">
                <a className="btn-primary" href="#contact">
                  {t.hero.primaryCta}
                </a>
                <a className="btn-secondary" href="#gallery">
                  {t.hero.secondaryCta}
                </a>
              </div>
              <ul className="stats-grid">
                {t.hero.stats.map((stat) => (
                  <li key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hero-video-wrap">
              <video autoPlay loop muted playsInline preload="metadata" className="hero-video">
                <source src={heroVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </section>

        <section id="services" className="section services">
          <div className="container">
            <h2>{t.services.title}</h2>
            <p className="section-intro">{t.services.intro}</p>
            <div className="service-grid">
              {t.services.cards.map((service) => (
                <article key={service.title} className="service-card">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="section gallery">
          <div className="container gallery-shell">
            <div className="gallery-head">
              <div>
                <h2>{t.gallery.title}</h2>
                <p className="section-intro">{t.gallery.intro}</p>
              </div>
              <p className="gallery-total">{t.gallery.totalLabel}</p>
            </div>

            <div className="results-layout">
              <article
                className="spotlight-card"
                onMouseEnter={(event) => previewVideo(event.currentTarget)}
                onMouseLeave={(event) => stopPreview(event.currentTarget)}
                onFocus={(event) => previewVideo(event.currentTarget)}
                onBlur={(event) => stopPreview(event.currentTarget)}
                tabIndex={0}
              >
                <video muted loop playsInline preload="metadata">
                  <source src={spotlightClip.src} type="video/mp4" />
                </video>
                <p className="gallery-chip">{t.gallery.hoverHint}</p>
                <p className="spotlight-title">{locale === "th" ? spotlightClip.title.th : spotlightClip.title.en}</p>
                <p className="spotlight-index">01 / 07</p>
              </article>

              <div className="reel-grid">
                {reelClips.map((clip, index) => (
                  <article
                    key={clip.src}
                    className="reel-card"
                    onMouseEnter={(event) => previewVideo(event.currentTarget)}
                    onMouseLeave={(event) => stopPreview(event.currentTarget)}
                    onFocus={(event) => previewVideo(event.currentTarget)}
                    onBlur={(event) => stopPreview(event.currentTarget)}
                    tabIndex={0}
                  >
                    <video muted loop playsInline preload="metadata">
                      <source src={clip.src} type="video/mp4" />
                    </video>
                    <p className="gallery-chip">{t.gallery.hoverHint}</p>
                    <p className="reel-title">{locale === "th" ? clip.title.th : clip.title.en}</p>
                    <p className="reel-index">{String(index + 2).padStart(2, "0")}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="section process">
          <div className="container">
            <h2>{t.process.title}</h2>
            <ol className="process-list">
              {t.process.steps.map((step) => (
                <li key={step.title}>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="container contact-card">
            <h2>{t.contact.title}</h2>
            <p>{t.contact.subtitle}</p>
            <div className="contact-grid">
              <p>
                <strong>{t.contact.phoneLabel}</strong>: <a href="tel:+66000000000">+66 00 000 0000</a>
              </p>
              <p>
                <strong>{t.contact.lineLabel}</strong>: <a href="https://line.me" target="_blank" rel="noreferrer">@tekagrooming</a>
              </p>
              <p>
                <strong>{t.contact.facebookLabel}</strong>: <a href="https://facebook.com" target="_blank" rel="noreferrer">Teka Grooming</a>
              </p>
              <p>
                <strong>{t.contact.hoursLabel}</strong>: {t.contact.hoursValue}
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">{t.footer}</div>
      </footer>
    </div>
  );
}
