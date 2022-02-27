import { Modal, tabsListUnstyledClasses, Typography } from '@mui/material';

const Header = ({ title }) => {
  return (
    <div>
        <Typography
            sx = {{
            fontFamily:'Nunito',
            fontSize:'260%',
            color: '#000000',
            textAlign: "left",  
            padding: '2vw 2vw 0.5vw 2vw'
        }}>
            {title}
        </Typography>
    </div>
  )
}

export default Header