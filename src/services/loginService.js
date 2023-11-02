import axios from 'axios';
import config from './config';

export default {
    login(data) {
        return new Promise((resolve, reject) => {
            axios.post(config.app_url+'LoginController.php', data)
            .then((response) => {
                resolve(response.data)
            })
            .catch((error) => {
                reject(error);
            });

        })
    }
}