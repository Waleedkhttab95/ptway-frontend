import React from 'react';
import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const dummyRequest = ({ onSuccess }) => {
  setTimeout(() => {
    onSuccess('ok');
  }, 0);
};

export function UploadCV(props) {
  const values = {
    name: 'file',
    customRequest: dummyRequest,
    headers: {
      authorization: 'authorization-text'
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} تم رفع الملف بنجاح`);
        props && props.updateState(info.file.originFileObj);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    }
  };
  return (
    <Upload {...values}>
      <Button className="upload-cv-btn">
        <UploadOutlined /> تحميل ملف PDF
      </Button>
    </Upload>
  );
}
