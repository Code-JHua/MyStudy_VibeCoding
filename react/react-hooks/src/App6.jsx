import { useState, useEffect } from 'react'
import { Input, Space, Table, Popconfirm } from 'antd';
import './App6.css'

const { Search } = Input;

function App() {
    let [dataSource, setDataSource] = useState([])

    // 获取所有数据
    function fetchAllData() {
        fetch('http://localhost:3000/data', {
            method: 'GET',
        })
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setDataSource(data)
            })
    }
    
    // 删除数据
    function onDelete(id) {
        fetch(`http://localhost:3000/data/${id}`, {
            method: 'DELETE',
        })
            .then((res) => {
                // 删除成功后，更新本地状态，无需重新请求所有数据
                setDataSource(dataSource.filter(item => item.id !== id))
                return res.json()
            })
    }

    // 搜索数据
    function search(name) {
        if (!name) {
            // 如果搜索框为空，获取所有数据
            fetchAllData()
            return
        }
        
        fetch(`http://localhost:3000/data?name=${name}`)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setDataSource(data)
            })
    }

    useEffect(() => {
        fetchAllData()
    }, [])

    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'operation',
            dataIndex: 'operation',
            key: 'operation',
            render: (text, row) => {
                return (
                    <Space size="middle">
                        <Popconfirm title='确认删除吗？' onConfirm={() => onDelete(row.id)}>
                            <a href='#'>删除</a>
                        </Popconfirm>
                    </Space>
                )
            }
        },
    ];
    return (
        <div className='container'>
            <div className='search-box'>
                <Search
                    placeholder="input search text"
                    enterButton="Search"
                    onSearch={search}
                    size="large"
                    allowClear
                />
            </div>
            <Table
                dataSource={dataSource}
                columns={columns}
                pagination={false}
            />
        </div>
    )
}

export default App