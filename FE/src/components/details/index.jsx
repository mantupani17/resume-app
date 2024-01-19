import './index.css'
import { TestContext } from '../../context'
import { useContext } from 'react';
export function DetailsView({...props}) {
    const { appState } = useContext(TestContext)
    if (!appState.isDetails) return (<></>)
    return (
        <div className="details-card">
            Child - {appState.text} - {appState.isDetails ? 'Show' : 'Hide'}
        </div>
    )
}