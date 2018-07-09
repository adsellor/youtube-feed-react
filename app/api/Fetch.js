const queryData = params => {
    let requestURL = new URL("https://www.googleapis.com/youtube/v3/search")
    const getVideos = async () => {
        try {
            Object.keys(params).forEach(key => requestURL.searchParams.append(key, params[key])) 
            const result = await fetch(requestURL)
            const resultJSON = await result.json()
            return resultJSON
        } catch (e) {
            console.log(e)
        }
    }
    return getVideos()
}

export {queryData}
