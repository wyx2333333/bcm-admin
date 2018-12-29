/* eslint-disable vue/no-unused-components */
<template>
  <manage-page :mainHeader="mainHeader"
               :newHeader="newHeader"
               :configUrl="configUrl"
               :componentUrl="componentUrl"
               :btns="btns"
               @btnOperate="btnOperate"></manage-page>
</template>

<script>
import managePage from 'components/content/common/Manage-Page'
export default {
  components: { managePage },
  data() {
    return {
      mainHeader: '复制任务列表',
      newHeader: '新建复制任务',
      configUrl: 'copy-manage/copyConfig',
      componentUrl: 'copy-manage/NewCopyTask',
      btns: [
        {
          id: 0,
          name: '刷新',
          type: 'warning',
          operation: this.refresh
        },
        {
          id: 1,
          name: '删除',
          type: 'danger',
          operation: this.delete
        },
        {
          id: 2,
          name: '启动',
          type: 'success',
          operation: this.start
        },
        {
          id: 3,
          name: '停止',
          type: 'info',
          operation: this.stop
        }
      ]
    }
  },
  methods: {
    /* 表格btn操作 */
    btnOperate(operatBtn, index, row) {
      switch (operatBtn) {
        case 'start':
          console.log(`start row ${index} ----- ${JSON.stringify(row)}`)
          this.rowStart(index, row)
          break
        case 'stop':
          console.log(`stop row ${index} ----- ${JSON.stringify(row)}`)
          this.rowStop(index, row)
          break
        case 'delete':
          console.log(`delete row ${index} ----- ${JSON.stringify(row)}`)
          this.rowDelete(index, row)
          break
        default:
          break
      }
    },
    rowStart(index, row) {
      this.$message({
        message: `启动${row.name}成功!`,
        type: 'success'
      })
    },
    rowStop(index, row) {
      this.$message({
        message: `停止${row.name}成功!`,
        type: 'success'
      })
    },
    rowDelete(index, row) {
      this.$confirm('确认删除该任务?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: `删除${row.name}成功!`
          })
        })
        .catch(() => { })
    },
    refresh() {
      this.$message({
        type: 'success',
        message: '刷新成功!'
      })
    },
    delete() {
      this.$message({
        type: 'success',
        message: '删除成功!'
      })
    },
    start() {
      this.$message({
        type: 'success',
        message: '启动成功!'
      })
    },
    stop() {
      this.$message({
        type: 'success',
        message: '停止成功!'
      })
    }
  }
}
</script>
<style lang="scss">
</style>
