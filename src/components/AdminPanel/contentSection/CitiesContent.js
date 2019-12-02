import React from 'react';
import 'antd/dist/antd.css';
import './content.scss';
import { connect } from 'react-redux';
import {
  Table,
  Input,
  InputNumber,
  Form,
  Modal,
  Cascader,
  Menu,
  Dropdown
} from 'antd';
import {
  updateCity,
  deteteCity
} from '../../../store/actions/adminContent/citiesContentAction';
import statatisticsService from '../../../services/statisticsService';
import staticService from '../../../services/AdminContentServices/city';

import delete_icon from '../../../images/delete.svg';
import update_icon from '../../../images/edit.svg';
import add_icon from '../../../images/plus.svg';

const { allCities, allCountries } = statatisticsService;
const { addCity } = staticService;
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
    deleteVisible: false,
    city: '',
    countries: [],
    country: ''
  };

  async componentDidMount() {
    const allCountriesData = await allCountries();
    this.setState({ countries: allCountriesData });

    const allCitiesData = await allCities();
    const formattedData = allCitiesData.map(elm => ({
      key: elm.id,
      name: elm.label
    }));

    this.setState({
      data: formattedData
    });
  }

  columns = [
    {
      title: 'اسم المدينة',
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
              <a rel="noopener noreferrer" onClick={this.showDeleteModal}>
                <img src={delete_icon} className="delete-icon" alt="" />
              </a>
              <Modal
                title="حذف عنصر"
                visible={this.state.deleteVisible}
                onOk={() => {
                  this.delete(record.key);
                }}
                onCancel={this.handleCancel}
              >
                <p>هل ترغب حقاً في حذف هذا العنصر</p>
              </Modal>
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
        this.setState({ data: newData, editingKey: '' }, () => {
          this.props.updateCity({
            id: key,
            type: 'cityName',
            value: row.name
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
    await this.props.deteteCity({
      id: key
    });
    this.setState({
      data: data.filter(city => city.key !== key),
      deleteVisible: false
    });
  };

  addCityModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = async countryId => {
    const newData = this.state.data;
    const { city } = this.state;
    const addCityData = await addCity({
      cityName: city,
      countryId
    });

    await newData.push({ name: addCityData.cityName, key: addCityData._id });
    this.setState({
      data: newData,
      visible: false
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false,
      deleteVisible: false
    });
    console.log('++++', this.state);
  };

  showDeleteModal = () => {
    this.setState({
      deleteVisible: true
    });
  };

  handleInputChange = e => {
    this.setState({
      city: e.target.value
    });
  };

  countryChange = (value, selectedOptions) => {
    this.setState({
      country: selectedOptions[0]
    });
  };

  render() {
    const { country } = this.state;
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
        <Cascader
          className="dropdown-menu country-dropmenu"
          options={this.state.countries}
          onChange={this.countryChange}
          placeholder="اختر الدولة"
        />
        <img
          src={add_icon}
          className="add-icon"
          alt="مدينة جديدة"
          onClick={this.addCityModal}
        />
        <Modal
          title="اضافة مدينة جديدة"
          visible={this.state.visible}
          onOk={() => {
            this.handleOk(country ? country.id : '');
          }}
          onCancel={this.handleCancel}
        >
          <Input placeholder="اسم المدينة " onChange={this.handleInputChange} />
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

const CitiesContent = Form.create()(EditableTable);

const mapStateToProps = ({ adminContent }) => ({
  cities: adminContent
});
const mapDispatchToProps = dispatch => ({
  updateCity: props => dispatch(updateCity(props)),
  deteteCity: props => dispatch(deteteCity(props))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CitiesContent);
