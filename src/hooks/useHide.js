import React, { useEffect } from 'react'

export const useHide = () => {
    useEffect(() => {
        const pageHidden = () => {
            if (document.hidden) {
                console.log('page_hide')
            }
        }
        document.addEventListener('visibilitychange', pageHidden)
        return () => document.removeEventListener('visibilitychange', pageHidden)
    })
}