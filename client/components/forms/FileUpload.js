import React, { useState } from 'react';
import Resizer from 'react-image-file-resizer';
import axios from 'axios';
import { Avatar, Badge } from 'antd';
import toast, { Toaster } from 'react-hot-toast';

const FileUpload = ({ values, setValues, setLoading }) => {
  const [imageLength, setImageLength] = useState(0);

  console.log(values.images)

  const fileUploadAndResize = e => {

    let files = e.target.files;
    let allUploadedFiles = values.images;

    if (files) {
      setImageLength(files.length);
      setLoading(true);
      if(files.length + values.images.length >6){
        toast("Hiba, maximum 6 darab képet tudsz feltölteni!", {
           duration: 4000,
      style: {
      border: '5px solid #E1C699',
      padding: '16px',
      color: '#713200',
      minWidth:'800px',
      marginTop:'70px',
      },
      iconTheme: {
      primary: '#713200',
      secondary: '#FFFAEE',
      },
      });
        setLoading(false)
        return;
      }
      for (let i = 0; i < files.length; i++) {
        Resizer.imageFileResizer(
          files[i],
          720,
          720,
          'JPEG',
          100, //try experiencing with this
          0,
          uri => {
            // console.log(uri);
            axios
              .post(
                "/api/course/upload-image",
                { image: uri, imageLength: files.length }, //uri is the based 64 resized image, access this by req.body.image in server//
                {

                }
              )
              .then(res => {
                console.log('IMAGE UPLOAD RES DATA', res);
                setLoading(false);
                allUploadedFiles.push(res.data); //push to array of images to keep track of all images

                setValues({ ...values, images: allUploadedFiles }); //put it into  state

              })
              .catch(err => {
                setLoading(false);
                console.log('AWS UPLOAD ERR', err);
              });
          },
          'base64' //convert image to be base64
        );
      }
    }
  };
  const handleImageRemove = image => {
    setLoading(true);
    axios
      .post(
        "/api/course/remove-image",
        { image },
        {

        }
      )
      .then(res => {
        setLoading(false);
        const { images } = values;
        let filteredImages = images.filter(item => {
          //delete image from frontend
          return item.key !== image.key; //return all that dont match the public id(one we want to delete) of the one we put in
        });
        setValues({ ...values, images: filteredImages }); //set new values to filtered image state, with one already removed
        console.log(values)
        console.log("after")
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <>
    <Toaster />
      <div className="row">
        {values.images &&
          values.images.map(image => (
            <Badge
              count="X"
              key={image.key}
              onClick={() => handleImageRemove(image)}
              style={{ cursor: 'pointer' }}
            >
              <Avatar
                src={image.Location}
                size={100}
                shape="square"
                className="ml-3"
              />
            </Badge>
          ))}
      </div>
      <div className="row">

        <label className="btn btn-primary btn-raised mt-3">
          Képek kiválasztása
          <input
            type="file"
            multiple
            hidden
            accept="image/*"
            onChange={fileUploadAndResize}
          />
        </label>

      </div>
        <small>(maximum 6 darab kép)</small>
    </>
  );
};

export default FileUpload;
