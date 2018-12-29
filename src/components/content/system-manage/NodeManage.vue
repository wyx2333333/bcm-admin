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
      mainHeader: '节点列表',
      newHeader: '新建节点',
      configUrl: 'system-manage/nodeConfig',
      componentUrl: 'system-manage/NewNode',
      btns: [
        {
          id: 0,
          name: '刷新',
          type: 'warning',
          operation: this.refresh
        }
      ]
    }
  },
  methods: {
    /* 表格btn操作 */
    btnOperate(operatBtn, index, row) {
      switch (operatBtn) {
        case 'delete':
          console.log(`delete row ${index} ----- ${JSON.stringify(row)}`)
          this.delete(index, row)
          break
        default:
          break
      }
    },
    delete(index, row) {
      this.$confirm('确认删除该节点?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: `删除${row.name}节点成功!`
          })
        })
        .catch(() => { })
    },
    refresh() {
      this.$message({
        type: 'success',
        message: '刷新成功!'
      })
    }
  }
}
</script>
<style lang="scss">
</style>
