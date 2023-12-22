import axios from 'axios';
import config from './config';

export default {
    consultDoc(data) {
        return new Promise((resolve, reject) => {
            axios.post(config.app_url+'document/ConsultDocument.php', data)
            .then((response) => {
                resolve(response.data)
            })
            .catch((error) => {
                reject(error);
            });

        })
    }
}