import { useEffect } from 'react'

const useInsideClick = (ref, callback) => {
  const handleClick = e => {
    if (ref.current && ref.current.contains(e.target)) {
      callback()
    }
  }
  useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  })
}

export default useInsideClick;