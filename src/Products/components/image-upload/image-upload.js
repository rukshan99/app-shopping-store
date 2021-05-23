import React, { Component } from 'react';

import './image-upload.css';
import FileBase from 'react-file-base64';
import DefaultImg from './default-img.jpg';


const API_URL = "http://localhost:4000";
let image = undefined;
class ImageUpload extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      multerImage: DefaultImg,
      firebaseImage: DefaultImg,
      baseImage: DefaultImg,
      imageObj: {
        imageName: null,
        imageData:null    
    }
  }
  }
  setDefaultImage(uploadType) {
    if (uploadType === "multer") {
      this.setState({
        multerImage: DefaultImg
      });
    } else if (uploadType === "firebase") {
      this.setState({
        firebaseImage: DefaultImg
      });
    } else {
      this.setState({
        baseImage: DefaultImg
      });
    }
  }

  
  uploadImage(e, method) {
    let imageObj = {};
  }

  
  getBaseFile(files) {
    
    this.setState({
      baseImage: files.base64
    });

    this.setState({imageObj:{
        imageName: "base-image-" + Date.now(),
        imageData: files.base64.toString()
    }
      });
    image = this.state.imageObj;  
    
  }

  render() {
    return (
      

        <div className="image-container">
         

          <div className="process">
            <h4 className="process__heading">Image Upload</h4>

            <div className="process__upload-btn">
              <FileBase type="file" multiple={false} onDone={this.getBaseFile.bind(this)} />
            </div>
            <img src={this.state.baseImage} alt="upload-image" className="process__image" />
          </div>
        </div>

    );
  }
}

export {image};

export default ImageUpload;