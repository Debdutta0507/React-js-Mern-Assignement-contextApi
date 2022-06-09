import axios from 'axios';
function getAllIssue() {
    return new Promise((resolve, reject) => {

        axios.get('http://localhost:3001/employee')

            .then(response => resolve(response.data))

            .catch(error => reject(error));

    });

}

function saveIssue(comment) {
    return new Promise((resolve, reject) => {

        axios.post('http://localhost:3001/employee', comment)

            .then(response => resolve(response.data))

            .catch(error => reject(error));

    });

}


export { getAllIssue }

export { saveIssue }
