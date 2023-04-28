import { Typography } from '@mui/material'
import React from 'react'

const MobileNavbar = ({setTabs}) => {
  return (
    <div style={{width:"100%",boxSizing:"border-box", background: "#262B3F",display:"flex",textAlign:"end",gap:"2rem",paddingBlock:"8px",paddingInline:"2rem"}}>
        <span style={{cursor:"pointer",color:"white"}} onClick={()=>setTabs(1)}><Typography variant='subtitle1'>Teacher dashboard</Typography> </span>
        <span style={{cursor:"pointer",color:"white"}} onClick={()=>setTabs(2)}><Typography variant='subtitle1'>Student dashboard</Typography></span>
    </div>
  )
}

export default MobileNavbar