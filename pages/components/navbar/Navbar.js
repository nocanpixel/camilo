import styles from '../../../styles/Home.module.css';
import { IconButton, Menu, MenuItem } from '@mui/material';
//import Link from 'next/link';
import { Link, animateScroll as scroll } from 'react-scroll';
//ICONS
import LightModeIcon from '@mui/icons-material/LightMode';
import Brightness2Icon from "@mui/icons-material/Brightness2";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
import { styled } from '@mui/system';

export default function Navbar({ loaded, theme, setTheme }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl();
  };
  const ITEM_HEIGHT = 60;


  const sections = [
    {
      id: 1,
      name: 'Home',
      url: 'home',
    },
    {
      id: 2,
      name: 'Skills',
      url: 'skills',
    }
  ]

  const NavLinks = styled(Link)`color:white;&.active{color:#e8169e;}`

  const handleToggle = () => {
    scroll.scrollToTop();
  }
  return (
    <div className={styles.nav__bar}>
      {theme === "light" && loaded ? (
        <>
          <IconButton onClick={() => setTheme("dark")}>
            <Brightness2Icon
              alt="dark"
              style={{
                color: "var(--sd__color)",
                fontSize: "1.2rem",
                transform: "scalex(-1)",
              }}
            />
          </IconButton>
          <div className={styles.logo}>
            <span onClick={() => handleToggle()} >{'{>}'}</span>
          </div>
          <IconButton
            onClick={handleClick}
          >
            <MoreVertIcon sx={{ color: 'var(--sd__color)' }} />
          </IconButton>
          <Menu
            styles={{ color: 'red' }}
            id="long-menu"
            MenuListProps={{
              'aria-labelledby': 'long-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: '20ch',
                background: 'rgb(30, 30, 30)',
                color: 'white',
              },
            }}
          >

            {sections.map((elem) => {
              return (
                <NavLinks activeClass={'active'}  spy={true} exact='true' offset={-48.5} smooth={true} key={elem.id} to={elem.url}>
                  <MenuItem
                    sx={{
                      width: '100%',
                      '&:hover': {
                        bgcolor: 'rgb(45,45,45)'
                      },
                    }}
                  >
                    {elem.name}
                  </MenuItem>
                </NavLinks>
              )
            })}

          </Menu>
        </>
      ) : (
        <>
          <IconButton onClick={() => setTheme("light")}>
            <LightModeIcon
              alt="light"
              style={{
                color: "var(--sd__color)",
                fontSize: "1.2rem",
              }}
            />
          </IconButton>
          <div className={styles.logo}>
            <span onClick={() => handleToggle()}>{'{>}'}</span>
          </div>
          <IconButton
            onClick={handleClick}
          >
            <MoreVertIcon sx={{ color: 'var(--sd__color)' }} />
          </IconButton>
          <Menu
            styles={{ color: 'red' }}
            id="long-menu"
            MenuListProps={{
              'aria-labelledby': 'long-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: '20ch',
                background: 'rgb(30, 30, 30)',
                color: 'white',
              },
            }}
          >

            {sections.map((elem) => {
              return (
                <NavLinks activeClass={'active'}  spy={true} exact='true' offset={-48.5} smooth={true} key={elem.id} to={elem.url}>
                  <MenuItem
                    sx={{
                      width: '100%',
                      '&:hover': {
                        bgcolor: 'rgb(45,45,45)'
                      },
                    }}
                  >
                    {elem.name}
                  </MenuItem>
                </NavLinks>
              )
            })}

          </Menu>
        </>
      )}
    </div>
  );
};