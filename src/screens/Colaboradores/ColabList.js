import { Icon, Popconfirm, Table, Input, Button } from 'antd'
import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useStore } from '../../store/helpers'

export const ColabList = observer(() => {
  const { isLoading, colaboradores, deleteColaborador } = useStore('colabStore')
  // const [searchText, setSearchText] = useState('')

  const colaboradoresMaped = Object.entries(colaboradores).map((v, k) => {
    return {
      ...v[1],
      key: v[0]
    }
  })

  const columns = [
    {
      title: 'Nome',
      dataIndex: 'nome',
      key: 'name',
      width: '90%',
      ...getColumnSearchProps('nome')
    },
    {
      title: 'Ações',
      key: 'diaDisp',
      width: '10%',
      render: (text, record) => (
        <span>
          <Link to={'/colaboradores/' + record.key}>
            <Icon type="form" />
          </Link>
          <Popconfirm
            title={`Remover ${record.nome} ?`}
            icon={<Icon type="question-circle-o" style={{ color: 'red' }} />}
            placement="right"
            okText="Sim"
            cancelText="Cancelar"
            onConfirm={e => {
              deleteColaborador(record.key, record.nome)
            }}
          >
            <Link to="">
              <Icon type="delete" style={{ color: 'red', marginLeft: 6 }} />
            </Link>
          </Popconfirm>
        </span>
      )
    }
  ]

  function getColumnSearchProps(dataIndex) {
    let searchInput
    return {
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters
      }) => (
        <div style={{ padding: 8 }}>
          <Input
            ref={node => {
              searchInput = node
            }}
            placeholder={`Search ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={e =>
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            }
            onPressEnter={() => handleSearch(selectedKeys, confirm)}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm)}
            icon="search"
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </div>
      ),
      filterIcon: filtered => (
        <Icon
          type="search"
          style={{ color: filtered ? '#1890ff' : undefined }}
        />
      ),
      onFilter: (value, record) =>
        record[dataIndex]
          .toString()
          .toLowerCase()
          .includes(value.toLowerCase()),
      onFilterDropdownVisibleChange: visible => {
        if (visible) {
          setTimeout(() => searchInput.select())
        }
      }
    }
  }

  function handleSearch(selectedKeys, confirm) {
    confirm()
    // setSearchText(selectedKeys[0])
  }

  function handleReset(clearFilters) {
    clearFilters()
    // setSearchText('')
  }

  return (
    <Table
      loading={isLoading}
      columns={columns}
      dataSource={colaboradoresMaped}
      pagination={{ pageSize: 10 }}
    />
  )
})
