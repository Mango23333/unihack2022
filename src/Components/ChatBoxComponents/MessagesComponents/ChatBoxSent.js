import { Box } from '@mui/system';
import { Typography } from '@mui/material';

const ChatBoxSent = ({ text }) => {
  return (
    <Box maxWidth sx={{
      minHeight: "5vh",  
      marginBottom: "4vh",
      textAlign: 'right',
    }}>
      <Box sx={{
        borderRadius: '10px',
        maxWidth: 1/2,
        display: 'inline-flex',
        backgroundColor: "#ABBC92",
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

export default ChatBoxSent