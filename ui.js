class UI{
    constructor(){
        this.profile = document.getElementById('profile');
    }

    //Show the profile
    showProfile(user){
        console.log(user);
        this.profile.innerHTML = `
        <div class="row">
            <div class="col-md-3">
                <img src="${user.avatar_url}" alt="" class="img-fluid mb-2">
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
            </div>
            <div class="col-md-9">
                <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                <span class="badge badge-success">Followers: ${user.followers}</span>
                <span class="badge badge-info">Following: ${user.following}</span>
                <br><br>
                <ul class="list-group">
                    <li class="list-group-item">Company: ${user.company}</li>
                    <li class="list-group-item">Website/Blog: ${user.blog}</li>
                    <li class="list-group-item">Location: ${user.location}</li>
                    <li class="list-group-item">Member Since: ${user.created_at}</li>
                </ul>
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos">
        </div>
        `;
    }

    //Show repo
    showRepo(repos){
        let output = "";
        
        repos.forEach( function(repo) {
            
            output += `
               <div class="card card-body mb-2">
              <div class="row">
                <div class="col-md-6">
                  <a href="${repo.html_url}" target="_blank"> ${repo.name}</a>
                </div>
                <div class="col-md-6">
                  <span class="badge badge-dark">Forks: ${repo.forks_count}</span>
                  <span class="badge badge-primary">Watchers: ${repo.watchers_count}</span>
                  <span class="badge badge-success">Stars: ${repo.stargazers_count}</span>
                </div>
              </div>
            </div> 
            `;

        });

        //output the repos
        document.getElementById('repos').innerHTML  = output;
    }



    //Clear profile
    clearProfile(){
        this.profile.innerHTML = "";
    }


    //Show alert message
    showAlert(message,  data){
        //Clear any remainig alerts
        this.clearAlertMessage();

        //Create the div
        const div = document.createElement('div');
        
        //add the class name ie danger 
        div.className = data;
        
        //appednchild ie the message in div
        div.appendChild(document.createTextNode(message));
        
        //get the parent
        const container = document.querySelector('.searchContainer');

        //Get the search box
        const search = document.querySelector('.search');

        //Insert alert
        container.insertBefore(div, search);

        //TimeOut after 3 second
        setTimeout(()=>{
            this.clearAlertMessage()
        }, 3000);
    }

    //Clear the alert message 
    clearAlertMessage(){
        const curralert = document.querySelector('.alert');

        //if the message exists then first remove it
        if (curralert){
            curralert.remove();
        }
    }
}