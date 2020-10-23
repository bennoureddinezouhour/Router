import React,{useState}from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import List from './movielist';
const Add=(props)=>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [inputs,setInputs]=useState({imgurl:'',title:'',description:'',posterUrl:'',rate:''});
    const handle=(e)=>{
        setInputs({...inputs,[e.target.name]:e.target.value})
    }
  
    
    return(
        <>
      <Button variant="primary" onClick={handleShow} className="mr-4">
        Add movie
      </Button>

      <Modal show={show} onHide={handleClose}>
       
        <Modal.Body>
            <div className='desp'>
           <label>image Url : </label>
           <input type='text' name='imgurl' style={{width:300,marginLeft:20 ,border:'1px solid white'}} onChange={handle}></input>
           </div>  
           <div className='desp'>
           <label>Title :</label>
           <input type='text' name='title' style={{width:300,marginLeft:20, border:'1px solid white'}} onChange={handle}></input>
           </div>
           <div className='desp'>
           <label>description :</label>
           <input type='text' name ='description' style={{width:300,marginLeft:20,border:'1px solid white'}} onChange={handle}></input>  
           </div>
           <div className='desp'>
            <label>posterUrl : </label>
            <input type='text' name ='posteUrl'style={{width:300,marginLeft:20,border:'1px solid white'}} onChange={handle}></input>
            </div>
           <div className='desp'>
           <label>rate : </label>
           <input type='text' name='rate' style={{width:300,marginLeft:20,border:'1px solid white'}} onChange={handle}></input>
           </div>
           
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Add
          </Button>
          <Button variant="primary" onClick={()=>props.fct(inputs)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>

     
    )
}
export default Add;