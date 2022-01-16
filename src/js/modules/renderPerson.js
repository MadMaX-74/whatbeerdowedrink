const renderPerson = (data) => {
    const app = document.getElementById('app');
    let person = document.createElement('div');
    person.classList.add('personal');
    person.innerHTML = `
    <div class="personal-img"><img src="${data.avatar}" alt="${data.avatar}" class="personal-img__img"></div>

    <div class="personal-info">
        <h3 class="personal-info__userinfo">User info:</h3>
        <p class="personal-info__id">ID: ${data.id}</p>
        <p class="personal-info__username">User Name: ${data.user_name}</p>
        <p class="personal-info__uid">UID: ${data.uid}</p>
        <p class="personal-info__name">First Name: ${data.first_name}</p>
        <p class="personal-info__surname">Last Name: ${data.last_name}</p>
        <p class="personal-info__birthday">Birthday: ${data.date_of_birth}</p>
        <p class="personal-info__gender">Gender: ${data.gender}</p>
        <p class="personal-info__email">EMail: ${data.email}</p>
        <p class="personal-info__phone">Phone: ${data.phone_number}</p>
        <p class="personal-info__socialNumber">Social Number: ${data.social_insurance_number}</p>
        <p class="personal-info-adress">
            <span class="personal-info-adress__country">Country: ${data.address.country}</span>
            <span class="personal-info-adress__state">State: ${data.address.state}</span>
            <span class="personal-info-adress__city">City: ${data.address.city}</span>
            <span class="personal-info-adress__streetname">Name of street: ${data.address.street_name}</span>
            <span class="personal-info-adress street">Street adress: ${data.address.street_address}</span>
            <span class="personal-info-adress__zip">ZIP-Code: ${data.address.zip_code}</span>
            <span class="personal-info-adress__coord">Coords: ${data.address.coordinates.lat} x ${data.address.coordinates.lng}</span>
        </p>
        <hr />
        <p class="personal-info-employment">
            <h3 class="personal-info-employment__work">Employment:</h3>
            <span class="personal-info-employment__title">${data.employment.title}</span>
            <span class="personal-info-employment__skills">${data.employment.key_skill}</span>
        </p>
        <hr />
        <p class="personal-info-subscription">
            <h3 class="personal-info-subscription__title">Subscription:</h3>
            <span class="personal-info-subscription__plan">Plan: ${data.subscription.plan}</span>
            <span class="personal-info-subscription__term">Term: ${data.subscription.term}</span>
            <span class="personal-info-subscription__status">Status: ${data.subscription.plan}</span>
            <span class="personal-info-subscription__payment">Payment method: ${data.subscription.payment_method}
            </span>
        </p>
        <p class="personal-info__card">Credit card: ${data.credit_card.cc_number}</p>
    </div>
    `
    app.append(person);
};

export default renderPerson;