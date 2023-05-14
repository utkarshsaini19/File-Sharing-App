const upload = async (form) => {
    const Data = await fetch('/upload',{
        method:'post',
        body: form
    })

    return Data;
}

export default upload;