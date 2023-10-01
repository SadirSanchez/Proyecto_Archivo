import axios from 'axios';

export default {
   async saveReceive(data) {
       

            await axios.post("http://localhost/proyecto-archivo-back-end/controllers/receive/ReceiveController.php", data)
                .then(res => {
                    
                })
                .catch(err => {

                })

    
    }
}