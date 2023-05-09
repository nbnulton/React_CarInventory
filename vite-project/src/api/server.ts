let token = "95fca348ad2858975a1a21d5e18d0dd74b484d85902e25b6"

export const server_calls = {
    get: async () => {
        // const response = await fetch(`https://plankton-app-46k8b.ondigitalocean.app/api/contacts`,
        const response = await fetch(`https://determined-picayune-lupin.glitch.me/api/cars`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`,
            },
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    create: async (data: any = {}) => {
        // const response = await fetch(`https://plankton-app-46k8b.ondigitalocean.app/api/contacts`,
        const response = await fetch(`https://determined-picayune-lupin.glitch.me/api/cars`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'access-control-allow-origin':	'*',
                'x-access-token': `Bearer ${token}`,
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    update: async (id:string, data: any = {}) => {
        // const response = await fetch(`https://plankton-app-46k8b.ondigitalocean.app/api/contacts/${id}`,
        const response = await fetch(`https://determined-picayune-lupin.glitch.me/api/cars/${id}`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`,
            },
            body: JSON.stringify(data)
        })

        if (!response.ok){
            throw new Error('Failed to update data on server')
        }

        return await response.json()
    },

    delete: async (id:string) => {
        // const response = await fetch(`https://plankton-app-46k8b.ondigitalocean.app/api/contacts/${id}`,
        const response = await fetch(`https://determined-picayune-lupin.glitch.me/api/cars/${id}`, 
        {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
            }
            
        })

        if (!response.ok){
            throw new Error('Failed to delete data on server')
        }

        return;
    },
}