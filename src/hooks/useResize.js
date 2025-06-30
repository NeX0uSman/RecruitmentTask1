import React from 'react'
import { useEffect } from 'react'

export const useResize = () => {
    useEffect(() => {
        const windowResize = () => console.log('window_resize')
        window.addEventListener('resize', windowResize)
        return () => window.removeEventListener('resize', windowResize)
    }, [])
}
