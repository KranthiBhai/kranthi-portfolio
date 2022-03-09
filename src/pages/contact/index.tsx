import { Business, Email, Message, Person, PhoneAndroid } from '@mui/icons-material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React from 'react'
import Shell from '../../components/Shell'
import Button from '@mui/material/Button';



export default function Contact() {
  return (
    <div>
      <Shell>
        <div className=' w-1/2 mx-auto shadow-3xl'>
          <h1 className=' text-3xl font-bold text-center border-b border-clr2 w-fit'>Get In Touch</h1>

          <Box
            component="form"
            sx={{
              '& > :not(style)': {},
            }}
            noValidate
            autoComplete="off"
          >
            <div className=' flex items-center justify-between'>
              {/* Name Field */}
              <div className=' w-1/2 flex items-center gap-x-2'>
                <Person className=" w-10 h-10 text-gray-400" />
                <TextField id="standard-basic" type="text" label="Name" variant="standard" />
              </div>

              {/* Mobile Field */}
              <div className=' w-1/2 flex items-center gap-x-2'>
                <PhoneAndroid className=" w-10 h-10 text-gray-400" />
                <TextField id="standard-basic" type="number" label="Phone" variant="standard" />
              </div>
            </div>

            {/* Email Field */}
            <div className=' w-full flex items-center gap-x-2'>
              <Email className=" w-10 h-10 text-gray-400" />
              <TextField id="standard-basic" type="email" label="Email" variant="standard" />
            </div>

            {/* Company Name Field */}
            <div className=' w-full flex items-center gap-x-2'>
              <Business className=" w-10 h-10 text-gray-400" />
              <TextField id="standard-basic" type="text" label="Company Name" variant="standard" />
            </div>

            {/* Message Field */}
            <div className=' w-full flex items-center gap-x-2'>
              <Message className=" w-10 h-10 text-gray-400" />
              <TextField
                id="outlined-multiline-static"
                label="Message..."
                multiline
                rows={4}
                // defaultValue="Default Value"
              />
            </div>

            {/* Submit Button */}
            <div>
            <Button variant="contained">Submit</Button>
            </div>
          </Box>
        </div>
      </Shell>
    </div>
  )
}
