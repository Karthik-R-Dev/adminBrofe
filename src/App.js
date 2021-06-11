// import { ThemeProvider } from 'styled-components'
// import { theme,Reset,Box,Text,Label,Icon} from '@admin-bro/design-system'
// import { Input } from '@admin-bro/design-system'
// import { CheckBox} from '@admin-bro/design-system'
// import { Button } from '@admin-bro/design-system'
// import {
//   Table,
//   TableRow,
//   TableCell,
//   TableCaption,
//   TableHead,
//   TableBody,
// } from '@admin-bro/design-system'


// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <ThemeProvider theme={theme}>
//       <Reset />
//       <Box pt="x4">
//       <a href="/" style={{position:"relative",right:"43rem",bottom:"1rem"}}><Icon icon="ArrowLeft"></Icon></a>
//       <Table className="container-fluid" style={{border:"1px solid black", width:"90%",position:"relative",left:"5rem", top:"5rem" ,borderBottom:"2px solid black"}}>
//       <TableCaption style={{backgroundColor:"white",borderTop:"2px solid #4aa96c",borderLeft:"1px solid black",borderRight:"1px solid black",borderBottom:"1px solid black",borderTopLeftRadius:"5px",borderTopRightRadius:"5px"}}>
//       <Text as="span" style={{color:"black",fontSize:"1rem",position:"relative",top:"5px"}}>Nandi Bikes Private Limited</Text>
//       </TableCaption>
//       <TableHead>
   
//   </TableHead>
  
//   <TableBody >
//     <TableRow style={{backgroundColor:"inherit"}}>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//     </TableRow>
//     <TableRow style={{backgroundColor:"inherit"}}>
//       <TableCell style={{position:"relative",left:"0.5rem"}}>Key Name:</TableCell>
//       <TableCell style={{position:"relative",right:"3.7rem"}}>Nandi Bikes</TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell style={{borderTop:"5px #d3e0ea",borderLeft:"2px solid #d3e0ea",borderRight:"2px solid #d3e0ea",paddingLeft:"5rem",paddingRight:"5rem",backgroundColor:"#f4f9f9"}}>Status</TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//     </TableRow>
//     <TableRow style={{backgroundColor:"inherit"}}>
//       <TableCell >API Key:</TableCell>
//       <TableCell style={{position:"relative",left:"0.5rem",paddingTop:"10px",paddingBottom:"10px"}}><form><Input id="input1" width={1/2} /></form></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell style={{borderTop:"2px solid #d3e0ea",borderBottom:"2px solid #d3e0ea",borderLeft:"2px solid #d3e0ea",borderRight:"2px solid #d3e0ea",paddingLeft:"5rem",paddingRight:"5rem",borderRadius:"10px"}}>Active</TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//     </TableRow>
//     <br></br>
//     <TableRow style={{backgroundColor:"inherit"}}>
//       <TableCell style={{position:"relative",left:"1rem"}}>Service Status:</TableCell>
//       <TableCell style={{position:"relative",left:"48.5rem",top:"2rem"}}><Button size="lg" ml="md" variant="success"><Icon icon="Add"/>Add Credits</Button></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell> </TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//     </TableRow>
//     <TableRow style={{backgroundColor:"inherit"}}>
//       <TableCell ></TableCell>
//       <TableCell style={{position:"relative",right:"7rem"}}>
//       <CheckBox id="checkbox1"/>
//       <Label inline htmlFor="checkbox1" ml="default">SMS</Label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//       <CheckBox id="checkbox1"/>
//       <Label inline htmlFor="checkbox1" ml="default">Whatsapp</Label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//       <CheckBox id="checkbox1"/>
//       <Label inline htmlFor="checkbox1" ml="default">Telephony</Label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//       <CheckBox id="checkbox1"/>
//       <Label inline htmlFor="checkbox1" ml="default">GST</Label></TableCell>
//       <TableCell></TableCell>
//       <TableCell> </TableCell>
//       <TableCell> </TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//     </TableRow>
//     <TableRow style={{backgroundColor:"inherit"}}>
//       <TableCell></TableCell>
//       <TableCell style={{position:"relative",left:"48.5rem",bottom:"2rem"}}><Button size="lg" ml="md" variant="info"><Icon icon="Settings"/>&nbsp;&nbsp;&nbsp;&nbsp;Configure</Button></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//     </TableRow>
//     {/* <TableRow>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//       <TableCell></TableCell>
//     </TableRow> */}
//   </TableBody>
// </Table>
// </Box>
//  <Box style={{borderLeft: "1px solid black",height:"358px",position:"relative",left:"61rem",bottom:"17.4rem"}}></Box>
//     </ThemeProvider>
//     </div>
//   );
// }

// export default App;
