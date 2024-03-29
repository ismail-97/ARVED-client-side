
import Modal from 'react-bootstrap/Modal'
import React from 'react';
import { useDispatch } from 'react-redux'
import { deleteProduct } from '../reducers/productReducer'
import translate from '../i18n/messages/translate'
import { setNotification } from '../reducers/notificationReducer'


const DeleteConfirmationModal = (props) => {
    const dispatch = useDispatch()
    const deleteItem = (productId) => {
        dispatch(deleteProduct(productId))
        dispatch(setNotification("Product Has Been Deleted"))

    }

    return (
        <Modal
            {...props}
            centered
        >
            <Modal.Body className="px-5 pt-5 text-center "  >
                <div className="mb-4 title" style={{fontSize: 32}}>{props.header}</div>
                <div className="mb-4 title" style={{ fontSize: 20 }}>{props.body}</div>
                <div className="mb-4 title" style={{ fontSize: 20 }}>{props.footer}</div>
            </Modal.Body>
            <div className='d-flex flex-row justify-content-around w-50 m-auto pb-5'>
                <button
                    className="arved-button3"
                    onClick={() => deleteItem(props.productid)}>
                    {translate("delete")}
                </button>
                <button
                    className="arved-button4"
                    onClick={props.onHide}>
                    {translate("cancel")}
                </button>
            </div>
        </Modal>                           
    )
}

export default DeleteConfirmationModal