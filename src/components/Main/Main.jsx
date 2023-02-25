import React from 'react'
import './Main.scss'
import SimpleSlider from '../Slider/Slider'

const Main = () => {
  return (
    <div className='main'>
      <div className='intro'>
        <div className='text_block'>
          <h1>Time is running out,</h1>
          <p>but children need help now!</p>
        </div>
      </div>
      <div className='info'>
        <div className='btns'>
          <button>Fund</button>
          <button>I need help</button>
          <button>I want to help</button>
          <button>Become a volunteer</button>
        </div>
        <div className='icns'>
          <div className='icn'>
            <img src="https://i.ibb.co/nLnpdwp/oc.png" alt="" />
            <p>Fund programms</p>
          </div>
          <div className='icn'>
            <img src="https://i.ibb.co/NNrwSGZ/bag.png" alt="" />
            <p>Projects</p>
          </div>
          <div className='icn'>
            <img src="https://i.ibb.co/F7vs5XK/list.png" alt="" />
            <p>Documents</p>
          </div>
          <div className='icn'>
            <img src="https://i.ibb.co/GnJffz7/mes.png" alt="" />
            <p>Connect with us</p>
          </div>
          <div className='icn'>
            <img src="https://i.ibb.co/y5BTJ6n/peop.png" alt="" />
            <p>Fund Team</p>
          </div>
          <div className='icn'>
            <img src="https://i.ibb.co/2y5M9br/fav.png" alt="" />
            <p>Reports</p>
          </div>
        </div>
        <div className='thnks'>
          <p></p>
        </div>
      </div>
      <SimpleSlider />
    </div>
  )
}

export default Main
