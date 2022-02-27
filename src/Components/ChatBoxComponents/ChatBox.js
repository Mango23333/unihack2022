import React, {useContext, useEffect} from 'react';
import { Box } from '@mui/system';
import Messages from './MessagesComponents/Messages';
import { TextField } from '@mui/material';
import axios from "axios";
import {PatientContext} from "../../Contexts/PatientContext";

const ChatBox = () => {
    const URL = "http://27.32.153.144:3000";

    const [patient, setPatient] = useContext(PatientContext);

    console.log(patient)

    var textSendRef = React.useRef("");
    const [chatHistory, setChatHistory] = React.useState([]);
    const messagesEndRef = React.createRef();
    var currentChat = {
        texts: "",
    //patient have number 1 and bot have number 0
        sender: 0,
    };

    function scrollToBottom(){
      messagesEndRef.current.scrollIntoView({behavior: 'smooth'})
    };

    function updateChatHistory(message){
      chatHistory.push(message)
      setChatHistory([...chatHistory])
    }

    useEffect(() => {
      scrollToBottom()
    })

    useEffect(() => {
        const listener = event => {
          if ((event.code === "Enter" || event.code === "NumpadEnter") && textSendRef.current.value.trim() != "") {
            event.preventDefault();
            console.log("Enter key was pressed. Run your function.");
            var specialResponse = false;

            for(var i = 0; i < patient.texts.length; i++){
                var keywords = patient.texts[i].keywords;
                for(var j = 0; j < keywords.length; j++){
                    var match = keywords[j];
                    if(textSendRef.current.value === match){
                        specialResponse = true;
                        updateChatHistory({sender: 1, texts: textSendRef.current.value})
                        updateChatHistory({sender: 0, texts: patient.texts[i].response})
                    }
                }
            }

            if(!specialResponse){
                axios.get(`${URL}/chat?text=${textSendRef.current.value}`).then((response) => {
                    updateChatHistory({sender: 0, texts: response.data})
                })
                currentChat.texts = textSendRef.current.value;
                currentChat.sender = 1;
                updateChatHistory(Object.assign({}, currentChat));
            }

            textSendRef.current.value = "";
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
            height: '70vh',
            flexDirection: 'row',
            marginLeft: "2vw",
            marginRight: "2vw",
            overflow: 'auto',
            backgroundColor: '#FFFCD6',
        }}>
            <Messages chathis={chatHistory} />
            <div ref={messagesEndRef}/>
        </Box>
        <Box sx={{
                height: "10vh",
            }}>
                <TextField
                    type="text"
                    placeholder="Enter text here and press enter to send message"
                    inputRef={textSendRef}
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
