const cloudinary=require("cloudinary").v2;

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
});

exports.fileupload = async (req,res) => {
    try {
        console.log("Hi",req.body,req.file);
    // let result= await cloudinary.uploader.upload(req.body.file, { resource_type: "auto", folder: "FileUpload/", 
    // public_id:`${Date.now()}`})
    res.json({});
} catch (err) {
    console.log(err);
    res.status(400).send("Saving File on cloudinary failed");
  }
}