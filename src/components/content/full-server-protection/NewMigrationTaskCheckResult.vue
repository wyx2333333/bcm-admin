/* eslint-disable vue/no-unused-vars */
<template>
  <el-dialog title="服务器迁移检查列表"
             width="800px"
             :visible.sync="checkResult.show"
             append-to-body>
    <el-table ref="checkResult_table"
              :data="table_checkResult"
              border
              tooltip-effect="dark"
              max-height="500">
      <el-table-column width="60px"
                       align="center">
        <template slot-scope="scope">
          <i class="el-icon-success"
             style="color: #67c23a"></i>
        </template>
      </el-table-column>
      <el-table-column label="检查项目"
                       prop="checkItem"
                       width="150px"
                       align="center">
      </el-table-column>
      <el-table-column label="详细信息"
                       prop="details"
                       align="center">
      </el-table-column>
    </el-table>
    <span slot="footer"
          class="dialog-footer">
      <el-button size="small"
                 type="success"
                 @click="resubmit">重新检查</el-button>
      <el-button size="small"
                 @click="checkResult.show = false">取消</el-button>
      <el-button size="small"
                 type="primary"
                 v-loading.fullscreen.lock="isLoading"
                 element-loading-text="正在提交任务信息"
                 element-loading-background="rgba(0, 0, 0, 0.5)"
                 @click="submit">提交</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  components: {},
  props: { checkResult: Object },
  data() {
    return {
      isLoading: false,
      table_checkResult: [
        {
          checkItem: '功能许可',
          details: '软件许可具备迁移授权'
        },
        {
          checkItem: '源端目标端',
          details: '工作机和灾备机位于不同的系统'
        },
        {
          checkItem: '操作系统',
          details:
            '工作机和灾备机的操作系统版本相同，工作机的操作系统是：Microsoft Windows Server 2008 R2/x64 Edition/Service Pack1，灾备机的操作系统是：Microsoft Windows Server 2008 R2/x64 Edition/Service Pack1'
        },
        {
          checkItem: '磁盘映射',
          details:
            '灾备机包含了工作机需要迁移的全部盘符：C：；工作机的盘符列表为C：,灾备机的盘符列表为C：；'
        },
        {
          checkItem: '旧的规则',
          details: '工作机和灾备机都不存在旧的规则'
        },
        {
          checkItem: '磁盘空间',
          details: '灾备机磁盘空间具备服务器迁移条件'
        }
      ]
    }
  },
  watch: {},
  computed: {},
  methods: {
    resubmit() {
      this.$emit('resubmit')
      this.checkResult.show = false
    },
    submit() {
      this.checkResult.show = false
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
        this.$emit('returnTasksList')
        this.$message({
          message: '创建迁移任务成功！',
          type: 'success'
        })
      }, 2000)
    }
  },
  created() {},
  mounted() {}
}
</script>
<style lang="scss">
</style>
