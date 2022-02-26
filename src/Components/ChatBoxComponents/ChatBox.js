import { Box } from '@mui/system';
import Messages from './MessagesComponents/Messages';

const ChatBox = () => {
  return (
    <div>
        <Box sx={{
            border: '2px solid #6A874B',
            borderRadius: '4px',
            height: '76vh',
            flexDirection: 'row',
            marginLeft: "2vw",
            marginRight: "2vw",
            overflow: 'auto',
            backgroundColor: '#FFFCD6'
        }}>
            <Messages />
            <Box sx={{
                height: "10vh",
                padding: "3vh 0vh 3vh 0vh"
            }}>
                <input  type="text"
                        placeholder="Enter text here"
                        style={{
                            width: "80vw",
                            height: "4vh",
                            fontSize: "3vh",
                        }} />
            </Box>
        </Box>
    </div>
  )
}

export default ChatBox