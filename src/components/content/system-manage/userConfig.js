/** @format */

// 搜索框参数
const searchParam = {
  searchLabel: 'name',
  searchContent: '',
  searchOptions: [
    {
      value: 'name',
      label: '名称'
    },
    {
      value: 'role',
      label: '角色'
    },
    {
      value: 'status',
      label: '状态'
    },
    {
      value: 'lastLoginTime',
      label: '最近登录时间'
    }
  ]
}

// 分页参数
const paginationParam = {
  currentPage: 1,
  pageSize: 5,
  pageSizes: [5, 10, 15, 20]
}

// 表格数据
const tabelData = [
  {
    id: 0,
    name: 'admin',
    role: '系统管理员',
    status: '启用',
    lastLoginTime: '2018/12/25 00:00:00'
  }
]

// 表格参数
const tableParam = {
  multipleSelection: [],
  cols: [
    {
      type: 'selection',
      width: 30,
      reserve: true
    },
    {
      propName: 'name',
      labelName: '名称',
      sortable: true
    },
    {
      propName: 'role',
      labelName: '角色',
      sortable: true
    },
    {
      propName: 'status',
      labelName: '状态',
      sortable: true
    },
    {
      propName: 'lastLoginTime',
      labelName: '最近登录时间',
      sortable: true
    }
  ],
  table_data: tabelData,
  table_data_copy: tabelData,
  operationCloWidth: 210,
  operateBtns: [
    {
      name: '修改',
      operate: 'start',
      type: 'primary',
      icon: 'el-icon-edit'
    }
  ]
}

export default {
  SEARCH_PARAM: searchParam,
  PAGINATION_PARAM: paginationParam,
  TABLE_PARAM: tableParam
}
