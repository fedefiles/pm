type FormValues = {
    name: string;
    email: string;
    gender: string;
  
  };

  type PostValues = {
    name: string;
    email: string;
    gender: string;
    status: string;
  
  };
  

export default function Poster(info: FormValues) {
    console.log(JSON.stringify(info));
    fetch('https://gorest.co.in/public/v2/users', {
        method: "GET",
        headers: {'Content-Type': 'application/json', "Autorization": "Bearer 6081dadd2b21f733643640375445fe6f54f66b41ed2559adc816f2164073da7a"},
        ///body: {"name":"Freddy","email":"fredsetlo@gmail.com","gender":"female", "status":"active"},
    })
        .then(response => response.json())
        .then(res => console.log(res))
           }
      

        
    


    
