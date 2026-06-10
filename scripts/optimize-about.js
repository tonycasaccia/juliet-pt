const sharp = require("sharp");
const path = require("path");

const dir = path.join(process.cwd(), "public/images");

const jobs = [
  { in: "classroom-clinic.png", out: "about-classroom.jpg", w: 1400 },
  { in: "bike.jpg", out: "about-bike.jpg", w: 1200 },
  { in: "pt-colleagues.png", out: "about-colleagues.jpg", w: 1400 },
  { in: "race-treatment.jpg", out: "about-race.jpg", w: 1200 },
  { in: "treatment-clinic.jpg", out: "about-treatment.jpg", w: 1200 },
  { in: "bike-shop-clinic.png", out: "about-bikeshop.jpg", w: 1400 },
];

(async () => {
  for (const job of jobs) {
    const src = path.join(dir, job.in);
    const dest = path.join(dir, job.out);
    await sharp(src)
      .rotate()
      .resize({ width: job.w, withoutEnlargement: true })
      .jpeg({ quality: 80, mozjpeg: true })
      .toFile(dest);
    console.log(`${job.in} -> ${job.out}`);
  }
})();
