import { Box } from '@mui/system';
import ChatBoxRecieved from './ChatBoxRecieved';
import ChatBoxSent from './ChatBoxSent';

const Messages = (props) => {

  return (
    <Box sx={{
        height: "64vh",
        padding: "1vh 2vw 0vh 2vw"
    }}>
      {
        props.chathis.map((chatcontent) =>{
          if (chatcontent.sender === 0)
          {
            return <ChatBoxRecieved text={chatcontent.texts}/>
          }
          else if (chatcontent.sender === 1)
          {
            return <ChatBoxSent text={chatcontent.texts}/>
          }
        })
      }
    </Box>
  )
}

export default Messages