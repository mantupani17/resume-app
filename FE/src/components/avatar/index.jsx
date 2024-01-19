import { useContext } from 'react';
import avatar from './default.png'
export function Avatar({...props}) {
    // const { appState } = useContext(TestContext)
    // if (!appState.isDetails) return (<></>)
    return (
        <div>
            <img src={avatar} alt="Avatar" class="avatar"></img>
        </div>
    )
}