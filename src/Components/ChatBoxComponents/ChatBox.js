import React, {useEffect} from 'react';
import { Box } from '@mui/system';
import Messages from './MessagesComponents/Messages';
import { TextField } from '@mui/material';

const ChatBox = () => {
    var textSendRef = React.useRef("");
    const [defaultTextValue, setDefaultTextValue] = React.useState("")
    var chatHistory = [];
    var currentChat = {
        texts: "",
    //patient have number 1 and bot have number 0
        sender: 0,
    };

    useEffect(() => {
        const listener = event => {
          if ((event.code === "Enter" || event.code === "NumpadEnter") && textSendRef.current.value.trim() != "") {
            event.preventDefault();
            currentChat.texts = textSendRef.current.value;
            currentChat.sender = 1;
            let currentChattemp = Object.assign({}, currentChat);
            chatHistory.push(currentChattemp);
            textSendRef.current.value = "";
            console.log(chatHistory);
            console.log("Enter key was pressed. Run your function.");
          }
        };
        document.addEventListener("keydown", listener);
        return () => {
          document.removeEventListener("keydown", listener);
        };
      }, []);

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
            <Messages chathis={chatHistory} />
        </Box>
        <Box sx={{
                height: "10vh",
            }}>
                <TextField 
                    type="text"
                    placeholder="Enter text here and press enter to send message"
                    inputRef={textSendRef}
                    value={textSendRef.current.value}
                    style={{
                        marginTop: '0.5vw',
                        borderRadius: '4px',
                        width: "90vw",
                        fontSize: "3vh",
                        backgroundColor: '#FDFAE2'
                    }}
                />
        </Box>
    </div>
  )
}

export default ChatBox