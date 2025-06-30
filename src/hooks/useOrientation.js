import React, { useEffect, useState } from 'react'

export const useOrientation = () => {
    const [portraitOrientation, setPortraitOrientation] = useState(window.matchMedia('(orientation: portrait)').matches)

    useEffect(() => {
        const portrait = window.matchMedia("(orientation: portrait)");
        const onChange = (e) => setPortraitOrientation(e.matches)
        portrait.addEventListener('change', onChange)
        return () => portrait.removeEventListener('change', onChange)
    }, [])

    return portraitOrientation
}