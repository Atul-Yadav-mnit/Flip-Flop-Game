import React, { createContext,useState } from 'react'
export const CardContext = createContext();

function CardContextProvider(props) {

    var arr4 = {
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
        moves: 20
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
        moves: 3
    };

    

    const [Data, setData] = useState({
        type: '2',
        data: arr2
    });
    
    const handler2 = () =>{
        setData({type:'2',data:arr2})
    };
    const handler4 = () => {
        setData({type:'4',data:arr4})
    };
    const resethandler = () => {
        if(Data.type == '2')
        {
            setData({...Data,data:arr2})
        }
        else{
            setData({...Data,data:arr4})
        }
    };
    return (
        <CardContext.Provider value={{Data, handler2, handler4, resethandler}}>
            {props.children}
        </CardContext.Provider>
    )
}

export default CardContextProvider;