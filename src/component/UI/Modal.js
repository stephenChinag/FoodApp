import React, { Fragment } from 'react'
import  ReactDOM  from 'react-dom'
import styles from './Modal.module.css'

const BackDrop=(props)=>{
    return( <div className={styles.backdrop} onClick={props.onClose}/>
    )
}

const ModalOverLay=(props)=>{
return (<div className={styles.modal}>
    <div className={styles.content}>{props.children}</div>
</div>
)

}

const portalElement =document.getElementById('overLays')
 


const Modal=(props)=> {


return (
    <Fragment>
{ReactDOM.createPortal(<BackDrop onClose={props.onClick}/>,portalElement)}
{ReactDOM.createPortal(<ModalOverLay>{props.children}</ModalOverLay>,portalElement)}
    </Fragment>
  )
}
export default  Modal