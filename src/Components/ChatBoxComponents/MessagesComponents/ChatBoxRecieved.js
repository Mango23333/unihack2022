import { Box } from '@mui/system';

const ChatBoxRecieved = ({ text }) => {
  return (
    <Box sx={{
      height: "5vh",  
      marginBottom: "1vh"
    }}>
      <Box sx={{
        height: "5vh",
        ///////////////////////
        width: "50vw",    // This part needs to be changed as the boxes will not have a set length. However, I don't know how to do that
        ///////////////////////
        marginRight: "auto",
        backgroundColor: "#82AA57",
        fontFamily:'Nunito',
        fontSize:'160%'
      }}>
        {text}
      </Box>
    </Box>
  )
}

export default ChatBoxRecieved