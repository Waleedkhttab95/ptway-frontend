import React from 'react';
import 'antd/dist/antd.css';
import './content.scss';
import { Table, Input, InputNumber, Form, Modal, Menu, Dropdown } from 'antd';
import universitiesContent from '../../../services/AdminContentServices/universities';
import delete_icon from '../../../images/delete.svg';
import update_icon from '../../../images/edit.svg';
import add_icon from '../../../images/plus.svg';

const {
  getAllUniversities,
  updateUniversity,
  deleteUniversity,
  addUniversity
} = universitiesContent;
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
    university: ''
  };

  async componentDidMount() {
    const allUniversities = await getAllUniversities();
    if (allUniversities) {
      const allUniversitiesData = allUniversities.map(elm => ({
        key: elm._id,
        name: elm.universtyName
      }));
      this.setState({ data: allUniversitiesData });
    }
  }

  columns = [
    {
      title: 'اسم الجامعة',
      dataIndex: 'name',
      width: '25%',
      editable: true
    },
    {
      title: 'تعديل',
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
          <a disabled={editingKey !== ''} onClick={() => this.edit(record.key)}>
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
          await updateUniversity({
            id: key,
            universtyName: row.name
          });
        });
      } else {
        newData.push(row);
        this.setState({ data: newData, editingKey: '' });
      }
    });
  }

  edit(key) {
    this.setState({ editingKey: key });
  }

  delete = async key => {
    const { data } = this.state;
    await deleteUniversity({
      id: key
    });
    this.setState({
      data: data.filter(university => university.key !== key)
    });
  };

  addCityModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = async () => {
    const { data } = this.state;
    const { university } = this.state;
    const addedUniversity = await addUniversity({
      universtyName: university
    });
    await data.push({
      name: addedUniversity.universtyName,
      key: addedUniversity._id
    });
    this.setState({
      data,
      visible: false
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
  };

  handleInputChange = e => {
    this.setState({
      university: e.target.value
    });
  };

  render() {
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
        <img
          src={add_icon}
          className="add-icon"
          alt="جامعة جديدة"
          onClick={this.addCityModal}
        />
        <Modal
          title="اضافة جامعة جديدة"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Input placeholder="اسم الجامعة " onChange={this.handleInputChange} />
        </Modal>
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
      </React.Fragment>
    );
  }
}

const UniversitiesContent = Form.create()(EditableTable);

export default UniversitiesContent;
