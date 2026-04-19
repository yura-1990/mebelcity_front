import * as React from "react"

const MOBILE_BREAKPOINT = 1350
const MOBILE_BREAKPOINT_LOGO = 400

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)
  const [isMobileLogo, setIsMobileLogo] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const mqlLogo = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT_LOGO - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
      setIsMobileLogo(window.innerWidth < MOBILE_BREAKPOINT_LOGO)
    }
    mql.addEventListener("change", onChange)
    mqlLogo.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    setIsMobileLogo(window.innerWidth < MOBILE_BREAKPOINT_LOGO)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return {
    isMobile: !!isMobile,
    isMobileLogo: !!isMobileLogo

  }
}
