async function getGameData(URL, body) {

    const response = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })

    if (!response.ok) {
        throw new Error(`Server error in request ${URL} - Error ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();

    if (!data.success) {
        throw new Error(`Error in request ${URL} - ${data.message}`);
    }

    return data;
}

export default getGameData;