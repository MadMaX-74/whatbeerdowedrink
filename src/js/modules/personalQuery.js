import renderPerson from './renderPerson';

const personalQuery = () => {
    fetch('https://random-data-api.com/api/users/random_user')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            renderPerson(data);
        }).catch((err) => { console.warn(err); })
};

export default personalQuery;