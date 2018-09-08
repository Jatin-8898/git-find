class GitHub{
    constructor(){
        this.client_id = "eb75d71b083e1b0e1158";
        this.client_secret = "a213ecb9742a4a1b368016cd8697485cf786a654";
        this.repos_cont = '5';
        this.repos_sort = 'created: asc';
    }

    /* Note there r 2 different things there 
            1 is profile of the user
            2 is the repos of the user 
     */

    async getUser(user){

        //Reponse for the Profile
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    


        //Respone for the repo
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_cont}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        //get the response in json form
        const profile  = await profileResponse.json();


        //get the response in json form
        const repo  = await repoResponse.json();

        return{
            profile,
            repo,
        }

    
    }


    

    
}