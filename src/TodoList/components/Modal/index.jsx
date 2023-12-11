import React, {forwardRef, useState, useEffect} from 'react';
import styles from './styles.module.scss'
import Button from 'ui/Button'
import TitleModal from './TitleModal'
import InputField from 'ui/InputField'

const Modal = forwardRef(({ showModal, close, saveTask, editTask}, ref) => {
   const [value, setValue] = useState('');

   const onSave = (evt) => {
      evt.preventDefault();
      saveTask(value);
      setValue('');
      close();
   };

   const onClose = () => {
      setValue('');
      close();
   };

   useEffect(() => {
      if(editTask) {
         setValue(editTask.text);
      };
      
   }, [editTask])

   return showModal ? (<section className={styles.modal} onClick={onClose}>
      <div className={styles.modal_wrapper} onClick={(evt) => evt.stopPropagation()}>
         <TitleModal>NEW NOTE</TitleModal>
         <form className={styles.modal_form} action='#'>
            <InputField innerClass={styles.modal_field} type='text' name='new_item' id='modal_field' value={value} 
            onChange={(evt) => setValue(evt.target.value)} placeholder='Input your note...' ref={ref}/>
            <div className={styles.modal_btn_wrapper}>
               <Button innerClass={styles.modal_cancel} type='button' onClick={onClose}>CANCEL</Button>
               <Button innerClass={styles.modal_submit} type='submit' onClick={onSave} disabled={!value}>APPLY</Button>
            </div>
         </form>
      </div>
   </section>) : null
});

export default Modal;