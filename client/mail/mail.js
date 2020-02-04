function sendMail() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phoneNumber = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    document.getElementById("sendMessageButton").addEventListener('click') = function(e) {
        e.preventDefault();

        axios.post(
            'https://khallilb-portfolio-server.herokuapp.com/api/sendmail', {
            name, 
            email, 
            phone, 
            message
            })
            .then(res => {
                console.log(res);
            })      
            .catch(err => {
            console.log(err);
            })

        }
}