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
      mainHeader: '用户列表',
      newHeader: '新建用户',
      configUrl: 'system-manage/userConfig',
      componentUrl: 'system-manage/NewUser',
      btns: []
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
      this.$confirm('确认删除该用户?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: `删除${row.name}用户成功!`
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
