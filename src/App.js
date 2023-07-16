import React, { useState, useEffect, useLayoutEffect, useRef } from 'react'
import Sidebar from "./Pages/Sidebar";
import { Box, Drawer, Grid } from '@mui/material'
import './App.css'
import Header from './Pages/Header';
import Toolbar from './Pages/Toolbar';
import Board from './Pages/Board';


function App() {

  const [win_width, setWidth] = useState(window.innerWidth)
  const [showSidebar, setSidebar] = useState(false)
  const [lightMode, setLightMode] = useState(false)

  window.addEventListener('resize', function (event) {
    setWidth(window.innerWidth)
  });

  const handleSidebar = () => {
    setSidebar((prev) => !prev)
  }
  return (
    // <div >
    <Grid container flexDirection={'row'} flexWrap={'nowrap'} style={{
      borderRadius: 20, backgroundColor: "white", overflow: 'hidden',
      boxShadow: '0px 2px 50px gray', marginBottom: 50,
    }}  >
      {(win_width < 600 && showSidebar) ?
        <React.Fragment >
          <Drawer
            anchor={'left'}
            open={showSidebar}
            onClose={handleSidebar}
          >
            {/* <div style={{ minWidth: "210px", width: '75%' }} > */}

            <Box
              sx={{ width: 250 }}
              role="presentation"
              onClick={handleSidebar}
              onKeyDown={handleSidebar}
            >
              <Sidebar handleSidebar={handleSidebar} hideButton />
            </Box>
            {/* </div> */}

          </Drawer>
        </React.Fragment>
        : (!showSidebar && win_width > 600) ? <div style={{ minWidth: "210px", width: '16%' }} >
          <Sidebar handleSidebar={handleSidebar} />
        </div> : null
      }
      <div style={{ width: win_width < 1000 ? '100%' : '82%', display: 'flex', flexGrow: 1, flexDirection: 'column', }} >
        <Header showSidebar={showSidebar} handleSidebar={handleSidebar} />
        <Toolbar />
        <Board />

      </div>

    </Grid >

    // </div>
  );
}

export default App;
