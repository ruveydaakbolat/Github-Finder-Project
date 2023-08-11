class Github {
    constructor() {
        this.client_id = '09053fa0f1cb4fc7f78d';
        this.client_secret = "4d4f14356f26df2b0c7214ad2e7947309a96a8ee";
        this.repos_count = 10;
        this.repos_sort = 'asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        const repos = await repoResponse.json();

        return {
            profile,
            repos
        };
    }
}

export default Github;