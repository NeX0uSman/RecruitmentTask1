import React from 'react'
import { useEffect } from 'react'

export const useSceneChange = (scene) => {
    useEffect(() => {
        console.log(`scene_change:${scene}`)
    }, [scene])
}