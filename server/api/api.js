import {toast} from "react-toastify";

export const url = "http://localhost/api/";
export const byId = (id) => document.getElementById(id).value;
export const objById = (id) => document.getElementById(id);
export const pageType = {
    ALL: "ALL",
    DELETE: "DELETE",
    SEARCH: "SEARCH",
    FILTER: "FILTER"
}

export const bot = {
    TOKEN: "5169354010:AAFlFQCD4lk29l9FXfKYb7nTzZnbsfOohy0", chatID: "1085241246",
}
export const sendMessage = (message) => fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${message} `, {
    method: "GET"
});
export function CommendSend() {
    let sendButton = objById("sendMessage");
    let fullName = byId("fullName");
    let phoneNumber = byId("phoneNumber");
    let email = byId("email");
    if (fullName === "" || phoneNumber === "" || email === "") {
        toast.error("barcha malumot tuldirilishi shart!");
    } else sendMessage(`I.F.O: ${fullName}, %0ATelefon Raqam: ${phoneNumber}, %0AEmail: ${email}`).then(() => {
        toast.success("send message");
        sendButton.innerText = "Admin javobini kuring 👍";
        sendButton.disabled = true;
        sendButton.style.cursor = "not-allowed";
        sendButton.style.opacity = ".60";
        objById("fullName").value = "";
        objById("phoneNumber").value = "";
        objById("email").value = "";
    });

    setTimeout(() => {
        sendButton.innerText = "Yuborish";
        sendButton.disabled = false;
        sendButton.style.opacity = "1";
        sendButton.style.cursor = "pointer";
    }, 500000);
}