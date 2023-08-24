import { lexend_deca, inter } from "./fonts"
 
export default function NotFound() {
  return (
    <div style={{height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <h1 className={inter.className} style={{fontSize: "18vw", color: "#fff"}}>404</h1>
    </div>
  )
}