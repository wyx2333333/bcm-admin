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
      value: 'status',
      label: '状态'
    },
    {
      value: 'workMachine',
      label: '工作机'
    },
    {
      value: 'disMachine',
      label: '灾备机'
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
    name: '迁移任务1',
    status: '迁移完成',
    workMachine: '192.168.1.1',
    disMachine: '192.168.1.2',
    owner: 'sys'
  },
  {
    id: 1,
    name: '迁移任务2',
    status: '迁移失败',
    workMachine: '192.168.2.1',
    disMachine: '192.168.2.2',
    owner: 'admin'
  },
  {
    id: 2,
    name: '迁移任务3',
    status: '迁移失败',
    workMachine: '192.168.2.1',
    disMachine: '192.168.2.2',
    owner: 'admin'
  },
  {
    id: 3,
    name: '迁移任务4',
    status: '迁移失败',
    workMachine: '192.168.2.1',
    disMachine: '192.168.2.2',
    owner: 'admin'
  },
  {
    id: 4,
    name: '迁移任务5',
    status: '迁移完成',
    workMachine: '192.168.2.1',
    disMachine: '192.168.2.2',
    owner: 'admin'
  },
  {
    id: 5,
    name: '迁移任务6',
    status: '迁移失败',
    workMachine: '192.168.2.1',
    disMachine: '192.168.2.2',
    owner: 'admin'
  },
  {
    id: 6,
    name: '迁移任务7',
    status: '迁移失败',
    workMachine: '192.168.2.1',
    disMachine: '192.168.2.2',
    owner: 'admin'
  },
  {
    id: 7,
    name: '迁移任务8',
    status: '迁移失败',
    workMachine: '192.168.2.1',
    disMachine: '192.168.2.2',
    owner: 'admin'
  },
  {
    id: 8,
    name: '迁移任务9',
    status: '迁移失败',
    workMachine: '192.168.2.1',
    disMachine: '192.168.2.2',
    owner: 'admin'
  },
  {
    id: 9,
    name: '迁移任务10',
    status: '迁移失败',
    workMachine: '192.168.2.1',
    disMachine: '192.168.2.2',
    owner: 'admin'
  },
  {
    id: 10,
    name: '迁移任务11',
    status: '迁移失败',
    workMachine: '192.168.2.1',
    disMachine: '192.168.2.2',
    owner: 'admin'
  },
  {
    id: 11,
    name: '迁移任务12',
    status: '迁移失败',
    workMachine: '192.168.2.1',
    disMachine: '192.168.2.2',
    owner: 'admin'
  },
  {
    id: 12,
    name: '迁移任务13',
    status: '迁移失败',
    workMachine: '192.168.2.1',
    disMachine: '192.168.2.2',
    owner: 'admin'
  },
  {
    id: 13,
    name: '迁移任务14',
    status: '迁移失败',
    workMachine: '192.168.2.1',
    disMachine: '192.168.2.2',
    owner: 'admin'
  },
  {
    id: 14,
    name: '迁移任务15',
    status: '迁移失败',
    workMachine: '192.168.2.1',
    disMachine: '192.168.2.2',
    owner: 'admin'
  },
  {
    id: 15,
    name: '迁移任务16',
    status: '迁移失败',
    workMachine: '192.168.2.1',
    disMachine: '192.168.2.2',
    owner: 'admin'
  },
  {
    id: 16,
    name: '迁移任务17',
    status: '迁移失败',
    workMachine: '192.168.2.1',
    disMachine: '192.168.2.2',
    owner: 'admin'
  },
  {
    id: 17,
    name: '迁移任务18',
    status: '迁移失败',
    workMachine: '192.168.2.1',
    disMachine: '192.168.2.2',
    owner: 'admin'
  },
  {
    id: 18,
    name: '迁移任务19',
    status: '迁移失败',
    workMachine: '192.168.2.1',
    disMachine: '192.168.2.2',
    owner: 'admin'
  },
  {
    id: 19,
    name: '迁移任务20',
    status: '迁移失败',
    workMachine: '192.168.2.1',
    disMachine: '192.168.2.2',
    owner: 'admin'
  },
  {
    id: 20,
    name: '迁移任务21',
    status: '迁移失败',
    workMachine: '192.168.2.1',
    disMachine: '192.168.2.2',
    owner: 'admin'
  },
  {
    id: 21,
    name: '迁移任务22',
    status: '迁移失败',
    workMachine: '192.168.2.1',
    disMachine: '192.168.2.2',
    owner: 'admin'
  },
  {
    id: 22,
    name: '迁移任务23',
    status: '迁移失败',
    workMachine: '192.168.2.1',
    disMachine: '192.168.2.2',
    owner: 'admin'
  },
  {
    id: 23,
    name: '迁移任务24',
    status: '迁移失败',
    workMachine: '192.168.2.1',
    disMachine: '192.168.2.2',
    owner: 'admin'
  },
  {
    id: 24,
    name: '迁移任务25',
    status: '迁移失败',
    workMachine: '192.168.2.1',
    disMachine: '192.168.2.2',
    owner: 'admin'
  },
  {
    id: 25,
    name: '迁移任务26',
    status: '迁移失败',
    workMachine: '192.168.2.1',
    disMachine: '192.168.2.2',
    owner: 'admin'
  },
  {
    id: 26,
    name: '迁移任务27',
    status: '迁移失败',
    workMachine: '192.168.2.1',
    disMachine: '192.168.2.2',
    owner: 'admin'
  },
  {
    id: 27,
    name: '迁移任务28',
    status: '迁移失败',
    workMachine: '192.168.2.1',
    disMachine: '192.168.2.2',
    owner: 'admin'
  },
  {
    id: 28,
    name: '迁移任务29',
    status: '迁移失败',
    workMachine: '192.168.2.1',
    disMachine: '192.168.2.2',
    owner: 'admin'
  },
  {
    id: 29,
    name: '迁移任务30',
    status: '迁移失败',
    workMachine: '192.168.2.1',
    disMachine: '192.168.2.2',
    owner: 'admin'
  },
  {
    id: 30,
    name: '迁移任务31',
    status: '迁移失败',
    workMachine: '192.168.2.1',
    disMachine: '192.168.2.2',
    owner: 'admin'
  },
  {
    id: 31,
    name: '迁移任务32',
    status: '迁移失败',
    workMachine: '192.168.2.1',
    disMachine: '192.168.2.2',
    owner: 'admin'
  },
  {
    id: 32,
    name: '迁移任务33',
    status: '迁移失败',
    workMachine: '192.168.2.1',
    disMachine: '192.168.2.2',
    owner: 'admin'
  },
  {
    id: 33,
    name: '迁移任务34',
    status: '迁移失败',
    workMachine: '192.168.2.1',
    disMachine: '192.168.2.2',
    owner: 'admin'
  },
  {
    id: 34,
    name: '迁移任务35',
    status: '迁移失败',
    workMachine: '192.168.2.1',
    disMachine: '192.168.2.2',
    owner: 'admin'
  },
  {
    id: 35,
    name: '迁移任务36',
    status: '迁移失败',
    workMachine: '192.168.2.1',
    disMachine: '192.168.2.2',
    owner: 'admin'
  },
  {
    id: 36,
    name: '迁移任务37',
    status: '迁移失败',
    workMachine: '192.168.2.1',
    disMachine: '192.168.2.2',
    owner: 'admin'
  },
  {
    id: 37,
    name: '迁移任务38',
    status: '迁移失败',
    workMachine: '192.168.2.1',
    disMachine: '192.168.2.2',
    owner: 'admin'
  },
  {
    id: 38,
    name: '迁移任务39',
    status: '迁移失败',
    workMachine: '192.168.2.1',
    disMachine: '192.168.2.2',
    owner: 'admin'
  },
  {
    id: 39,
    name: '迁移任务40',
    status: '迁移失败',
    workMachine: '192.168.2.1',
    disMachine: '192.168.2.2',
    owner: 'admin'
  }
]

// 表格参数
const tableParam = {
  multipleSelection: [],
  cols: [
    {
      type: 'selection',
      width: 80,
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
      propName: 'workMachine',
      labelName: '工作机',
      sortable: true
    },
    {
      propName: 'disMachine',
      labelName: '灾备机',
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
  operationCloWidth: 300,
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
    },
    {
      name: '查看',
      operate: 'view',
      type: 'info',
      icon: 'el-icon-view'
    },
    {
      name: '迁移',
      operate: 'migration',
      type: 'success',
      icon: 'el-icon-menuicon-swap'
    },
    {
      name: '重启',
      operate: 'restart',
      class: 'table-btn restart-btn',
      icon: 'el-icon-menuicon-reload'
    }
  ]
}

export default {
  SEARCH_PARAM: searchParam,
  PAGINATION_PARAM: paginationParam,
  TABLE_PARAM: tableParam
}
