import axios from 'axios';
import config from './config';

export default {
    saveReceive(data) {
        return new Promise((resolve, reject) => {
            axios.post(config.app_url+'receive/ReceiveController.php', data)
            .then((response) => {
                resolve(response.data)
            })
            .catch((error) => {
                reject(error);
            });

        })
    }
}