import { useEffect } from "react"

export function useToggleTimerOnSpace({ toggleTimer }) {
  useEffect(() => {
    const keyUpHandler = (e) => {
      if (e.key === " ") toggleTimer()
    }

    document.addEventListener("keyup", keyUpHandler)

    return () => {
      document.removeEventListener("keyup", keyUpHandler)
    }
  }, [])
}
