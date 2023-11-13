import axios from 'axios';
import config from './config';

export default {
    login(data) {
        data.action = "Login"
        return new Promise((resolve, reject) => {
            axios.post(config.app_url + 'LoginController.php', data)
                .then((response) => {
                    resolve(response.data)
                })
                .catch((error) => {
                    reject(error);
                });

        })
    },

    validateSesion(dataSesion) {

        console.log(dataSesion);
        return new Promise((resolve, reject) => {
            axios.get(config.app_url + 'LoginController.php?email=' + dataSesion.email + '&createat=' + dataSesion.createat)
                .then((response) => {
                    resolve(response.data)
                })
                .catch((error) => {
                    reject(error);
                });

        })
    },

    upDateSesion(dataSesion) {
        dataSesion.action = 'upDateSesion';
        return new Promise((resolve, reject) => {
            axios.post(config.app_url + 'LoginController.php', dataSesion)
                .then((response) => {
                    resolve(response.data)
                })
                .catch((error) => {
                    reject(error);
                });

        })

    },

    deleteSesion(dataSesion){
        dataSesion.action = 'deleteSesion';
        return new Promise((resolve, reject) => {
            axios.post(config.app_url + 'LoginController.php', dataSesion)
                .then((response) => {
                    resolve(response.data)
                })
                .catch((error) => {
                    reject(error);
                });

        })
    }
}