import axios from "../../axios";

class AuthService {
 
    login(username, password) {

        return axios.post("/auth/signin", { username: username, password: password }, { 
           headers: {
               'Content-Type': 'application/x-www-form-urlencoded'
            } 
        })
        .then(response =>{

            if (response.data.accessToken) 
            {
                // Obtenemos los datos desde el servidor y almacenamos los datos del usuario
                localStorage.setItem("user", JSON.stringify(response.data));
            }
        
            return response.data;
      
         }).catch(error => {
            console.log(error.message);
            window.location.href = '/500';
        });
    }

    logout() {

        localStorage.removeItem("user");
    }

    register(username, surname, email, password) {
       
        return axios.post("/auth/signup", {
            username: username,
            surname: surname,
            email: email,
            password: password
        },{ headers:
                {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
        } ).catch(error => {
            console.log(error.message);
            window.location.href = '/500';
        });
    }

    editProfile(id,username,surname,email,password,foto) {

        return axios.post("auth/editProfile",
            {
                id:id,
                username:username,
                surname:surname,
                email:email,
                password:password,
                foto:foto
            },
            { headers:
                {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).catch(error => {
                console.log(error.message);
                window.location.href = '/500';
            });
    }

    disableProfile(idUser) {

        return axios.post("auth/disableProfile",
            {idUser:idUser},
            { headers:
                {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
             }).catch(error => {
                console.log(error.message);
                window.location.href = '/500';
            });
    }

    getCurrentUser() {

        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new AuthService();