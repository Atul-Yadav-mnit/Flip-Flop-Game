import React, { useState, useEffect, useContext } from 'react'
import { Card, CardTitle, Button } from 'reactstrap'
import { CardContext } from '../context/CardContext'

function FlipCards2() {
    const {Data} = useContext(CardContext)
    const [Cards, setCards] = useState(Data.data)

    const handleCardClick = (card) => {
        //  console.log(card)


        if (Cards.isEven === true) {
            if (card.value !== Cards.prev.value) {
                setCards({
                    ...Cards, cards: Cards.cards.map((c) => {
                        if (c.id === Cards.prev.id || c.id === card.id) {
                            c.isclicked = false;
                        }
                        return c;
                    }), isEven: false, prev: null, moves: Cards.moves - 1
                })
            }
            else {
                setCards({
                    ...Cards, cards: Cards.cards.map((c) => {
                        if (c.id === card.id) {
                            c.isclicked = true;
                        }
                        return c;
                    }), isEven: false, prev: null, moves: Cards.moves - 1
                })
            }

        }
        else {
            setCards({
                ...Cards, cards: Cards.cards.map((c) => {
                    if (c.id === card.id) {
                        c.isclicked = true;
                    }
                    return c;
                }), isEven: true, prev: card
            })

        }

    }

    console.log(" fired ", Cards)

    useEffect(() => {
        if (Cards.initial === true) {
            setTimeout(() => {
                setCards({ ...Cards, initial: false })
            }, 2000);
        }

        else if (Cards.moves === 0) {
            setCards({
                ...Cards, cards: Cards.cards.map((c) => {
                    c.isclicked = false;
                    return c;
                }), isEven: false, prev: null, moves: 3, initial: true
            })
            alert("Sorry!!! You loose:(");
        }
        else {
            var ans = true;
            Cards.cards.map((c) => {
                if (c.isclicked === false) {
                    ans = false;
                }
                return c;
            })
            if (ans === true) {
                setCards({
                    ...Cards, cards: Cards.cards.map((c) => {
                        c.isclicked = false;
                        return c;
                    }), isEven: false, prev: null, moves: 20, initial: true
                })
                alert("Hurray! You won:)");
            }

        }
    })

    const displayCards = Cards.initial === true ?
        Cards.cards.map((card) => {
            return (
                <div className="col-5 mr-2 mt-3" style={{ border: "red 2px solid", height: "200px" }}>
                <Card id={card.id}>
                <CardTitle>{card.value}</CardTitle>
                </Card>
                </div>
            )
        })
        :
        Cards.cards.map((card) => {
            if (card.isclicked === true) {
                return(
                    <div className="col-5 mr-2 ml-2 mt-3 p-1" style={{  height:"200px"}}>
                    {card.value}
                    </div>
                )
            }
            else {
                return (
                    <div className="col-5 mr-2 ml-2 mt-3" style={{ height:"200px"}} onClick={() => handleCardClick(card)}>
                    <img width="100%" height="100%" src="assets/cardImg.jpg" alt="Card image cap" />
                    </div>
                )
            }
        })


        const resethandler = () => {
            setCards(Data.data)
        }


    return (
        <div className="container">
            <Button className="mt-3">Moves Left: {Cards.moves}</Button>{' '}
            <Button className="mt-3" color="info" onClick={resethandler}>Reset</Button>
            <div className="row mt-3">
                {displayCards}
            </div>
        </div>
    )
}

export default FlipCards2



/*

const displayCards = Even.initial === true ? 
    Cards.map((card) => {
        return(
            <div className="col-5 mr-2 mt-3" >
            <Card id={card.id}>
            <CardTitle>{card.value}</CardTitle>
            </Card>
            </div>
        )
    })
    :Cards.map((card) => {
        if(card.isclicked === true)
        {
            return(
                <div className="col-5 mr-2 ml-2 mt-3 p-1" style={{  height:"200px"}}>
                {card.value}
                </div>
            )
        }
        else{
            return(
                <div className="col-5 mr-2 ml-2 mt-3" style={{ height:"200px"}} onClick={() => handleCardClick(card)}>
                    <img width="100%"  height="100%" src="assets/cardImg.jpg" alt="Card image cap" />
                </div>
            )
        }
    })

    if(Even.initial === true)
    {
        setTimeout(() => {
            console.log("herereererere")
            setEven({...Even,initial:false})
        }, 5000);
        console.log("herereererere")
    }
  
    return (
        <div className="container">
            <Button className="mt-3">Moves Left: {Moves.moves}</Button>
           <div className="row mt-3">
               <div className="col-3"></div>
               <div className="col-6">
                   <div className = "row">
                    {displayCards}
                   </div>
               </div>
               <div className="col-3"></div>
           </div>
           
          </div> 
        
    )
}
*/