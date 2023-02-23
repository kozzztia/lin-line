import {useState} from 'react';
import style from "../chatLayout/style.module.scss";
import data from '../../staticData/staticData'
import {handleSubmit} from "./handlesubmit";
import BotInput from "../../components/botInput/BotInput";
import Title from "../../components/title/Title";

function ContactForm() {
    const {btnTitle, btnTitleCompleted,messageTitle, phoneTitle} = data.botValues
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState(false);
    const clearInputs = () =>{
        setPhone("")
        setMessage("")
    }
    return (
        <div className={`fullScreenBackground`}>
            <div className={`main-wrapper`} id = "add">
                <Title title={status?`${btnTitleCompleted}`:`${btnTitle}`}
                       icon={status?'CheckSquareOutlined':'MessageOutlined'}/>
                <form
                    className={style.form}
                    onSubmit={async (event) => {
                        await handleSubmit(event, phone, message, setStatus , clearInputs)
                    }
                }>
                    <BotInput
                        formStatus = {status}
                        inputType={'phone'}
                        title={phoneTitle}
                        value={phone}
                        setValue={setPhone}/>
                    <BotInput
                        formStatus = {status}
                        inputType={'message'}
                        title={messageTitle}
                        value={message}
                        setValue={setMessage}/>
                    <div className={style.form__btn}>
                        <button
                            disabled={status}
                            type="submit">
                            {status?`${btnTitleCompleted}`:`${btnTitle}`}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;