const knex = require("../db/knex.js");
const fs = require('fs')
const path = require('path')

const AWS = require('aws-sdk')
AWS.config.update({ region: 'us-west-1' });

const s3 = new AWS.S3()
const uploadParams = {Bucket: process.env.BUCKET, Key: '', Body: ''}


module.exports = {
  upload: (req, res) => {
    console.log(req.files.file);
    // NOTE probably need to use multier
    // const file = req.files.file
    // const fileStream = fs.createReadStream(file.data);
    // fileStream.on('error', function (err) {
    //   console.log('File Error', err);
    // });
    // uploadParams.Body = fileStream;
    // uploadParams.Key = path.basename(file.data);

    // s3.upload(uploadParams, (err, data) => {
    //   if (err) {
    //     console.log("Error", err);
    //   } if (data) {
    //     console.log("Upload Success", data.Location);
    //   }
    // })
    res.json({message: "responded"})
  }
}