const sharp = require("sharp");
const path = require("path");

const root = path.join(__dirname, "..");
const src = path.join(root, "public/icon-light-32x32.png"); // SG brand logo (1254x1254)

async function run() {
  // Favicon (Next.js app/icon.png convention) - 512x512
  await sharp(src)
    .resize(512, 512, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toFile(path.join(root, "app/icon.png"));

  // Apple touch icon - 180x180 on white (Apple ignores transparency)
  await sharp(src)
    .resize(160, 160, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .extend({ top: 10, bottom: 10, left: 10, right: 10, background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .flatten({ background: { r: 255, g: 255, b: 255 } })
    .png()
    .toFile(path.join(root, "app/apple-icon.png"));

  // Social share / OG image - 1200x630, logo centered on white
  const logo = await sharp(src).resize(360, 360, { fit: "contain" }).toBuffer();
  await sharp({
    create: { width: 1200, height: 630, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 1 } },
  })
    .composite([{ input: logo, gravity: "center" }])
    .png()
    .toFile(path.join(root, "public/og-image.png"));

  console.log("Generated app/icon.png, app/apple-icon.png, public/og-image.png");
}

run();
