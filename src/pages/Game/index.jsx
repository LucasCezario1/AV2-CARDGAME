import Card from '../../components/Card'
import './style.css'

import { words } from '../../assets/words'
import { useEffect, useState } from 'react'
import Xp from '../../components/Xp'

const TOTAL_CARDS = 4

export default function Game() {

    const XP_MOVE = 10
    const [cards, setCards] = useState([])
    const [xp, setXP] = useState(0)

    useEffect(() => {
        let random = words.sort(() => Math.random() - 0.5)
        setCards(random.slice(0, TOTAL_CARDS))
    }, [])

    const increaseXP = () => {
        console.log('increaseXP')
        setXP(xp + XP_MOVE)
    }

    const decreaseXP = () => {
        console.log('decreaseXP')
        setXP(xp - XP_MOVE)
    }

    return (
        <>
            <div id="container-topo">
                <div className='titulo'>CARD GAME DREAM 
                <img src="/src/img/logo.png" alt="" />
                </div>
                
                <Xp total={xp} />
            </div>
            <h1>Game Cards</h1>
            <div id='caixa-cards'>
               
                {cards.map((word, idx) => <Card increaseXP={increaseXP} decreaseXP={decreaseXP} key={idx} content={word} />)}
            </div>

        </>
    )
}