const sharp = require("sharp")
const pngToIco = require("png-to-ico").default
const fs = require("fs")
const path = require("path")

const SRC = path.join(process.cwd(), "public/icon-light-32x32.png")
const OUT = path.join(process.cwd(), "app/favicon.ico")

async function main() {
  // Render crisp PNGs at the standard favicon sizes, then bundle into a single .ico
  const sizes = [16, 32, 48]
  const buffers = await Promise.all(
    sizes.map((size) =>
      sharp(SRC)
        .resize(size, size, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
        .png()
        .toBuffer()
    )
  )

  const ico = await pngToIco(buffers)
  fs.writeFileSync(OUT, ico)
  console.log(`created ${OUT} (${(ico.length / 1024).toFixed(1)}KB) with sizes ${sizes.join(", ")}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
