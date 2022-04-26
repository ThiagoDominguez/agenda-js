const form_name = document.querySelector(".form_name");
const form_number = document.querySelector(".form_number");
const form_address = document.querySelector(".form_address");
const form_button = document.querySelector(".form_button");

const list = document.querySelector(".list");

const data_base = window.localStorage;

form_button.onclick = () => {
  let contact = {
    id: Math.random(1, 100),
    form_name: form_name.value,
    form_number: form_number.value,
    form_address: form_address.value,
  };
  save_contact(data_base, contact);
};
charge_contact(data_base, list);
