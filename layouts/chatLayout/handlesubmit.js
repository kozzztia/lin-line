import axios from "axios";

export const handleSubmit = async (event , phone , message , setStatus , clearInputs) => {
    event.preventDefault();
    if(phone.length > 9 && phone.length <=11){
        try {
            await axios.post('/api/telegram', {
                phone,
                message,
            });
            await setStatus(true)
            await clearInputs()
        } catch (error) {
            await setStatus(false)
        }
    }



};