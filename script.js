// Vedant Yatra Website

document.addEventListener("DOMContentLoaded", function () {
    console.log("Vedant Yatra Website Loaded Successfully!");

    const button = document.querySelector("#booking button");

    button.addEventListener("click", function () {
        const name = document.querySelector('input[type="text"]').value;
        const mobile = document.querySelector('input[type="tel"]').value;
        const yatra = document.querySelector("select").value;

        if (name === "" || mobile === "" || yatra === "यात्रा चुनें") {
            alert("कृपया सभी जानकारी भरें।");
        } else {
            alert(
                "धन्यवाद " + name +
                "!\n\nआपकी " + yatra +
                " यात्रा की बुकिंग अनुरोध प्राप्त हो गया है।\n\nहम जल्द ही " +
                mobile + " पर संपर्क करेंगे।"
            );
        }
    });
});