const save_contact = (data_base, contact) => {
  data_base.setItem(contact.id, JSON.stringify(contact));
  window.location.href = "/";
};

const charge_contact = (data_base, parentNode) => {
  let keys = Object.keys(data_base);

  for (key of keys) {
    let contact = JSON.parse(data_base.getItem(key));
    new_contact(parentNode, contact, data_base);
  }
};

const new_contact = (parentNode, contact, data_base) => {
  let div_contact = document.createElement("div");
  let name_contact = document.createElement("h3");
  let number_contact = document.createElement("p");
  let address_contact = document.createElement("p");
  let icon_delete = document.createElement("span");

  name_contact.innerHTML = contact.form_name;
  number_contact.innerHTML = contact.form_number;
  address_contact.innerHTML = contact.form_address;
  icon_delete.innerHTML = "remove_circle_outline";

  div_contact.classList.add("list_contacts");
  icon_delete.classList.add("material-icons");

  icon_delete.onclick = () => {
    data_base.removeItem(contact.id);
    window.location.href = "/";
  };

  div_contact.appendChild(name_contact);
  div_contact.appendChild(number_contact);
  div_contact.appendChild(address_contact);
  div_contact.appendChild(icon_delete);

  parentNode.appendChild(div_contact);
};
