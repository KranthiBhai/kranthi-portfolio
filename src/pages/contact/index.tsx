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
        <div className=' w-full h-full flex items-center justify-center'>
          <div className=' w-1/3 mx-auto shadow-3xl bg-white flex flex-col items-center py-6'>

            <h1 className=' text-3xl font-bold text-center border-b-2 border-clr2 w-fit '>Get In Touch</h1>

            <Box
              component="form"
              sx={{
                '& > :not(style)': {width: "100%"},
              }}
              noValidate
              autoComplete="off"
            >
              <div className=' flex items-center justify-between my-4'>
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
              <div className=' w-full flex items-center gap-x-2 my-4'>
                <Email className=" w-10 h-10 text-gray-400" />
                <TextField id="standard-basic" type="email" label="Email" variant="standard" className=' w-full' />
              </div>

              {/* Company Name Field */}
              <div className=' w-full flex items-center gap-x-2 my-4'>
                <Business className=" w-10 h-10 text-gray-400" />
                <TextField id="standard-basic" type="text" label="Company Name" variant="standard" className=' w-full' />
              </div>

              {/* Message Field */}
              <div className=' w-full flex items-start my-4 gap-x-2'>
                <Message className=" w-10 h-10 text-gray-400" />
                <TextField
                  id="outlined-multiline-static"
                  className=' w-full'
                  label="Message..."
                  multiline
                  rows={4}
                // defaultValue="Default Value"
                />
              </div>

              {/* Submit Button */}
              <div className=' w-full flex items-center justify-center my-8'>
                <Button variant="contained">Submit</Button>
              </div>
            </Box>
          </div>
        </div>

      </Shell>
    </div>
  )
}
