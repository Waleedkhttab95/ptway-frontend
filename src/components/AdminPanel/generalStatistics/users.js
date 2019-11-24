import React from 'react';
import 'antd/dist/antd.css';
import { Table, Input, InputNumber, Form } from 'antd';
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
    data: []
  };

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      const { dailyAds, weeklyAds, monthlyAds } = this.props.generalStatistics;

      if (dailyAds) {
        this.setState({ data: dailyAds.users });
      }
      if (monthlyAds) {
        this.setState({ data: monthlyAds.users });
      }
      if (weeklyAds) {
        this.setState({ data: weeklyAds.users });
      }
    }
  }

  columns = [
    {
      title: 'الاسم الأول',
      dataIndex: 'firstName',
      width: '15%',
      editable: true
    },
    {
      title: 'الاسم الأخير',
      dataIndex: 'lastName',
      width: '15%',
      editable: true
    },
    {
      title: 'البريد الالكتروني',
      dataIndex: 'email',
      width: '15%',
      editable: true
    },
    {
      title: 'حالة التفعيل',
      dataIndex: 'isConfirmed',
      width: '15%',
      editable: true
    }
  ];

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
          title: col.title
        })
      };
    });

    return (
      <React.Fragment>
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

const UsergeneralStatistics = Form.create()(EditableTable);

export default UsergeneralStatistics;
