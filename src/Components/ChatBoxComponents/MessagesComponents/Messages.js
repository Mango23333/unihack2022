import { Box } from '@mui/system';
import ChatBoxRecieved from './ChatBoxRecieved';
import ChatBoxSent from './ChatBoxSent';

const Messages = () => {
  return (
    <Box sx={{
        height: "64vh",
        padding: "1vh 2vw 0vh 2vw"
    }}>
        <ChatBoxRecieved text="Placeholder"/>
        <ChatBoxSent text="Placeholder"/>
    </Box>
  )
}

export default Messages