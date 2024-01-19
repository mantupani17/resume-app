import { useContext, useState } from 'react'
import { TestContext } from '../../context'
import './index.css'
export function Card({...props}) {
    const [ state, setState ] = useState(false)
    const { appState, setAppState } = useContext(TestContext)
    const handleOnClick = (e) => {
        console.log(appState)
        if (!state){
            setAppState({
                text: 'Added Text',
                isDetails: true
            })
            return setState(true)
        }
        setAppState({
            text: 'Removed Text',
            isDetails: false
        })   
        return setState(false)
    }

    return (
        <div className="custom-card" onClick={handleOnClick}>
            {appState.text} - 
            {appState.isDetails ? 'Show' : 'Hide'} - 
            {props.content}
        </div>
    )
}