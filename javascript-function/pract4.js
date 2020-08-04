class User{
    /**
     * @param {string} username
     * @param {Array.<string>} tags
     */
    constructor(username,tags){
        this.username=username;
        this.tags=tags;
        this.followers = [];
    }
    /**
     * @param {User} user
     * @returns void
     */
    addFollowers(user){
        this.followers.push(user);
    }
    /**
     * Get the followers whoare tagged with tag
     * @param {string} tag
     * @returns {Array.<User>}
     */
    getFollowers(tag){
        
    }

}