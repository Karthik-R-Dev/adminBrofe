import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Box,Label,theme,Button, Icon } from '@admin-bro/design-system'
import { CheckBox} from '@admin-bro/design-system'



function View() {
    return (
        <div>
        <ThemeProvider theme={theme}>
            <Box variant="white">
            <Box>
                <a href="/" style={{margin:"7rem"}}><Icon icon="ArrowLeft" size={32}></Icon></a>
            </Box>
                <Box variant="white" >
                    <Box style={{border:"1px solid #bfb7b7",width:"1200px",height:"45px",position:"relative",left:"7rem",borderTopLeftRadius:"7px",borderTopRightRadius:"7px",borderTop:"2px solid #80b037",borderTopColor:"#80b037"}}>
                    <h3 style={{position:"relative",left:"1rem",color:"#212121",fontWeight:"400px"}}>Nandi Bikes Private Limited</h3>
                    </Box>
                </Box>
                <Box variant="white" style={{border:"1px solid #bfb7b7",width:"1200px",height:"345px",position:"relative",left:"9rem",bottom:"2rem",borderTopColor:"white",borderBottomLeftRadius:"7px",borderBottomRightRadius:"7px"}}>
                    <p>Key Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nandi Bikes</p><br></br>
                    <p>API Key:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input></input><button onclick="myFunction()">Copy</button></p><br></br>
                    <p>Service Status:</p>
                    <Box variant="white" boxShadow="cardHover" width="27rem" height="6rem">
                                <Box p="xl" flex flexDirection="row" position="relative" right="1.5rem" bottom="1rem">
                                <CheckBox id="checkbox1"/>
                                <Label inline htmlFor="checkbox1" ml="default" paddingRight="2rem">SMS</Label>
                                <CheckBox id="checkbox1"/>
                                <Label inline htmlFor="checkbox1" ml="default"  paddingRight="2rem">Whatsapp</Label>
                                <CheckBox id="checkbox1"/>
                                <Label inline htmlFor="checkbox1" ml="default"  paddingRight="2rem">Telephony</Label>
                                <CheckBox id="checkbox1"/>
                                <Label inline htmlFor="checkbox1" ml="default"  paddingRight="2rem">GST</Label>
                                </Box>
                            </Box>
                        <Box style={{border:"1px solid #e1e1e2",width:"200px",height:"50px",position:"relative",left:"58rem",bottom:"17rem",borderTopLeftRadius:"5px",borderTopRightRadius:"5px",backgroundColor:"#f4f9f9"}}>
                            <p style={{position:"relative",left:"5rem",fontWeight:"bolder"}}>Status</p>
                        </Box>
                        <Box style={{border:"1px solid #e1e1e2",width:"200px",height:"50px",position:"relative",left:"58rem",bottom:"17rem",borderBottomLeftRadius:"5px",borderBottomRightRadius:"5px"}}>
                            <p style={{position:"relative",left:"5rem"}}>Active</p>
                        </Box>
                        <Box position="relative" left="59rem" bottom="14rem">
                            <Button variant="success"><Icon icon="Add"></Icon>
                                    Add Credit
                            </Button>
                        </Box>
                        <Box  position="relative" left="59rem" bottom="12rem">
                            <Button variant="info"><Icon icon="Settings"></Icon>&nbsp;
                                    Configure
                            </Button>
                        </Box>
                            
                            <Box style={{borderLeft: "1px solid #bfb7b7",height:"345px",position:"relative",left:"55rem",bottom:"29.2rem"}}></Box>
                </Box>
            </Box>
        </ThemeProvider>
        </div>
    )
}

export default View



// flex flexDirection="row"