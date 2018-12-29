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
      value: 'manageAddr',
      label: '管理接口地址'
    },
    {
      value: 'dataAddr',
      label: '数据接口地址'
    },
    {
      value: 'nodeType',
      label: '节点类型'
    },
    {
      value: 'operateSys',
      label: '操作系统'
    },
    {
      value: 'owner',
      label: '所有者'
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
    name: '1.1',
    status: '在线',
    manageAddr: '192.168.1.1',
    dataAddr: '192.168.1.1',
    nodeType: '工作机',
    operateSys: 'Windows',
    owner: 'sys'
  },
  {
    id: 1,
    name: '2.2',
    status: '离线',
    manageAddr: '192.168.2.2',
    dataAddr: '192.168.2.2',
    nodeType: '灾备机',
    operateSys: 'Linux',
    owner: 'admin'
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
      propName: 'status',
      labelName: '状态',
      sortable: true
    },
    {
      propName: 'manageAddr',
      labelName: '管理接口地址',
      sortable: true
    },
    {
      propName: 'dataAddr',
      labelName: '数据接口地址',
      sortable: true
    },
    {
      propName: 'nodeType',
      labelName: '节点类型',
      sortable: true
    },
    {
      propName: 'operateSys',
      labelName: '操作系统',
      sortable: true
    },
    {
      propName: 'owner',
      labelName: '所有者',
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
    },
    {
      name: '删除',
      operate: 'delete',
      type: 'danger',
      icon: 'el-icon-delete'
    },
    {
      name: '查看磁盘空间',
      operate: 'view',
      type: 'info',
      icon: 'el-icon-menuicon-252piechart'
    },
    {
      name: '查看日志',
      operate: 'migration',
      type: 'success',
      icon: 'el-icon-document'
    },
    {
      name: '系统状态',
      operate: 'restart',
      type: 'warning',
      icon: 'el-icon-menuicon-aistubiaokuozhan-'
    }
  ]
}

export default {
  SEARCH_PARAM: searchParam,
  PAGINATION_PARAM: paginationParam,
  TABLE_PARAM: tableParam
}
