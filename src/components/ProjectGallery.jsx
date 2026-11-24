import { useCallback, useEffect, useState } from "react";
import "./ProjectGallery.css";

export default function ProjectGallery({ images, title }) {
  const [active, setActive] = useState(null);
  const isOpen = active !== null;

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir) => setActive((i) => (i + dir + images.length) % images.length),
    [images.length]
  );

  useEffect(() => {
    if (!isOpen) return undefined;

    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close, step]);

  if (!images.length) return null;

  const current = isOpen ? images[active] : null;

  return (
    <>
      <div className="project-gallery">
        {images.map((image, i) => (
          <button
            key={image.src}
            type="button"
            className="project-gallery__thumb"
            onClick={() => setActive(i)}
            aria-label={`View larger: ${image.alt}`}
          >
            <img src={image.src} alt={image.alt} loading="lazy" />
          </button>
        ))}
      </div>

      {current && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} photo ${active + 1} of ${images.length}`}
          onClick={close}
        >
          <button type="button" className="lightbox__close" onClick={close} aria-label="Close">
            &times;
          </button>

          {images.length > 1 && (
            <button
              type="button"
              className="lightbox__nav lightbox__nav--prev"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              aria-label="Previous photo"
            >
              &#8249;
            </button>
          )}

          <figure className="lightbox__figure" onClick={(e) => e.stopPropagation()}>
            <img src={current.src} alt={current.alt} />
            <figcaption>
              {current.alt}
              <span>
                {active + 1} / {images.length}
              </span>
            </figcaption>
          </figure>

          {images.length > 1 && (
            <button
              type="button"
              className="lightbox__nav lightbox__nav--next"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              aria-label="Next photo"
            >
              &#8250;
            </button>
          )}
        </div>
      )}
    </>
  );
}
