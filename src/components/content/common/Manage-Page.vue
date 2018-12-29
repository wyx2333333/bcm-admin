/* eslint-disable vue/no-unused-components */
<template>
  <div class="manage-page">
    <el-card :class="showTable ? 'table-card' : ''">
      <div slot="header"
           class="mg-header">{{ header }}</div>
      <div v-show="showTable">
        <search-pagination-table :searchParam="searchParam"
                                 :tableParam="tableParam"
                                 :paginationParam="paginationParam"
                                 @tableRowClassName="tableRowClassName"
                                 @btnOperate="btnOperate"></search-pagination-table>
        <el-button class="new-btn"
                   type="primary"
                   size="small"
                   @click="showTable = false;header = newHeader">新建</el-button>
        <el-button v-for="btn in btns"
                   :key="btn.id"
                   :type="btn.type"
                   size="small"
                   @click="btn.operation">{{btn.name}}</el-button>
      </div>
      <component :is="componentData"
                 v-if="!showTable"
                 @back="showTable = true;header = mainHeader"></component>
    </el-card>
  </div>
</template>

<script>
import searchPaginationTable from 'components/content/common/SearchInput-Table-Pagination'
export default {
  components: { searchPaginationTable },
  props: {
    mainHeader: String,
    newHeader: String,
    configUrl: String,
    componentUrl: String,
    btns: Array
  },
  created() {
    this.setData()
  },
  data() {
    return {
      showTable: true,
      header: this.mainHeader,
      searchParam: {},
      tableParam: {},
      paginationParam: {},
      componentData: {}
    }
  },
  methods: {
    setData() {
      const self = this
      import(`components/content/${this.componentUrl}`).then(componentData => {
        self.componentData = componentData.default
      })
      const configData = require(`components/content/${this.configUrl}`).default
      this.searchParam = JSON.parse(JSON.stringify(configData)).SEARCH_PARAM
      this.tableParam = JSON.parse(JSON.stringify(configData)).TABLE_PARAM
      this.paginationParam = JSON.parse(
        JSON.stringify(configData)
      ).PAGINATION_PARAM
    },
    tableRowClassName({ row, rowIndex }) {
      this.$emit('tableRowClassName', { row, rowIndex })
    },
    btnOperate(operatBtn, index, row) {
      this.$emit('btnOperate', operatBtn, index, row)
    }
  }
}
</script>
<style lang="scss">
.manage-page {
  .mg-header {
    font-size: 18px;
    font-weight: 600;
  }
  .table-card .el-card__body {
    padding: 20px 0;
    .new-btn {
      margin: 40px 0 20px 20px;
    }
  }
}
</style>
