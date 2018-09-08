//Initiliase the gihub and the UI class
const github = new GitHub;
const ui = new UI;


//SEarch input
var searchUser = document.getElementById("searchUser");

//Serch user event listener
searchUser.addEventListener('keyup', (e) => {
    //get the input text
    const userText = e.target.value;

    if(userText != ''){
        //console.log(userText);

        //Make an http call
        github.getUser(userText).then(data => {
            //console.log(data);
            
            if(data.profile.message === 'Not Found'){
                //show alert
                ui.showAlert('User not found', 'alert alert-danger');
            

            }else{
                //Show the profile which we got from the json reponse 
                ui.showProfile(data.profile);
                
                //Show the repo which we got from the json reponse 
                ui.showRepo(data.repo); 
            }
            
        })
    }else{
        //Clear the profile
        ui.clearProfile();
    }

});