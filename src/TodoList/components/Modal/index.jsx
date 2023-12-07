import styles from './styles.module.scss'
import Button from 'ui/Button'
import TitleModal from './TitleModal'
import InputField from 'ui/InputField'

const Modal = ({ showModal, onClose, value, setValue, disabled, saveTask}) => {

   return showModal ? (<section className={styles.modal} onClick={onClose}>
      <div className={styles.modal_wrapper} onClick={(evt) => evt.stopPropagation()}>
         <TitleModal>NEW NOTE</TitleModal>
         <form className={styles.modal_form} action='#'>
            <InputField innerClass={styles.modal_field} type='text' name='new_item' id='modal_field' value={value} onChange={(evt) => setValue(evt.target.value)} placeholder='Input your note...' />
            <div className={styles.modal_btn_wrapper}>
               <Button innerClass={styles.modal_cancel} type='button' onClick={onClose}>CANCEL</Button>
               <Button innerClass={styles.modal_submit} type='submit' onClick={saveTask} disabled={disabled}>APPLY</Button>
            </div>
         </form>
      </div>
   </section>) : null
};

export default Modal;