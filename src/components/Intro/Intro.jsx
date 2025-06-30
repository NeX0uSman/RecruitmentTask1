import React, { useEffect } from 'react'
import headline from '../../assets/headline.png'
import cl from './Intro.module.scss'
import shadow from '../../assets/shadow.png'

const Intro = ({ toNext }) => {

    useEffect(() => {
        console.log('ad_load')
        const timer = setTimeout(() => {
            toNext()
        }, 8000)
        return () => clearTimeout(timer)
    }, [])
    return (
        <div className={cl.intro_container}>
            <div className={cl.headline_wrapper}>
                <img src={headline} alt='headline' className={cl.headline} />
                <img src={shadow} alt="shadow" className={cl.shadow} />
            </div>
        </div>
    )
}

export default Intro