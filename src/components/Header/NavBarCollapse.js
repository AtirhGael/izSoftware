import React from "react";
import {Button, Menu, MenuItem, Typography} from '@mui/material';
import Box from '@mui/material/Box';
import BtnCollapse from "./Component/BtnCollapse";
import Link from '@mui/material/Link';
import styled from "@emotion/styled";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './NavStyles.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function NavBarCollapse (){

    const [anchorEle, setAnchorEle] = React.useState(null);

  const handleMouseOver = (event) => {
    setAnchorEl1ee(event.currentTarget);
  };

  const handleMouseOut = () => {
    setAnchorEl1ee(null);
  };


    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorEl2, setAnchorEl2] = React.useState(null);
    const [anchorEl1, setAnchorEl1] = React.useState(null);
    const [anchorEl1ee, setAnchorEl1ee] = React.useState(null);

    const open = Boolean(anchorEl);
    const open1 = Boolean(anchorEl1);
    const open2 = Boolean(anchorEl2);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClick1 = (event) => {
        setAnchorEl1(event.currentTarget);
      };
  
    const handleClick2 = (event) => {
        setAnchorEl2(event.currentTarget);
      };
  

    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleClose1 = () => {
        setAnchorEl1(null);
      };
    const handleClose2 = () => {
        setAnchorEl2(null);
      };

    const ButtonStyledLink = styled(Button)({
        '&:hover': {
            backgroundColor: 'rgba(0,0,0,0)'
          },
          '&:after': {
            bottom: 0,
            content: "''",
            display: 'block',
            height: 2,
            left: 0,
            position: 'absolute',
            backgroundColor: '#00d8ff',
            transition: 'width 0.5s ease 0s, left 0.5s ease 0s',
            width: 0,
          },
          '&:hover:after': {
                width:' 100%', 
                left: 0,
          }
    })

    return (
        <div sx={{position: 'absolute', right: 0}}>
            
            <BtnCollapse>
                <Link href='/' underline="none" color="textPrimary">
                    <MenuItem>            
                        Home
                    </MenuItem>
                </Link>
                <Link href='/services' underline="none" color="textPrimary">
                    <MenuItem>
                        Services
                    </MenuItem>
                </Link>
                <Link href='/industries' underline="none" color="textPrimary">
                    <MenuItem>
                        Industries
                    </MenuItem>
                </Link>
                <Link href='/case-study' underline="none" color="textPrimary">
                    <MenuItem>
                        Case Studies
                    </MenuItem>
                </Link>
                <Link href='/blog' underline="none" color="textPrimary">
                    <MenuItem>
                        Blog
                    </MenuItem>
                </Link>
                <Link href='/about' underline="none" color="textPrimary">
                    <MenuItem>
                        About
                    </MenuItem>
                </Link>
                <Link href="/contact-us" underline="none" color="textPrimary">
                    <MenuItem>
                        Let's Talk
                    </MenuItem>
                </Link>                 
            </BtnCollapse>

            <div sx={{width: "100%"}} id="appbar-collapse">
                <Box sx={{display: {xs: 'none', sm: 'block', md: 'block'} }} >
            
                    <Link  href='/' underline="none" color="textPrimary">
                        <ButtonStyledLink  color="inherit">         
                            <Typography sx={{ fontWeight: 420}} variant="body1"> 
                                Home
                            </Typography>
                        </ButtonStyledLink>
                    </Link>
                    <Link href='#' underline="none" color="textPrimary"  endIcon={<KeyboardArrowDownIcon />}
                     aria-controls={open ? 'basic-menu' : undefined}
                     aria-haspopup="true"
                     aria-expanded={open ? 'true' : undefined}
                     onClick={handleClick}
                    >
                        <ButtonStyledLink color="inherit">           
                            <Typography sx={{ fontWeight: 420}} variant="body1"> 
                                Services
                            </Typography>
                        </ButtonStyledLink>
                    </Link>
                    <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                            sx={{marginTop: '20px',  borderRadius: 6}}
                        >
                            <MenuItem component={"a"} href={"/services/software-consulting"}> Software Consulting</MenuItem>
                            <MenuItem component={"a"} href={"/services/software-development"}>Software Development</MenuItem>
                            <MenuItem component={"a"} href={"/services/software-consulting"}>e-Government Development</MenuItem>
                            <MenuItem component={"a"} href={"/professiona-services"}>Testing and QA</MenuItem>
                            <MenuItem component={"a"} href={"/services/software-consulting"}>IT Support</MenuItem>
                            <MenuItem component={"a"} href={"/services/software-consulting"}>Cloud Solutions</MenuItem>
                    </Menu>

                    <Link href='#' underline="none" color="textPrimary"  endIcon={<KeyboardArrowDownIcon />}
                     aria-controls={open1 ? 'basic-menu' : undefined}
                     aria-haspopup="true"
                     aria-expanded={open1? 'true' : undefined}
                     onClick={handleClick1}
                    >
                        <ButtonStyledLink color="inherit">           
                            <Typography sx={{ fontWeight: 420}} variant="body1"> 
                                Industries
                            </Typography>
                        </ButtonStyledLink>
                    </Link>
                    <Menu
                            id="basic-menu"
                            anchorEl={anchorEl1}
                            open={open1}
                            onClose={handleClose1}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                            sx={{marginTop: '20px',  borderRadius: 6}}
                        >
                            <MenuItem component={"a"} href={"/healthcare/services"}> Healthcare</MenuItem>
                            <MenuItem component={"a"} href={"/professiona-services"}>professiona</MenuItem>
                            <MenuItem component={"a"} href={"/careers"}>Careers</MenuItem>
                            
                    </Menu>
                   
                    <Link href='/case-studies' underline="none" color="textPrimary">
                        <ButtonStyledLink color="inherit">           
                            <Typography sx={{ fontWeight: 420}} variant="body1"> 
                                Case Studies
                            </Typography>
                        </ButtonStyledLink>
                    </Link>
                   
                    <Link href="/about" underline="none" color="textPrimary">
                        <ButtonStyledLink color="inherit">          
                            <Typography sx={{ fontWeight: 420}} variant="body1"> 
                                About
                            </Typography>
                        </ButtonStyledLink>
                    </Link>

                    <Link href='#' underline="none" color="textPrimary"  endIcon={<KeyboardArrowDownIcon />}
                     aria-controls={open2 ? 'basic-menu' : undefined}
                     aria-haspopup="true"
                     aria-expanded={open2 ? 'true' : undefined}
                    //  onClick={handleClick2}
                     onMouseEnter={handleMouseOver}
                     onMouseLeave={handleMouseOut}
                     
                    >
                        <ButtonStyledLink color="inherit"
                        endIcon={<ExpandMoreIcon />}
                        >           
                            <Typography sx={{ fontWeight: 420}} variant="body1"> 
                                Connect
                            </Typography>
                        </ButtonStyledLink>
                    </Link>
                    <Menu
                            id="basic-menu"
                            anchorEl={anchorEl1ee}
                            open={Boolean(anchorEl1ee)}
                            onClose={handleMouseOut}

                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                            sx={{marginTop: '20px',  borderRadius: 6}}
                        >
                            <div style={{fontSize:18,textAlign:'center'}}>Stay up to date</div>
                            <MenuItem component={"a"} href={"/blog"}>  
                            <div className="nav-items-flex">
                            <div className="nav-title-title">
                            Blog
                            </div> 
                            <div className="nav-title-text">
                                Get the latest salsforce product news and technical article
                            </div>
                            </div>
                            
                            </MenuItem>
                            <MenuItem component={"a"} href={"/events"}>  
                            <div className="nav-items-flex">
                            <div className="nav-title-title">
                            Events
                            </div> 
                            <div className="nav-title-text">
                                join In-person and online events accros the salsforce ecosystem
                            </div>
                            </div>
                            </MenuItem>
                            <MenuItem component={"a"} href={"/services/software-consulting"}>  
                            <div className="nav-items-flex">
                            <div className="nav-title-title">
                            Videos
                            </div> 
                            <div className="nav-title-text">
                              Explore New features, tools, tips,tutorials,and more 
                            </div  >
                            <div className="nav-title-text"> with on-demand  and live streaming videos</div>
                            </div>
                            </MenuItem>
                           
                    </Menu>

    
                    <Link href="/contact-us" underline="none" color="textPrimary">
                        <Button variant="contained" color="primary">
                            <Typography sx={{ fontWeight: 420}} variant="body1"> 
                                Let's Talk !
                            </Typography>
                        </Button>
                    </Link>      
                </Box> 
            </div>
        </div>
    );
}
export default NavBarCollapse;
