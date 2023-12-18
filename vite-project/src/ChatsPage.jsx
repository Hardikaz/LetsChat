import './App.css'
import { MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'
const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('bc761a89-6c78-4c9f-85d6-07960c121dbc',props.user.username,
     props.user.secret)
    return <div style={{ height: '100vh'}}>
    <MultiChatSocket {...chatProps} />
    <MultiChatWindow {...chatProps} style={{ height: "100%"}} />

    </div>


}

export default ChatsPage