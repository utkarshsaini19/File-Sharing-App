import File from '../model/File.js'
export const uploadImage = async (req,res) => {
    try {
        const fileobj = {
            path : req.file.path,
            name : req.file.originalname
        }
        const file = await File.create(fileobj);
        return res.status(200).json({message:`${process.env.URL}/file/${file._id}`})
    } catch (error) {
        return res.status(400).send({error:error.message});
    }
}


export const getImage = async (req,res) => {
    try {
        const file = await File.findById(req.params.fileID)
        file.downloadCount++;
        await file.save();

        res.download(file.path, file.name)

    } catch (error) {
        return res.status(400).send({error:error.message})
    }
}