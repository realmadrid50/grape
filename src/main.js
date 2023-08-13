import React from 'react'
import './main.css'
import Arbitrum from './arb.svg'
import Twitter from './socials-twitter.svg'
import Telegram from './socials-telegram.svg'
import Discord from './socials-discord.svg'
import Medium from './socials-medium.svg'



function main() {

    const openTwitter = () => {
        window.open("https://twitter.com/GrapeDefi");
    }

    const tweet = () => {
        window.open("https://twitter.com/intent/tweet?text=My%20proof%20of%20%24GRAPE%20for%20%40GrapeDefi%20%F0%9F%8D%87&")
    }
    const telegram = () => {
        window.open("https://t.me/GrapeFi")
    }

  return (
    <div className='wrap'>

        <div className='title'>
            <h1>GRAPE IS <br/>COMING</h1>
        </div>

        <div className='paragraph'>
            <p>
            The first Node & Auto-Rebase Protocol coming on Base.</p>
        </div>

        <div className='buts'>
            <button onClick={tweet}>Proof of $GRAPE</button>
            
        </div>

        <div className='little-title'>
            <p>NETWORKS SUPPORTED</p>
            <div className='picture'>
                <img src={Arbitrum}></img>
            </div>
        </div>

        <ul className='socials'>
            <li onClick={openTwitter}>
                <img src={Twitter}></img>
            </li>
            <li>
                <img src={Telegram} onClick={telegram}></img>
            </li>
            {/* <li>
                <img src={Discord}></img>
            </li> */}
        </ul>
    </div>
  )
}

export default main