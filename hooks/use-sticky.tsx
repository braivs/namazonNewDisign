import {useEffect, useState} from 'react'

type UseStickyOptions = {
  // Skip sticky on mobile video pages — orientation/scroll was pinning header over player.
  disabled?: boolean
}
const useSticky = (options?: UseStickyOptions) => {
  const disabled = options?.disabled ?? false
  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    const stickyHeader = () => {
      if (disabled) {
        setSticky(false)
        return
      }
      setSticky(window.scrollY > 80)
    }

    stickyHeader()
    window.addEventListener('scroll', stickyHeader, {passive: true})
    return () => window.removeEventListener('scroll', stickyHeader)
  }, [disabled])

  return {sticky}
}

export default useSticky
