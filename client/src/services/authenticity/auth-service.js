import axios from "../../axios";

class AuthService {
 
    login(username, password) {
        
       return axios.post("/auth/signin", { username, password })
        .then(response => {
               
            if (response.data.accessToken) 
            {
                // Obtenemos los datos desde el servidor y almacenamos los datos del usuario
                localStorage.setItem("user", JSON.stringify(response.data));
            
             
            }
        
             return response.data;
      
         });
    }

    logout() {

        localStorage.removeItem("user");
    }

    register(username, email, password) {
       
        return axios.post("/auth/signup", {
            username,
            email,
            password,
        });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));;
    }
}

export default new AuthService();