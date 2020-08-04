import React, { useState }from 'react';
import Data from '../Data';
import Modal from 'react-modal';

Modal.setAppElement('#root')
const HelloWorld =() => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return ( 
        <div>
        <h1 style = {
            {
                color:"orange",
                textAlign:"center",
                backgroundColor:"grey",
                textDecoration:"underline"
            }
        }>UserlList</h1>
         {Data.members.map(post =>{
             return (
                 <div>
                <label
                style = {
                    {
                        backgroundColor:"orange"
                    }
                }><strong>Click The Id Please:</strong></label> <h4 onClick ={() => setModalIsOpen(true)}>{post.id}</h4>
                 <h4>{post.real_name}</h4>
                 <br></br>
                 </div>
             )
         })}
         <Modal isOpen ={modalIsOpen} onRequestClose ={() => setModalIsOpen(false)}
         style = {
             {
                 overlay:{
                     backgroundColor:'grey'
                 },
                 content:{
                     color:'orange'
                 }
             }
         }>
            <h1>user detail</h1>
            {Data.members.map(post =>{
             return (
                 <div>
                 <h4 onClick ={() => setModalIsOpen(true)}>{post.id}</h4>
                 <h4>{post.real_name}</h4>
                 <h4>{post.activity_periods.map(post1 =>{
                     return(
                         <div>
                             <h4>{post1.start_time}</h4>
                         </div>
                     )
                 })}</h4>
                 </div>
             )
         })}
         <button onClick ={() => setModalIsOpen(false)}>close</button>
         </Modal>
        </div>
     );
}
 
export default HelloWorld;