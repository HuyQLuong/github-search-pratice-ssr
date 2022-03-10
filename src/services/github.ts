import axios from 'axios';

export const getUsersService = async ({query, page} : {query: string, page: number}) => {
    try {
        const response = await axios.get(
        `https://api.github.com/search/users?q=${query}&page=${page}&per_page=12`,
        {
            headers: { 
                'Accept': 'application/vnd.github.v3+json', 
                'Cookie': '_octo=GH1.1.53181638.1624980991; logged_in=no'
            }
        })
        return response.data;
    } catch (error) {
        console.error(error)
    }
}


export const getUserInfoService = async ({username} : {username: string}) => {
    try {
        const response = await axios.get(
        `https://api.github.com/users/${username}`,
        {
            headers: { 
                'Accept': 'application/vnd.github.v3+json', 
                'Cookie': '_octo=GH1.1.53181638.1624980991; logged_in=no'
            }
        })
        return response.data;
    } catch (error) {
        console.error(error)
    }
}