import React, { PureComponent } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { Form } from 'semantic-ui-react';

class Avatar extends PureComponent {
  state = {
    src: null,
    uploaded: false,
    crop: {
      unit: '%',
      width: 30,
      aspect: 1 / 1
    },
    croppedImageUrl: null
  };

  handleFile = e => {
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ src: fileReader.result, uploaded: false });
    };
    fileReader.readAsDataURL(e.target.files[0]);
  };

  handleSubmit = async e => {
    e.preventDefault();
    (await this.props.getImage) && this.props.getImage(this.state.croppedImage);
    setTimeout(
      function() {
        this.setState({ uploaded: true });
      }.bind(this),
      1000
    );
  };
  onImageLoaded = image => {
    this.imageRef = image;
  };

  onCropChange = crop => {
    this.setState({ crop });
  };

  onCropComplete = crop => {
    if (this.imageRef && crop.width && crop.height) {
      const croppedImageUrl = this.getCroppedImg(this.imageRef, crop);
      this.setState({ croppedImageUrl });
    }
  };

  getCroppedImg(image, crop) {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    const reader = new FileReader();
    canvas.toBlob(blob => {
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        this.dataURLtoFile(reader.result, 'cropped.jpg');
      };
    });
  }
  dataURLtoFile(dataurl, filename) {
    let arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    let croppedImage = new File([u8arr], filename, { type: mime });
    this.setState({ croppedImage: croppedImage });
  }

  render() {
    const { crop, profile_pic, src, uploaded } = this.state;
    return (
      <Form onSubmit={this.handleSubmit} style={{ maxWidth: '50%' }}>
        <label htmlFor="profile_pic"></label>
        <input
          type="file"
          id="profile_pic"
          className="custom-file-input"
          value={profile_pic}
          onChange={this.handleFile}
          accept="image/*"
        />
        {src && !uploaded && (
          <ReactCrop
            src={src}
            crop={crop}
            onImageLoaded={this.onImageLoaded}
            onComplete={this.onCropComplete}
            onChange={this.onCropChange}
          />
        )}
        {src && !uploaded && (
          <button className="save-changes-btn" style={{ marginTop: '20px' }}>
            حفظ
          </button>
        )}
      </Form>
    );
  }
}

export default Avatar;
