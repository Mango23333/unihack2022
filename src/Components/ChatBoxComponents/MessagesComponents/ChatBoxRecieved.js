import { Box } from '@mui/system';
import { Typography } from '@mui/material';

const ChatBoxRecieved = ({ text }) => {
  return (
    <Box maxWidth sx={{
      minHeight: "5vh",  
      marginBottom: "4vh",
      textAlign: 'left'
    }}>
      <Box sx={{
        borderRadius: '10px',
        maxWidth: 1/2,
        display: 'inline-flex',   
        backgroundColor: "#8AA861",
      }}>
        <Typography sx={{
          fontFamily:'Nunito',
          fontSize:'160%',
          textAlign: 'left',
          marginLeft: '1vw',
          marginRight: '1vw'
          }}>
          {text}
        </Typography>        
      </Box>
    </Box>
  )
}

export default ChatBoxRecieved