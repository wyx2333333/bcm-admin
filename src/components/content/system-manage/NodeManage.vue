/* eslint-disable vue/no-unused-components */
<template>
  <div class="node-manage">
    <el-card :class="showNodes ? 'table-card' : ''">
      <div slot="header"
           class="mg-header">{{ header }}</div>
      <div v-show="showNodes">
        <search-pagination-table :searchParam="searchParam"
                                 :tableParam="tableParam"
                                 :paginationParam="paginationParam"
                                 @tableRowClassName="tableRowClassName"
                                 @btnOperate="btnOperate"></search-pagination-table>
        <el-button type="primary"
                   size="small"
                   style="margin:40px 0 20px 20px"
                   @click="showNodes = false;header = '新建节点'">新建</el-button>
        <el-button type="success"
                   size="small">刷新</el-button>
      </div>
      <new-node v-if="!showNodes"
                @back="showNodes = true;header = '节点列表'"></new-node>
    </el-card>
  </div>
</template>

<script>
import searchPaginationTable from 'components/content/common/SearchInput-Table-Pagination'
import newNode from 'components/content/system-manage/NewNode'
export default {
  components: { searchPaginationTable, newNode },
  data() {
    return {
      header: '节点列表',
      showNodes: true,
      searchParam: {
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
      },
      paginationParam: {
        currentPage: 1,
        pageSize: 5,
        pageSizes: [5, 10, 15, 20]
      },
      tableParam: {
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
        table_data: [
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
        ],
        table_data_copy: [
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
        ],
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
    }
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (row.status === '迁移完成') {
        return 'success-row'
      } else if (row.status === '迁移失败') {
        return 'failed-row'
      }
      return ''
    },
    /* 表格btn操作 */
    btnOperate(operatBtn, index, row) {
      switch (operatBtn) {
        case 'start':
          console.log(`start row ${index} ----- ${JSON.stringify(row)}`)
          this.start(index, row)
          break
        case 'stop':
          console.log(`stop row ${index} ----- ${JSON.stringify(row)}`)
          this.stop(index, row)
          break
        case 'delete':
          console.log(`delete row ${index} ----- ${JSON.stringify(row)}`)
          this.delete(index, row)
          break
        case 'view':
          console.log(`view row ${index} ----- ${JSON.stringify(row)}`)
          this.view(index, row)
          break
        case 'migration':
          console.log(`migration row ${index} ----- ${JSON.stringify(row)}`)
          this.migration(index, row)
          break
        case 'restart':
          console.log(`restart row ${index} ----- ${JSON.stringify(row)}`)
          this.restart(index, row)
          break
        default:
          break
      }
    },
    start(index, row) {},
    stop(index, row) {},
    delete(index, row) {},
    view(index, row) {},
    migration(index, row) {},
    restart(index, row) {}
  }
}
</script>
<style lang="scss">
.node-manage {
  .mg-header {
    font-size: 18px;
    font-weight: 600;
  }
  .table-card .el-card__body {
    padding: 20px 0;
  }
  .search-wrap .el-select .el-input {
    width: 125px;
  }
}
</style>
