import React, { useState, useEffect, useContext } from 'react'
import { Button } from 'reactstrap'
import { CardContext } from '../context/CardContext'

function FlipCards2() {
    var { Data, resethandler } = useContext(CardContext)
    const [Cards, setCards] = useState({...Data.data, cards : Data.data.cards.map((card) => {
        return {...card};
    })})
    console.log(Data.data, " initial ones")

    const handleCardClick = (card) => {
        //  console.log(card)
        if (Cards.isEven === true) {
            if (card.value !== Cards.prev.value) {
                setCards({
                    ...Cards, cards: Cards.cards.map((c) => {
                        if (c.id === card.id) {
                            c.isclicked = true;
                        }
                        return {...c};
                    })
                    , temp: true
                })

                setTimeout(() => {
                    setCards({
                        ...Cards, cards: Cards.cards.map((c) => {
                            if (c.id === Cards.prev.id || c.id === card.id) {
                                c.isclicked = false;
                            }
                            return {...c};
                        }), isEven: false, prev: null, moves: Cards.moves - 1, temp: false
                    })
                }, 100);

            }
            else {
                setCards({
                    ...Cards, cards: Cards.cards.map((c) => {
                        if (c.id === card.id) {
                            c.isclicked = true;
                        }
                        return {...c};
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
                    return {...c};
                }), isEven: true, prev: card
            })

        }

    }

   

    useEffect(() => {
        if (Cards.initial === true) {
            var temp = Cards.cards.map((c) => {
                return {...c};
            })
            setTimeout(() => {
                setCards({ ...Cards, initial: false , cards:temp})
            }, 2000);
        }

        else if (Cards.moves === 0 && Cards.temp === false) {
            var ans = true;
            var temp = Cards.cards.map((c) => {
                if (c.isclicked === false) {
                    ans = false;
                }
                return {...c};
            })
            if (ans === true) {
                resethandler();
                setCards({...Data.data, cards : Data.data.cards.map((card) => {
                    return {...card};
                })})
                alert("Hurray! You won:)");
            }
            else {
                resethandler();
                setCards({...Data.data, cards : Data.data.cards.map((card) => {
                    return {...card};
                })})
                alert("Sorry!!! You loose:(");
            }
        }
        else {
            var ans = true;
            var temp = Cards.cards.map((c) => {
                if (c.isclicked === false) {
                    ans = false;
                }
                return {...c};
            })
            if (ans === true) {
                resethandler();
                setCards({...Data.data, cards : Data.data.cards.map((card) => {
                    return {...card};
                })})
                alert("Hurray! You won:)");
            }
        }

    })

    const displayCards = Cards.initial === true ?
        Cards.cards.map((card) => {
            return (
                <div className="col-5 mr-2 mt-3" style={{ height: "200px", backgroundColor: "rgb(0, 33, 51)" }}>

                    <p style={{ fontSize: "100px", color: "rgb(255,255,255)", textAlign: "center" }}>{card.value}</p>

                </div>
            )
        })
        :
        Cards.cards.map((card) => {
            if (card.isclicked === true) {
                return (
                    <div className="col-5 mr-2 mt-3" style={{ height: "200px", backgroundColor: "rgb(0, 33, 51)" }}>
                        <p style={{ fontSize: "100px", color: "rgb(255,255,255)", textAlign: "center" }}>{card.value}</p>
                    </div>
                )
            }
            else {
                return (
                    <div className="col-5 mr-2 ml-2 mt-3" style={{ height: "200px" }} onClick={() => handleCardClick(card)}>
                        <img width="100%" height="100%" src="assets/cardImg.jpg" alt="Card image cap" />
                    </div>
                )
            }
        })

        const resethandler2 = () => {
            resethandler();
            setCards({...Data.data, cards : Data.data.cards.map((card) => {
                return {...card};
            })})
        }

        console.log(" fired ", Cards)

    return (
        <div className="container">
            <Button className="mt-3">Moves Left: {Cards.moves}</Button>{' '}
            <Button className="mt-3" color="info" onClick={resethandler2}>Reset</Button>
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