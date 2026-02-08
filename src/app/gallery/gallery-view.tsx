"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { GalleryPhoto } from "@/lib/gallery";
import styles from "./gallery-view.module.css";

type Locale = "th" | "en";

type GalleryViewProps = {
  photos: GalleryPhoto[];
};

type Copy = {
  backHome: string;
  close: string;
  empty: string;
  intro: string;
  loadMore: string;
  open: string;
  photosWord: string;
  subtitle: string;
  title: string;
  viewHint: string;
  woofLeft: string;
  woofRight: string;
};

const text: Record<Locale, Copy> = {
  th: {
    backHome: "กลับหน้าแรก",
    close: "ปิด",
    empty: "ยังไม่พบรูปภาพในแกลเลอรี",
    intro: "รวมภาพบรรยากาศการกรูมมิ่งจริงทั้งหมด 197 รูป",
    loadMore: "โหลดเพิ่ม",
    open: "เปิดดูเต็มภาพ",
    photosWord: "รูป",
    subtitle: "คลิกที่รูปเพื่อเปิดดูแบบเต็มจอ",
    title: "แกลเลอรีผลงานจริง",
    viewHint: "เลื่อนลงเพื่อดูเพิ่ม",
    woofLeft: "โฮ่ง โฮ่ง!",
    woofRight: "น่ารักทุกมุม"
  },
  en: {
    backHome: "Back Home",
    close: "Close",
    empty: "No gallery photos found yet.",
    intro: "A complete visual library of real grooming sessions.",
    loadMore: "Load More",
    open: "Open full image",
    photosWord: "photos",
    subtitle: "Tap any photo to open fullscreen view",
    title: "Stunning Photo Gallery",
    viewHint: "Scroll for more",
    woofLeft: "woof woof!",
    woofRight: "paw-fect shots"
  }
};

const ratioPattern = ["ratioTall", "ratioSquare", "ratioPortrait", "ratioWide", "ratioTall", "ratioSquare"] as const;

export default function GalleryView({ photos }: GalleryViewProps) {
  const [locale, setLocale] = useState<Locale>("th");
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(36);

  const t = useMemo(() => text[locale], [locale]);
  const visiblePhotos = photos.slice(0, visibleCount);
  const canLoadMore = visibleCount < photos.length;
  const selectedPhoto = selectedPhotoIndex !== null ? photos[selectedPhotoIndex] : null;

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    if (selectedPhotoIndex === null) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedPhotoIndex(null);
      }

      if (event.key === "ArrowRight") {
        setSelectedPhotoIndex((current) => {
          if (current === null) {
            return 0;
          }

          return (current + 1) % photos.length;
        });
      }

      if (event.key === "ArrowLeft") {
        setSelectedPhotoIndex((current) => {
          if (current === null) {
            return 0;
          }

          return (current - 1 + photos.length) % photos.length;
        });
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedPhotoIndex, photos.length]);

  const showPrevious = () => {
    setSelectedPhotoIndex((current) => {
      if (current === null) {
        return 0;
      }

      return (current - 1 + photos.length) % photos.length;
    });
  };

  const showNext = () => {
    setSelectedPhotoIndex((current) => {
      if (current === null) {
        return 0;
      }

      return (current + 1) % photos.length;
    });
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerRow}>
          <Link href="/" className={styles.homeLink}>
            Teka Grooming
          </Link>

          <div className={styles.controls}>
            <Link href="/" className={styles.backButton}>
              {t.backHome}
            </Link>

            <div className={styles.langToggle} role="group" aria-label="Language switcher">
              <button
                className={`${styles.langButton} ${locale === "th" ? styles.active : ""}`}
                type="button"
                onClick={() => setLocale("th")}
                aria-pressed={locale === "th"}
              >
                <span aria-hidden="true">🇹🇭</span>
                <span>TH</span>
              </button>
              <button
                className={`${styles.langButton} ${locale === "en" ? styles.active : ""}`}
                type="button"
                onClick={() => setLocale("en")}
                aria-pressed={locale === "en"}
              >
                <span aria-hidden="true">🇬🇧</span>
                <span>EN</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.heroCard}>
          <p className={styles.eyebrow}>{t.viewHint}</p>
          <h1>{t.title}</h1>
          <p className={styles.intro}>{t.intro}</p>
          <p className={styles.subtitle}>{t.subtitle}</p>
          <p className={styles.counter}>
            {photos.length} {t.photosWord}
          </p>

          <span className={`${styles.doodle} ${styles.doodleLeft}`}>{t.woofLeft}</span>
          <span className={`${styles.doodle} ${styles.doodleRight}`}>{t.woofRight}</span>
          <span className={`${styles.squiggle} ${styles.squiggleLeft}`}>~ ~ ~</span>
          <span className={`${styles.squiggle} ${styles.squiggleRight}`}>~ ~ ~</span>
        </section>

        <section className={styles.gallerySection}>
          {visiblePhotos.length === 0 ? (
            <p className={styles.empty}>{t.empty}</p>
          ) : (
            <div className={styles.masonry}>
              {visiblePhotos.map((photo, index) => {
                const ratioClass = ratioPattern[index % ratioPattern.length];

                return (
                  <button
                    key={photo.src}
                    className={styles.card}
                    type="button"
                    onClick={() => setSelectedPhotoIndex(index)}
                    aria-label={`${t.open} ${photo.id}`}
                  >
                    <span className={`${styles.cardMedia} ${styles[ratioClass]}`}>
                      <Image
                        src={photo.src}
                        alt={locale === "th" ? photo.alt.th : photo.alt.en}
                        fill
                        sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                    </span>
                    <span className={styles.cardOverlay}>
                      <span className={styles.cardId}>#{String(photo.id).padStart(3, "0")}</span>
                      <span className={styles.cardHint}>{t.open}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          {canLoadMore ? (
            <div className={styles.loadMoreWrap}>
              <button
                type="button"
                className={styles.loadMoreButton}
                onClick={() => setVisibleCount((current) => Math.min(current + 36, photos.length))}
              >
                {t.loadMore}
              </button>
            </div>
          ) : null}
        </section>
      </main>

      {selectedPhoto ? (
        <div className={styles.lightbox} role="dialog" aria-modal="true" onClick={() => setSelectedPhotoIndex(null)}>
          <button
            className={`${styles.navButton} ${styles.prevButton}`}
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Previous image"
          >
            ‹
          </button>

          <div className={styles.lightboxContent} onClick={(event) => event.stopPropagation()}>
            <button
              className={styles.closeButton}
              type="button"
              onClick={() => setSelectedPhotoIndex(null)}
              aria-label={t.close}
            >
              ✕
            </button>

            <div className={styles.lightboxImageWrap}>
              <Image
                className={styles.lightboxImage}
                src={selectedPhoto.src}
                alt={locale === "th" ? selectedPhoto.alt.th : selectedPhoto.alt.en}
                fill
                sizes="90vw"
                priority
              />
            </div>

            <p className={styles.lightboxCaption}>
              #{String(selectedPhoto.id).padStart(3, "0")} · {locale === "th" ? selectedPhoto.alt.th : selectedPhoto.alt.en}
            </p>
          </div>

          <button
            className={`${styles.navButton} ${styles.nextButton}`}
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      ) : null}
    </div>
  );
}
