import React from 'react';
import 'antd/dist/antd.css';
import './content.scss';
import {
  Table,
  Input,
  InputNumber,
  Button,
  Form,
  Modal,
  Cascader,
  Menu,
  Dropdown
} from 'antd';
import majorContent from '../../../services/AdminContentServices/major';
import delete_icon from '../../../images/delete.svg';
import update_icon from '../../../images/edit.svg';

const {
  getAllMajors,
  getAllSubMajors,
  updateSubMajor,
  deleteSubMajor,
  addMajor,
  addSubMajor
} = majorContent;
const EditableContext = React.createContext();

class EditableCell extends React.Component {
  getInput = () => {
    if (this.props.inputType === 'number') {
      return <InputNumber />;
    }
    return <Input />;
  };

  renderCell = ({ getFieldDecorator }) => {
    const {
      editing,
      dataIndex,
      title,
      inputType,
      record,
      index,
      children,
      ...restProps
    } = this.props;
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item style={{ margin: 0 }}>
            {getFieldDecorator(dataIndex, {
              rules: [
                {
                  required: true,
                  message: `Please Input ${title}!`
                }
              ],
              initialValue: record[dataIndex]
            })(this.getInput())}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  };

  render() {
    return (
      <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
    );
  }
}

class EditableTable extends React.Component {
  state = {
    data: [],
    editingKey: '',
    visible: false,
    majorVisible: false,
    subMajor: '',
    majors: [],
    major: ''
  };

  async componentDidMount() {
    const allMajor = await getAllMajors();
    if (allMajor) {
      const allMajorData = allMajor.map(elm => ({
        key: elm._id,
        value: elm.majorName,
        label: elm.majorName,
        type: elm.key
      }));
      this.setState({ majors: allMajorData });
    }
  }

  columns = [
    {
      title: ' التخصص الدقيق',
      dataIndex: 'name',
      width: '25%',
      editable: true
    },
    {
      title: 'التخصص العام ',
      dataIndex: 'major',
      width: '25%',
      render: (text, record) => {
        const editable = this.isEditing(record);
        return editable ? (
          <Cascader
            className="dropdown-menu "
            options={this.state.majors}
            onChange={this.majorChange}
            placeholder="اختر التخصص"
          />
        ) : (
          <h3>
            {' '}
            {this.state.data.reduce((acc, elm) => {
              if (elm.key === record.key) acc = elm.major;
              return acc;
            }, '')}{' '}
          </h3>
        );
      }
    },
    {
      title: ' تعديل التخصص',
      dataIndex: 'operation',
      render: (text, record) => {
        const { editingKey } = this.state;
        const editable = this.isEditing(record);
        return editable ? (
          <span>
            <EditableContext.Consumer>
              {form => (
                <a
                  onClick={() => this.save(form, record.key)}
                  style={{ marginRight: 8 }}
                >
                  حفظ
                </a>
              )}
            </EditableContext.Consumer>
            {/* <Popconfirm title="Sure to cancel?" onConfirm={() => this.cancel(record.key)}> */}
            <a
              onClick={() => this.cancel(record.key)}
              style={{ marginRight: 8 }}
            >
              الغاء
            </a>
            {/* </Popconfirm> */}
          </span>
        ) : (
          <a disabled={editingKey !== ''} onClick={() => this.edit(record)}>
            <img className="update-icon" src={update_icon} alt="" />
          </a>
        );
      }
    },
    {
      title: 'حذف',
      dataIndex: 'operation',
      render: (text, record) => {
        const menu = (
          <Menu>
            <Menu.Item>
              <a
                rel="noopener noreferrer"
                onClick={() => this.delete(record.key)}
              >
                <img src={delete_icon} className="delete-icon" alt="" />
              </a>
            </Menu.Item>
          </Menu>
        );

        return (
          <Dropdown overlay={menu} placement="topRight">
            <span>...</span>
          </Dropdown>
        );
      }
    }
  ];

  isEditing = record => record.key === this.state.editingKey;

  cancel = () => {
    this.setState({ editingKey: '' });
  };

  save(form, key) {
    form.validateFields((error, row) => {
      let type = '';
      if (error) {
        return;
      }
      const newData = [...this.state.data];
      const index = newData.findIndex(item => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row
        });
        this.setState({ data: newData, editingKey: '' }, async () => {
          this.state.row.name === row.name
            ? (type = 'public_Major')
            : (type = 'majorName');
          await updateSubMajor({
            id: key,
            type,
            value:
              row.name === this.state.row.name
                ? this.state.major.value
                : row.name
          });
        });
      } else {
        newData.push(row);
        this.setState({ data: newData, editingKey: '' });
      }
    });
  }
  edit(key) {
    this.setState({ editingKey: key.key, row: key });
  }

  delete = async key => {
    const { data } = this.state;
    await deleteSubMajor({
      id: key
    });
    this.setState({
      data: data.filter(subMajor => subMajor.key !== key)
    });
  };

  addSubMajorModal = () => {
    this.setState({
      visible: true
    });
  };

  addPublicMajorModal = () => {
    this.setState({
      majorVisible: true
    });
  };

  handleOk = async smjor => {
    const { data, subMajor } = this.state;
    const addedSubMajorData = await addSubMajor({
      subMajorName: subMajor,
      key: smjor.key,
      public_Major: smjor.value
    });
    await data.push({
      name: addedSubMajorData.majorName,
      key: addedSubMajorData._id,
      major: addedSubMajorData.public_Major.majorName
    });
    this.setState({
      data,
      visible: false,
      majorVisible: false
    });
  };

  handleMajorOk = async () => {
    const { key, publicMajor } = this.state;
    await addMajor({
      majorName: publicMajor,
      key
    });
    this.setState({ visible: false, majorVisible: false });
  };

  handleCancel = e => {
    this.setState({
      visible: false,
      majorVisible: false
    });
  };

  handleInputChange = e => {
    this.setState({
      subMajor: e.target.value
    });
  };

  majorChange = (value, selectedOptions) => {
    this.setState({
      major: selectedOptions[0]
    });
  };

  showSubMajor = async () => {
    const { major } = this.state;

    if (major) {
      const allSubMajor = await getAllSubMajors({ name: major.value });
      if (allSubMajor.length !== 0) {
        const formattedData = allSubMajor.map(elm => {
          return {
            key: elm._id,
            name: elm.majorName,
            major: elm.public_Major.majorName
          };
        });
        this.setState({
          data: formattedData
        });
      } else {
        alert(' لا يوجد تخصصات دقيقة لهذا التخصص العام');
      }
    }
  };
  handlePMajorChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { majors, major, data } = this.state;

    const components = {
      body: {
        cell: EditableCell
      }
    };

    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          inputType: col.dataIndex === 'age' ? 'number' : 'text',
          dataIndex: col.dataIndex,
          title: col.title,
          editing: this.isEditing(record)
        })
      };
    });

    return (
      <React.Fragment>
        <div style={{ display: 'inline-block' }}>
          <Cascader
            className="dropdown-menu major-dropmenu"
            options={majors}
            onChange={this.majorChange}
            placeholder="اختر التخصص"
          />
          <Button className="add-major" onClick={this.addSubMajorModal}>
            اضافة تخصص دقيق
          </Button>
          <Button className="add-smajor" onClick={this.addPublicMajorModal}>
            اضافة تخصص عام
          </Button>
          <Modal
            title="اضافة تخصص عام"
            visible={this.state.majorVisible}
            onOk={() => {
              this.handleMajorOk(major);
            }}
            onCancel={this.handleCancel}
          >
            <Input
              placeholder="value "
              name="publicMajor"
              onChange={this.handlePMajorChange}
            />
            <Input
              placeholder="key "
              name="key"
              onChange={this.handlePMajorChange}
            />
          </Modal>
          <Button className="display-major-content" onClick={this.showSubMajor}>
            عرض
          </Button>
        </div>
        <Modal
          title="اضافة تخصص دقيق"
          visible={this.state.visible}
          onOk={() => {
            this.handleOk(major);
          }}
          onCancel={this.handleCancel}
        >
          <Input placeholder="القيمة " onChange={this.handleInputChange} />
        </Modal>

        {data.length !== 0 && (
          <EditableContext.Provider value={this.props.form}>
            <Table
              components={components}
              bordered
              dataSource={this.state.data}
              columns={columns}
              rowClassName="editable-row"
              pagination={{
                onChange: this.cancel
              }}
            />
          </EditableContext.Provider>
        )}
      </React.Fragment>
    );
  }
}

const MajorContent = Form.create()(EditableTable);

export default MajorContent;
