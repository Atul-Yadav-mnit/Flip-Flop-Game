import React, { useState, useEffect, useContext } from 'react'
import { Button } from 'reactstrap'
import { CardContext } from '../context/CardContext'

function FlipCards4() {
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
                <div className="col-md-2 col-4 ml-4 mr-4 mb-3" style={{ height: "100px",backgroundColor:"rgb(0, 33, 51)" }}>
                    <p style={{fontSize:"50px", color:"rgb(255,255,255)",textAlign:"center"}}>{card.value}</p>
                </div>
            )
        })
        :
        Cards.cards.map((card) => {
            if (card.isclicked === true) {
                return (
                    <div className="col-md-2 col-4 ml-4 mr-4 mb-3" style={{ height: "100px",backgroundColor:"rgb(0, 33, 51)" }}>
                    <p style={{fontSize:"50px", color:"rgb(255,255,255)",textAlign:"center"}}>{card.value}</p>
                </div>
                )
            }
            else {
                return (
                    <div className="col-md-2 col-4 ml-4 mr-4 mb-3" style={{ height: "100px" }} onClick={() => handleCardClick(card)}>
                        <img width="100%" height="100" src="assets/cardImg.jpg" alt="Card image cap" />
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

 export default FlipCards4


// import React, { useState, useEffect, useContext } from 'react'
// import {Button } from 'reactstrap'
// import { CardContext } from '../context/CardContext'

// function FlipCards4() {
//     const {Data} = useContext(CardContext)
//     const [Cards, setCards] = useState(Data.data)

//     const handleCardClick = (card) => {
//         //  console.log(card)
//         if (Cards.isEven === true) {
//             if (card.value !== Cards.prev.value) {
//                     setCards({
//                     ...Cards, cards: Cards.cards.map((c) => {
//                         if (c.id === card.id) {
//                             c.isclicked = true;
//                         }
//                         return c;
//                     })
//                 ,temp:true})
                             
//                 setTimeout(() => {
//                     setCards({
//                         ...Cards, cards: Cards.cards.map((c) => {
//                             if (c.id === Cards.prev.id || c.id === card.id) {
//                                 c.isclicked = false;
//                             }
//                             return c;
//                         }), isEven: false, prev: null, moves: Cards.moves - 1
//                     ,temp:false})
//                 }, 100);
                
//             }
//             else {
//                 setCards({
//                     ...Cards, cards: Cards.cards.map((c) => {
//                         if (c.id === card.id) {
//                             c.isclicked = true;
//                         }
//                         return c;
//                     }), isEven: false, prev: null, moves: Cards.moves - 1
//                 })
//             }

//         }
//         else {
//             setCards({
//                 ...Cards, cards: Cards.cards.map((c) => {
//                     if (c.id === card.id) {
//                         c.isclicked = true;
//                     }
//                     return c;
//                 }), isEven: true, prev: card
//             })

//         }

//     }

//     console.log(" fired ", Cards)

//     useEffect(() => {
//         if (Cards.initial === true) {
//             setTimeout(() => {
//                 setCards({ ...Cards, initial: false })
//             }, 2000);
//         }

//         else if (Cards.moves === 0 && Cards.temp === false) {
//             var ans = true;
//             Cards.cards.map((c) => {
//                 if (c.isclicked === false) {
//                     ans = false;
//                 }
//                 return c;
//             })
//             if (ans === true) {
//                 setCards({
//                     ...Cards, cards: Cards.cards.map((c) => {
//                         c.isclicked = false;
//                         return c;
//                     }), isEven: false, prev: null, moves: 20, initial: true
//                 })
//                 alert("Hurray! You won:)");
//             }
//             else {
//                 setCards({
//                     ...Cards, cards: Cards.cards.map((c) => {
//                         c.isclicked = false;
//                         return c;
//                     }), isEven: false, prev: null, moves: 20, initial: true
//                 })
//                 alert("Sorry!!! You loose:(");
//             }
//         }
//         else {
//             var ans = true;
//             Cards.cards.map((c) => {
//                 if (c.isclicked === false) {
//                     ans = false;
//                 }
//                 return c;
//             })
//             if (ans === true) {
//                 setCards({
//                     ...Cards, cards: Cards.cards.map((c) => {
//                         c.isclicked = false;
//                         return c;
//                     }), isEven: false, prev: null, moves: 20, initial: true
//                 })
//                 alert("Hurray! You won:)");
//             }
//         }

//     })

//     const displayCards = Cards.initial === true ?
//         Cards.cards.map((card) => {
//             return (
//                 <div className="col-md-2 col-4 ml-4 mr-4 mb-3" style={{ height: "100px",backgroundColor:"rgb(0, 33, 51)" }}>
//                     <p style={{fontSize:"50px", color:"rgb(255,255,255)",textAlign:"center"}}>{card.value}</p>
//                 </div>
//             )
//         })
//         :
//         Cards.cards.map((card) => {
//             if (card.isclicked === true) {
//                 return (
//                     <div className="col-md-2 col-4 ml-4 mr-4 mb-3" style={{ height: "100px",backgroundColor:"rgb(0, 33, 51)" }}>
//                     <p style={{fontSize:"50px", color:"rgb(255,255,255)",textAlign:"center"}}>{card.value}</p>
//                 </div>
//                 )
//             }
//             else {
//                 return (
//                     <div className="col-md-2 col-4 ml-4 mr-4 mb-3" style={{ height: "100px" }} onClick={() => handleCardClick(card)}>
//                         <img width="100%" height="100" src="assets/cardImg.jpg" alt="Card image cap" />
//                     </div>
//                 )
//             }
//         })


//         const resethandler = () => {
//             setCards(Data.data)
//         }


//     return (
//         <div className="container">
//             <Button className="mt-3">Moves Left: {Cards.moves}</Button>{' '}
//             <Button className="mt-3" color="info" onClick={resethandler}>Reset</Button>
//             <div className="row mt-3">
//                 {displayCards}
//             </div>
//         </div>
//     )
// }

// export default FlipCards4
// /*
// {
//         cards: [
//             { value: "1", id: "1", isclicked: false },
//             { value: "7", id: "2", isclicked: false },
//             { value: "3", id: "3", isclicked: false },
//             { value: "2", id: "4", isclicked: false },
//             { value: "5", id: "5", isclicked: false },
//             { value: "5", id: "6", isclicked: false },
//             { value: "2", id: "7", isclicked: false },
//             { value: "6", id: "8", isclicked: false },
//             { value: "1", id: "9", isclicked: false },
//             { value: "6", id: "10", isclicked: false },
//             { value: "3", id: "11", isclicked: false },
//             { value: "7", id: "12", isclicked: false },
//             { value: "8", id: "13", isclicked: false },
//             { value: "4", id: "14", isclicked: false },
//             { value: "8", id: "15", isclicked: false },
//             { value: "4", id: "16", isclicked: false }
//         ],
//         isEven: false,
//         prev: null,
//         initial: true,
//         moves: 20
//     }

// */