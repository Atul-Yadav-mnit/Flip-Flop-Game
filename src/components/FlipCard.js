import {useContext} from 'react'
import { CardContext } from '../context/CardContext'
import FlipCard2 from './FlipCards2'
import FlipCard4 from './FlipCards4'

function FlipCard() {
    const {Data} = useContext(CardContext)
    const fd = Data.type === '2' ? <FlipCard2/>:<FlipCard4/>
    console.log("here for fd")
    return (
        <div>
            {fd}
        </div>
    )
}

export default FlipCard
