var timeout_result;
function show_wpcp_message(smessage) {
    if (smessage !== "") {
        var smessage_text = '<span>Alert: </span>' + smessage;
        document.getElementById("wpcp-error-message").innerHTML = smessage_text;
        document.getElementById("wpcp-error-message").className = "msgmsg-box-wpcp warning-wpcp showme";
        clearTimeout(timeout_result);
        timeout_result = setTimeout(hide_message, 3000);
    }
}
function hide_message() {
    document.getElementById("wpcp-error-message").className = "msgmsg-box-wpcp warning-wpcp hideme";
}