<template>
  <div class="new-node">
    <el-tabs v-model="activeTab">
      <el-tab-pane class="basic-tab"
                   label="基本设置"
                   name="basic">
        <el-form status-icon
                 :model="basicForm"
                 ref="basicForm"
                 size="mini"
                 label-width="250px">
          <div class="basic-label">
            <div class="label-title">通用设置</div>
            <el-form-item v-for="item in basicItems"
                          :key="item.prop"
                          :label="item.name + '：'"
                          :prop="item.prop"
                          :rules="$validateRules({ required: true, requiredItem: item.name })">
              <el-input v-model="basicForm[item.prop]"></el-input>
            </el-form-item>
            <el-form-item label="节点类型"
                          prop="nodeType"
                          :rules="$validateRules({ required: true, requiredItem: '节点类型' })">
              <el-select v-model="basicForm.nodeType"
                         placeholder="请选择节点类型：">
                <el-option v-for="nodeType in nodeTypes"
                           :key="nodeType.value"
                           :label="nodeType.label"
                           :value="nodeType.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="日志目录："
                          prop="logDir"
                          :rules="$validateRules({ required: true, requiredItem: '日志目录' })">
              <el-input v-model="basicForm.logDir"></el-input>
            </el-form-item>
          </div>
          <div class="basic-label">
            <div class="label-title">工作机设置</div>
            <el-form-item label="数据缓存目录："
                          prop="dataCacheDir"
                          :rules="$validateRules({ required: true, requiredItem: '数据缓存目录' })">
              <el-input v-model="basicForm.dataCacheDir"></el-input>
            </el-form-item>
            <el-form-item label="内存使用上限："
                          prop="memoryUsageMax"
                          :rules="$validateRules({ required: true, requiredItem: '内存使用上限' })">
              <el-input v-model="basicForm.memoryUsageMax">
                <template slot="append">MB</template>
              </el-input>
            </el-form-item>
            <el-form-item label="磁盘使用上限："
                          prop="diskUsageMax"
                          :rules="$validateRules({ required: true, requiredItem: '磁盘使用上限' })">
              <el-input v-model="basicForm.diskUsageMax">
                <template slot="append">MB</template>
              </el-input>
            </el-form-item>
            <el-form-item label="复制路径（Linux需要）："
                          prop="linuxCopyPath"
                          :rules="$validateRules({ required: true, requiredItem: '复制路径' })">
              <el-input type="textarea"
                        :rows="4"
                        v-model="basicForm.linuxCopyPath">
              </el-input>
            </el-form-item>
          </div>
          <div class="basic-label">
            <div class="label-title">灾备机设置</div>
            <el-form-item label="快照支持："
                          prop="snapSupport">
              <el-checkbox v-model="basicForm.snapSupport"></el-checkbox>
            </el-form-item>
            <el-form-item label="卷组（VG）名称（下表中选择）："
                          prop="VGName"
                          :rules="$validateRules({ required: true, requiredItem: '卷组名称' })">
              <el-input v-model="basicForm.VGName"></el-input>
              <el-table :data="VGTable_Data"
                        tooltip-effect="dark">
                <el-table-column label="卷组（VG）名称"
                                 align="center"
                                 prop="VGName">
                  <template slot-scope="scope">
                    <el-radio :label="scope.row.VGName"
                              v-model="basicForm.VGName"></el-radio>
                  </template>
                </el-table-column>
                <el-table-column label="总空间"
                                 align="center"
                                 prop="totalSpace"></el-table-column>
                <el-table-column label="已用空间"
                                 align="center"
                                 prop="usedSpace"></el-table-column>
                <el-table-column label="剩余空间"
                                 align="center"
                                 prop="remainSpace"></el-table-column>
              </el-table>
            </el-form-item>
            <el-form-item label="备注："
                          prop="remark">
              <el-input type="textarea"
                        :rows="4"
                        v-model="basicForm.remark">
              </el-input>
            </el-form-item>
          </div>
        </el-form>
      </el-tab-pane>
      <el-tab-pane class="monitor-tab"
                   label="监控设置"
                   name="monitor">
        <el-form status-icon
                 :model="monitorForm"
                 ref="monitorForm"
                 size="mini"
                 label-width="250px">
          <el-form-item style="margin-top:20px"
                        label="打开监控："
                        prop="monitorSupport">
            <el-checkbox v-model="monitorForm.monitorSupport"></el-checkbox>
          </el-form-item>
          <div v-if="monitorForm.monitorSupport">
            <el-form-item label="监控延迟："
                          prop="monitorDelay"
                          :rules="$validateRules({ required: true, requiredItem: '监控延迟' })">
              <el-input v-model="monitorForm.monitorDelay">
                <template slot="append">秒</template>
              </el-input>
            </el-form-item>
            <el-form-item label="分析数据目录："
                          prop="analyzeDataDir"
                          :rules="$validateRules({ required: true, requiredItem: '分析数据目录' })">
              <el-input v-model="monitorForm.analyzeDataDir"></el-input>
            </el-form-item>
            <el-form-item label="监控数据保留天数："
                          prop="monitorDataSavedDays"
                          :rules="$validateRules({ required: true, requiredItem: '监控数据保留天数' })">
              <el-input v-model="monitorForm.monitorDataSavedDays">
                <template slot="append">天</template>
              </el-input>
            </el-form-item>
            <el-form-item label="分析数据保留天数："
                          prop="analyzeDataSavedDays"
                          :rules="$validateRules({ required: true, requiredItem: '分析数据保留天数' })">
              <el-input v-model="monitorForm.analyzeDataSavedDays">
                <template slot="append">天</template>
              </el-input>
            </el-form-item>
          </div>
        </el-form>
      </el-tab-pane>
    </el-tabs>
    <el-button type="primary"
               size="small"
               style="margin:30px 0 20px 0"
               @click="newNode(['basicForm', 'monitorForm'])"
               v-loading.fullscreen.lock="isLoading"
               element-loading-text="正在提交节点信息"
               element-loading-background="rgba(0, 0, 0, 0.5)">提交</el-button>
    <el-button size="small"
               @click="backToTasks">返回</el-button>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      activeTab: 'basic',
      basicActiveTab: 'general',
      isLoading: false,
      nodeTypes: [
        {
          value: 'workMachine',
          label: '工作机'
        },
        {
          value: 'disMachine',
          label: '灾备机'
        },
        {
          value: 'mixMachine',
          label: '混合主机'
        }
      ],
      basicItems: [
        {
          name: '名称',
          prop: 'name'
        },
        {
          name: '管理接口地址',
          prop: 'manageAddr'
        },
        {
          name: '管理接口端口',
          prop: 'managePort'
        },
        {
          name: '数据接口地址',
          prop: 'dataAddr'
        },
        {
          name: '账号',
          prop: 'account'
        },
        {
          name: '密码',
          prop: 'password'
        }
      ],
      VGTable_Data: [
        {
          VGName: 'VolGroup00',
          totalSpace: '4195.56 GB',
          usedSpace: '4195.56 GB',
          remainSpace: '0 GB'
        },
        {
          VGName: 'VolGroup11',
          totalSpace: '7865.45 GB',
          usedSpace: '7865.45 GB',
          remainSpace: '0 GB'
        }
      ],
      basicForm: {
        name: '',
        manageAddr: '',
        managePort: '',
        dataAddr: '',
        account: '',
        password: '',
        nodeType: '',
        logDir: '',
        dataCacheDir: '',
        memoryUsageMax: '',
        diskUsageMax: '',
        linuxCopyPath: '/',
        snapSupport: false,
        VGName: '',
        remark: ''
      },
      monitorForm: {
        monitorSupport: false,
        monitorDelay: '',
        analyzeDataDir: '',
        monitorDataSavedDays: '',
        analyzeDataSavedDays: ''
      }
    }
  },
  watch: {},
  computed: {},
  methods: {
    newNode(formArr) {
      this.isLoading = true
      // 校验结果：promise对象
      const resultArr = []
      formArr.forEach(item => {
        resultArr.push(this.checkForm(item))
      })
      Promise.all(resultArr)
        .then(() => {
          setTimeout(() => {
            this.isLoading = false
            this.backToTasks()
            this.$message({
              message: '创建节点成功！',
              type: 'success'
            })
          }, 2000)
          console.log('表单验证通过!')
          console.log(this.basicForm)
          console.log(this.monitorForm)
        })
        .catch(error => {
          this.isLoading = false
          console.log(error)
        })
    },
    /* 校验表单 */
    checkForm(formName) {
      return new Promise((resolve, reject) => {
        this.$refs[formName].validate(valid => {
          if (valid) {
            resolve()
          } else {
            reject(new Error('error submit!!!'))
          }
        })
      })
    },
    /* 返回任务列表 */
    backToTasks() {
      this.$emit('back')
    }
  },
  created() {},
  mounted() {}
}
</script>
<style lang="scss">
.new-node {
  .el-input {
    width: 217px;
  }
  .basic-tab {
    .basic-label {
      margin: 20px 40px;
      .label-title {
        padding-bottom: 5px;
        margin-bottom: 15px;
        color: $grey;
        border-bottom: 1px solid $border-3;
      }
    }
    .el-form {
      .el-textarea {
        width: 300px;
      }
      .el-form-item {
        margin-left: 30px;
      }
    }
  }
  .monitor-tab .el-form .el-form-item {
    margin-left: 70px;
  }
  .el-form .el-form-item .el-table {
    width: 600px;
    margin-top: 18px;
  }
}
</style>
