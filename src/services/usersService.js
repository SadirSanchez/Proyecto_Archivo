import axios from 'axios';
import config from './config';

export default {
    saveUsers(data) {
        return new Promise((resolve, reject) => {
            axios.post(config.app_url+'users/UsersController.php', data)
            .then((response) => {
                resolve(response.data)
            })
            .catch((error) => {
                reject(error);
            });

        })
    }
}