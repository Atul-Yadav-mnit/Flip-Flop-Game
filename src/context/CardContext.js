import React, { createContext,useState } from 'react'
export const CardContext = createContext();


function CardContextProvider(props) {
    

    const shuffle = (array) => {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
    
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      }
      
      
      

    const arr4 = {
        cards: [
            { value: "1", id: "1", isclicked: false },
            { value: "7", id: "2", isclicked: false },
            { value: "3", id: "3", isclicked: false },
            { value: "2", id: "4", isclicked: false },
            { value: "5", id: "5", isclicked: false },
            { value: "5", id: "6", isclicked: false },
            { value: "2", id: "7", isclicked: false },
            { value: "6", id: "8", isclicked: false },
            { value: "1", id: "9", isclicked: false },
            { value: "6", id: "10", isclicked: false },
            { value: "3", id: "11", isclicked: false },
            { value: "7", id: "12", isclicked: false },
            { value: "8", id: "13", isclicked: false },
            { value: "4", id: "14", isclicked: false },
            { value: "8", id: "15", isclicked: false },
            { value: "4", id: "16", isclicked: false }
        ],
        isEven: false,
        prev: null,
        initial: true,
        moves: 20,
        temp : false
    };


    var arr2 = {
        cards: [
            { value: "1", id: "1", isclicked: false },
            { value: "2", id: "2", isclicked: false },
            { value: "1", id: "3", isclicked: false },
            { value: "2", id: "4", isclicked: false }
        ],
        isEven: false,
        prev: null,
        initial: true,
        moves: 3,
        temp:false
    };


    console.log("Before shuffling" ,arr2.cards);
    shuffle(arr2.cards);
    console.log("After shuffling" ,arr2.cards);
   
        var temp2 = [];
        for(var i=0;i<arr2.cards.length;i++)
        {
            temp2.push({...arr2.cards[i]})
        }
        console.log(temp2,"temp of initial")
        const [Data, setData] = useState({
            type: '2',
            data: {...arr2, cards:temp2 }
        });
    
    
    const handler2 = () =>{
        console.log("Here at handler2")
            var temp = [];
            shuffle(arr2.cards);
            for(var i=0;i<arr2.cards.length;i++)
            {
                temp.push({...arr2.cards[i]})
            }
            console.log(temp,"temp")
            setData({type:'2',data:{...arr2,cards:temp}})
    };

    const handler4 = () => {
        var temp = [];
        shuffle(arr4.cards);
        for(var i=0;i<arr4.cards.length;i++)
        {
            temp.push({...arr4.cards[i]})
        }
        console.log(temp,"temp")
        setData({type:'4',data:{...arr4,cards:temp}})
    };

    const resethandler = () => {
        if(Data.type === '2')
        {
            console.log("Here at resethandler")
            var temp = [];
            shuffle(arr2.cards);
            for(var i=0;i<arr2.cards.length;i++)
            {
                temp.push({...arr2.cards[i]})
            }
            console.log(temp,"temp of reset")
            setData({type:'2',data:{...arr2,cards:temp}})
        }
        else{
            console.log("Here at resethandler")
            var temp = [];
            shuffle(arr4.cards);
            for(var i=0;i<arr4.cards.length;i++)
            {
                temp.push({...arr4.cards[i]})
            }
            console.log(temp,"temp of reset")
            setData({type:'4',data:{...arr4,cards:temp}})
        }
    };
    
    return (
        <CardContext.Provider value={{Data, handler2, handler4, resethandler}}>
            {props.children}
        </CardContext.Provider>
    )
}

export default CardContextProvider;