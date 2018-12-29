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
      value: 'createTime',
      label: '创建时间'
    },
    {
      value: 'progress',
      label: '进度'
    },
    {
      value: 'workMachine',
      label: '工作机'
    },
    {
      value: 'disMachine',
      label: '灾备机'
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
    name: '恢复任务0',
    createTime: '2018-12-25 13:30',
    progress: '恢复成功',
    workMachine: '192.168.2.1',
    disMachine: '192.168.2.2'
  },
  {
    id: 1,
    name: '恢复任务1',
    createTime: '2018-12-25 13:30',
    progress: '恢复失败',
    workMachine: '192.168.2.1',
    disMachine: '192.168.2.2'
  },
  {
    id: 2,
    name: '恢复任务2',
    createTime: '2018-12-25 13:30',
    progress: '恢复失败',
    workMachine: '192.168.2.1',
    disMachine: '192.168.2.2'
  },
  {
    id: 3,
    name: '恢复任务3',
    createTime: '2018-12-25 13:30',
    progress: '恢复失败',
    workMachine: '192.168.2.1',
    disMachine: '192.168.2.2'
  },
  {
    id: 4,
    name: '恢复任务4',
    createTime: '2018-12-25 13:30',
    progress: '恢复失败',
    workMachine: '192.168.2.1',
    disMachine: '192.168.2.2'
  },
  {
    id: 5,
    name: '恢复任务5',
    createTime: '2018-12-25 13:30',
    progress: '恢复失败',
    workMachine: '192.168.2.1',
    disMachine: '192.168.2.2'
  },
  {
    id: 6,
    name: '恢复任务6',
    createTime: '2018-12-25 13:30',
    progress: '恢复失败',
    workMachine: '192.168.2.1',
    disMachine: '192.168.2.2'
  },
  {
    id: 7,
    name: '恢复任务7',
    createTime: '2018-12-25 13:30',
    progress: '恢复失败',
    workMachine: '192.168.2.1',
    disMachine: '192.168.2.2'
  },
  {
    id: 8,
    name: '恢复任务8',
    createTime: '2018-12-25 13:30',
    progress: '恢复失败',
    workMachine: '192.168.2.1',
    disMachine: '192.168.2.2'
  },
  {
    id: 9,
    name: '恢复任务9',
    createTime: '2018-12-25 13:30',
    progress: '恢复失败',
    workMachine: '192.168.2.1',
    disMachine: '192.168.2.2'
  },
  {
    id: 10,
    name: '恢复任务10',
    createTime: '2018-12-25 13:30',
    progress: '恢复失败',
    workMachine: '192.168.2.1',
    disMachine: '192.168.2.2'
  },
  {
    id: 11,
    name: '恢复任务11',
    createTime: '2018-12-25 13:30',
    progress: '恢复失败',
    workMachine: '192.168.2.1',
    disMachine: '192.168.2.2'
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
      propName: 'createTime',
      labelName: '创建时间',
      sortable: true
    },
    {
      propName: 'progress',
      labelName: '进度',
      sortable: true
    },
    {
      propName: 'workMachine',
      labelName: '工作机',
      sortable: true
    },
    {
      propName: 'disMachine',
      labelName: '灾备机',
      sortable: true
    }
  ],
  table_data: tabelData,
  table_data_copy: tabelData,
  operationCloWidth: 210,
  operateBtns: [
    {
      name: '启动',
      operate: 'start',
      type: 'primary',
      icon: 'el-icon-menuicon-start'
    },
    {
      name: '停止',
      operate: 'stop',
      type: 'warning',
      icon: 'el-icon-menuicon-icon--'
    },
    {
      name: '删除',
      operate: 'delete',
      type: 'danger',
      icon: 'el-icon-delete'
    }
  ]
}

export default {
  SEARCH_PARAM: searchParam,
  PAGINATION_PARAM: paginationParam,
  TABLE_PARAM: tableParam
}
