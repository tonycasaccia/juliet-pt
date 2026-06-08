const sharp = require("sharp");
const path = require("path");

const dir = "/vercel/share/v0-project/public/images";

const jobs = [
  { in: "amenities-outdoor-gym-tent.png", out: "amenity-gym.jpg" },
  { in: "amenities-outdoor-turf.png", out: "amenity-turf.jpg" },
  { in: "amenities-recovery-room.png", out: "amenity-recovery.jpg" },
  { in: "amenity-pool.jpeg", out: "amenity-pool-opt.jpg" },
];

(async () => {
  for (const job of jobs) {
    const inPath = path.join(dir, job.in);
    const outPath = path.join(dir, job.out);
    const meta = await sharp(inPath).metadata();
    await sharp(inPath)
      .rotate()
      .resize({ width: 1600, withoutEnlargement: true })
      .jpeg({ quality: 78, mozjpeg: true })
      .toFile(outPath);
    console.log(`[v0] ${job.in} (${meta.width}x${meta.height}) -> ${job.out}`);
  }
  console.log("[v0] done");
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
