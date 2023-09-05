import { Box, Button, Flex, Heading, IconButton, Link, useBoolean } from '@chakra-ui/react'
import React from 'react'
import {CloseIcon, HamburgerIcon} from "@chakra-ui/icons";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Navbar = () => {
    AOS.init();
    const Links =[
        {
            to:"/",
            lable:"Home"
        },
        {
            to:"/about",
            lable:"About"
        },{
            to:"/blog",
            lable:"Blog"
        },{
            to:'/contact',
            lable:"Contact"
        },{
            to:"/register",
            lable:"Register"
        },{
            to:"/login",
            lable:"Login"
        }
    ]

    const [flag,setFlag] = useBoolean(false);
    console.log(flag)

  return (
    <>
    <Box>
        <Box boxSizing="border-box" padding={"0px 20px"} width={"90%"} margin={"auto"} border={"2px solid transprent"} >
            <Flex borderBottom={"2px solid lightgray"} display={{base:"none", md:"flex"}} height={"60px"} alignItems={"center"} justifyContent={"space-between"}>
                <Box>
                    <Heading>Sai Kiran</Heading>
                </Box>
                <Box>
                    <Flex>
                        {
                            Links.map((item)=>(
                                <Link key={item.id}><Button _hover={{bgColor:"gray", color:"white"}} variant={"ghost"} ml={"10px"}>{item.lable}</Button></Link>
                            ))
                        }
                    </Flex>
                </Box>
            </Flex>
          <Box onClick={setFlag.on} pos={"fixed"} top={"1rem"} right={"1rem"} display={{base:"block", md:"none"}}>
          <IconButton icon={<HamburgerIcon/>}></IconButton></Box> 
        </Box>

        
        
         <Box align="left" >
            <Box display={{base:"block", md:"none"}}  pos={"fixed"} top={"1rem"} ml={"10px"}>
                <Heading >Sai kiran</Heading>
            </Box>
            {
                flag &&  <Flex width={"100%"}  border={"2px solid tranprent"} mt={"4rem"}   justifyContent={"space-between"}  display={{base:"block", md:"none"}}>     
                <Box onClick={setFlag.off} position={"fixed"} right={"1rem"} top={"1rem"} >
                    <IconButton icon={<CloseIcon/>}></IconButton>
                </Box>
                    <Box  >
                    <Flex data-aos="zoom-out-left"  width={"100%"} height={"100vh"}  flexDirection={"column"}  alignItems={"left"}>
                      {
                        Links.map((item)=>(
                             <Link><Button variant={"ghost"} ml={"10px"}>{item.lable}</Button></Link>
                         ))
                        }
                    </Flex>
                    </Box>
            </Flex>
            }
           
        </Box>
        
    </Box>
    </>
  )
}

export default Navbar