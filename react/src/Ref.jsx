import React, { useRef, useEffect } from 'react'

function Ref() {
  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) {
      ref.current.focus()
    }
  }, []) // [] کا مطلب ہے صرف ایک بار، جب component mount ہو

  return (
    <div>
      <input ref={ref} type="text" />
    </div>
  )
}

export default Ref
