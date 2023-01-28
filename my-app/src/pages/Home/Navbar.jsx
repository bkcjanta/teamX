import React from 'react'
import Mobnav from './Mobnav';
import styles from "./Navbar.module.css";
import Link from 'next/link';
import { Button, Text } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from '@chakra-ui/react'


const Navbar = () => {
  return (
    <div className={styles.nav_main}>
    <div className={styles.nav}>
        <div className={styles.nav_inner_div} >
            <div>
                <img width={"120px"} src="https://images.squarespace-cdn.com/content/v1/5864d96703596e675552b72c/1582886393955-NBHP2X78RYCL4D28FQH0/Logo+Testlab+klein.jpg" alt="logo" />
            </div>
            <div>
                <Button variant={"none"} bg={"none"}>Home</Button>
                <Button variant={"none"} bg="none">About</Button>
             <Menu>
  <MenuButton variant={"none"}  bg="white" as={Button} rightIcon={<ChevronDownIcon />}>
    Test Series
  </MenuButton>
  <MenuList>
    <MenuItem>
    <Link href="/testseries">SSC</Link>
    </MenuItem>
    <MenuItem>Banking</MenuItem>
    <MenuItem>CPO</MenuItem>
    <MenuItem>Railways</MenuItem>
    <MenuItem>UPSC</MenuItem>
  </MenuList>
</Menu>
                <Button variant={"none"} bg="none">Courses</Button>
                <Button variant={"none"} bg="none">Blogs</Button>
            </div>
            <div>
                <button>Cart</button>
                <button>
                <Link href="/Log">Login</Link>
                </button>
            </div>
        </div>
    </div>
    <div className={styles.Mobnav}>
                <Mobnav />
            </div>
            </div>
  )
}

export default Navbar