import { ImageResponse } from "next/server"
import Logo from "./components/Logo"

// Route segment config
export const runtime = "edge"

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = "image/png"

// Image generation
export default function Icon() {
  return new ImageResponse(
    // ImageResponse JSX element
    <Logo />,
    // ImageResponse options
    {
      ...size,
    },
  )
}

