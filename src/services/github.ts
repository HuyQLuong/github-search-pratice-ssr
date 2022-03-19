import axios from 'axios';

export const getUsersService = async ({query, page} : {query: string, page: number}) => {
    try {
        const response = await axios.get(
        `https://api.github.com/search/users?q=${query}&page=${page}&per_page=12`,
        {
            headers: { 
                'Accept': 'application/vnd.github.v3+json', 
            }
        })
        return response.data;
    } catch (error) {
        console.error(error)
    }
}


export const getUserInfoService = async ({username} : {username: string}) => {
    // try {
        const response = await axios.get(
        `https://api.github.com/users/${username}`,
        {
            headers: { 
                'Accept': 'application/vnd.github.v3+json', 
            }
        })
        return response.data;
    // } 
    // catch (error) {
    //     console.error(error)
    // }
}

export const getUserRepos = async ({username} : {username: string}) => {
    try {
        const response = await axios.get(
        `https://api.github.com/users/${username}/repos`,
        {
            headers: { 
                'Accept': 'application/vnd.github.v3+json', 
            }
        })
        return response.data;
    } catch (error) {
        console.error(error)
    }
}

export const getUserFollower = async ({username} : {username: string}) => {
    try {
        const response = await axios.get(
        `https://api.github.com/users/${username}/followers`,
        {
            headers: { 
                'Accept': 'application/vnd.github.v3+json', 
            }
        })
        return response.data;
    } catch (error) {
        console.error(error)
    }
}

export const getUserFollowing = async ({username} : {username: string}) => {
    try {
        const response = await axios.get(
        `https://api.github.com/users/${username}/following`,
        {
            headers: { 
                'Accept': 'application/vnd.github.v3+json', 
            }
        })
        return response.data;
    } catch (error) {
        console.error(error)
    }
}