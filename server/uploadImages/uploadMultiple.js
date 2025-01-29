import express from 'express'
import multer from 'multer'
import { v2 as cloudinary } from 'cloudinary';
import asyncHandler from 'express-async-handler'
import fs from 'fs'

cloudinary.config({
    cloud_name: process.env.APP_ClOUDINARY_CLOUD_NAME,
    api_key: process.env.APP_ClOUDINARY_API_KEY,
    api_secret: process.env.APP_CLOUDINARY_SECRET_KEY,
})

const uploadMultiple = asyncHandler(async (req, res) => {
  try {
    const images = req.files; // Get uploaded files
    if (!images || images.length === 0) return res.status(400).json({ error: "No files uploaded" });

    const imageUrls = [];

    // Loop through each file and upload to Cloudinary
    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.uploader.upload(images[i].path, { resource_type: "auto" });
      imageUrls.push(result.secure_url); // Push Cloudinary URL to array
    }

    // Delete local files after upload
    images.forEach((image) => fs.unlinkSync(image.path));

    // Return all Cloudinary URLs
    res.json({ imageUrls });
  } catch (error) {
    console.error("Cloudinary Upload Error:", error);
    res.status(500).json({ error: "Image upload failed" });
  }
});


export default uploadMultiple;