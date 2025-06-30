import { useState } from 'react'
import cl from './App.module.scss'
import Intro from './components/Intro/Intro'
import Gallery from './components/Gallery/Gallery'
import Video from './components/Video/Video'
import { useOrientation } from './hooks/useOrientation'
import { useResize } from './hooks/useResize'
import { useHide } from './hooks/useHide'
import { useSceneChange } from './hooks/useSceneChange'

function App() {

  const [scene, setScene] = useState('intro')
  const [slideClicked, setSlideClicked] = useState(null)

  const portraitOrientation = useOrientation()


  useSceneChange(scene)
  useHide()
  useResize()

  return (
    <>
      {!portraitOrientation ?
        (
          <>
            <div className={cl.error_div}>
              <p>Please rotate your phone back to the portrait orientation</p>
            </div>
          </>
        )
        :
        (
          <>
            <div className={cl.page}>
              {scene == 'intro' && <Intro toNext={() => { setScene('gallery') }} />}
              {scene == 'gallery' && <Gallery onSlideClick={(index) => {
                setSlideClicked(index)
                console.log(`user_interaction:slide_clicked:${index + 1}`)
                setScene('video')
              }} />}
              {scene == 'video' && <Video slideIndex={slideClicked} />}
            </div>
          </>
        )
      }
    </>
  )
}

export default App
