import fs from "fs"
import path from "path"
import { ImageResponse } from "next/server"
import Logo from "./app/components/Logo"

const sizes = [
  { name: "favicon", size: 32 },
  { name: "favicon-16x16", size: 16 },
  { name: "favicon-32x32", size: 32 },
  { name: "apple-touch-icon", size: 180 },
  { name: "android-chrome-192x192", size: 192 },
  { name: "android-chrome-512x512", size: 512 },
]

async function generateIcons() {
  for (const { name, size } of sizes) {
    const imageResponse = new ImageResponse(<Logo />, {
      width: size,
      height: size,
    })

    const buffer = await imageResponse.arrayBuffer()
    fs.writeFileSync(path.join(process.cwd(), "public", `${name}.png`), Buffer.from(buffer))
  }

  console.log("Icons generated successfully!")
}

generateIcons()

