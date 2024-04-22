import React from 'react'
import Navbar from '../Components/Navbar'
import { Tab, tabClasses, TabList, TabPanel, Tabs } from '@mui/joy'
import { Box, } from '@mui/material'
import ProductTable from '../Components/MyStoreComponents/ProductTable'




export default function MyStore() {
   
  return (
    <div>
        <div>
        <Navbar/>
        <Box
        
        sx={{
            flexGrow: 1,
            m: 2.5,
            p: 4,
            borderTopLeftRadius: '12px',
            borderTopRightRadius: '12px',
            // bgcolor: `${colors[index]}.500`,
        }}>
        <Tabs aria-label="tabs" defaultValue={0} sx={{ bgcolor: 'transparent' }}>
        <TabList 
            display="flex"
        
            
            disableUnderline
            sx={{
            p: 0.5,
            gap: 0.5,
            borderRadius: 'xl',
            bgcolor: 'background.level1',
            [`& .${tabClasses.root}[aria-selected="true"]`]: {
                boxShadow: 'sm',
                bgcolor: 'background.surface',
            },
            }}
        >
            <Tab bgcolor='primary' sx={{width:"50%"}} disableIndicator>Product</Tab>
            <Tab sx={{width:"50%"}} disableIndicator> Categories</Tab>
            
        </TabList>
        <TabPanel value={0}>
            <ProductTable/>
        </TabPanel>
        <TabPanel value={1}>
            hero
        </TabPanel>
        </Tabs>
        </Box>
      </div>
    </div>
  )
}

