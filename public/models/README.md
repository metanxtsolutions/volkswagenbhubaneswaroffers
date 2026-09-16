# Vehicle photography

Drop official Volkswagen images here and the site picks them up on the next
build. No code change is needed.

## Naming

Name each file after the model slug used in `src/data/models.ts`:

| File | Used for |
| --- | --- |
| `volkswagen-tera.webp` | Volkswagen Tera |
| `volkswagen-taigun.webp` | Volkswagen Taigun |
| `volkswagen-virtus.webp` | Volkswagen Virtus |
| `volkswagen-tiguan-r-line.webp` | Volkswagen Tiguan R-Line |
| `volkswagen-golf-gti.webp` | Volkswagen Golf GTI |

`.webp`, `.avif`, `.jpg`, `.jpeg` and `.png` all work. The first match in that
order wins. Any model without a file keeps the vector illustration, so you can
add them one at a time.

## What works best

- A side profile or front three quarter shot on a plain or transparent
  background, matching how the cards are laid out.
- At least 1200px wide. Next.js generates the smaller sizes and serves AVIF or
  WebP automatically, so upload the largest version you have.
- Keep the car centred with a little breathing room. The image is rendered
  with `object-contain`, so nothing gets cropped.

## Where to get them

Ask your Volkswagen dealer contact for the official marketing asset pack. That
is the correct source: the images are cleared for dealer use, come at full
resolution and carry the right model year. Images lifted from the public
website are lower resolution and their use is not covered by anything.

## Using a remote URL instead

If you would rather point at an image hosted elsewhere, set `imageUrl` on the
model in `src/data/models.ts`. `next.config.ts` already allows the Volkswagen
India domain. A local file here is still the better option: it is served from
our own domain, it gets optimised, and it cannot disappear when someone else
changes their site.
