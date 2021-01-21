import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';


export default function Comment()
{
  
    return (
        <>
        <h2>Bình luận</h2>
        <form noValidate autoComplete="off">
        <TextField 
        rows ={5} 
        multiline={true}
        placeholder="Nội dung *"
        id="standard-basic" 
        label="Nội dung" 
        inputProps={{ disableUnderline: true }}
        variant="filled"
        style={{width:'100%',height:'100%',borderRadius:'5px',padding:'10px'}} />
        <br/>
       <div style={{width:"100%"}}><Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />Tôi đồng ý với bình luận của mình</div> 
        <br/>
        <div style={{width:"100%"}}><Button variant="contained" color="primary"
        style={{borderRadius:'10px',padding:'5px 5px',marginTop:'10px',
        textTransform:'none',background:'#3D195B',width:'150px'}}>
       Đăng bình luận
      </Button></div> 
      </form>
      </>
    )
}