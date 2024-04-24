const userInfoAsync = (userData) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(import.meta.env.VITE_USER_INFO_SAVE, {
                method: "POST",
                body: JSON.stringify(userData),
                headers: {
                    "Content-type": "application/json",
                }
            })

            if (response.status === 200) {
                const data = await response.json();
                resolve(data.user.message);
            }
            else {
                const error = await response.json();
                reject(error.user.message);
            }
        } catch (error) {
            reject("Unable to process");
        }
    })
}

const userInfo = async (userData) => {
    
    try {
        const response = await userInfoAsync(userData);
        return response;
    } catch (error) {
        return error;
    }
}

export default userInfo;