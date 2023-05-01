import Fab from '@mui/material/Fab';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import './list.scss'

const ListComponent = (props) => {

    const handleDelete = (item) => {
        props.onDelete(item)
    }

    const handleCheckbox = (item) => {
        props.onCheck(item)
    }

    return(
        <div className="list-component">
            {props.tasklist && props.tasklist.map((item)=> 
            <ul>
                <span className={item.status? 'list-item' : 'list-item-checked'}><Checkbox onChange={()=>handleCheckbox(item)} checked={!item.status} />{item.item}</span>
                <Fab size="small" color="error" aria-label="delete">
                    <DeleteIcon onClick={()=>handleDelete(item)} />
                </Fab>
            </ul>
            )}
        </div>
    )
}

export default ListComponent;