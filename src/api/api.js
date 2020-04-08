import axios from 'axios';

export const fetchPeople = async () => {
     // called once and http call can be made here
     return axios.get('https://raw.githubusercontent.com/shrujan1/demo/master/perple.json')
        .then((response) => {
            console.log(response.data);
            return response.data
        })
        .catch((err) => {
            console.log(err)
        })
}

