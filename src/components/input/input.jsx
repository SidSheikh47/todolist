import { useState } from 'react';
import './input.scss';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const InputComponent = (props) => {

    const [inputValue, setInputValue] = useState('')
    const [isError, setIsError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = () => {
        if(inputValue == ''){
            setIsError(true)
            setErrorMessage("Please enter your task")
        }else{
            setIsError(false)
            setErrorMessage('')
            setInputValue('')
            props.onSubmit(inputValue);
        }
    }

    return(
        <div className='input-component'>
             <TextField 
                id="standard-basic" 
                label="" 
                variant="standard" 
                value={inputValue}
                onChange={(e)=>setInputValue(e.target.value)}
                error={isError}
                helperText={errorMessage}
                style={{marginRight: '16px'}}
            />
            <Fab size="small" color="success" aria-label="add">
                <AddIcon onClick={handleSubmit} />
            </Fab>
        </div>
    )
}

export default InputComponent;