<template>
  <div class="home">
    <div class="center">
      <el-tabs v-model="activeName" stretch @tab-click="handleClick">
        <el-tab-pane label="保单号" name="1">
          <el-form label-width="70px" :model="formLabelAlign" style="text-align: left;margin-left: 10%">
            <el-form-item label="出单渠道">
              <el-select v-model="value" placeholder="请选择" style="width: 80%">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="险种类型">
              <el-select v-model="value" placeholder="请选择" style="width:80%">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="业务来源">
              <el-select v-model="value" placeholder="请选择" style="width:80%">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="保单号">
              <el-input
                v-model="value"
                style="width:80%"
                type="textarea"
                rows="4"
                placeholder="请输入内容"
              />
            </el-form-item>
            <el-form-item label="">
              <el-button type="primary" style="width: 80%" @click="onSubmit">获取保单</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="车牌号" name="2">
          <el-form label-width="70px" :model="formLabelAlign" style="text-align: left;margin-left: 10%">
            <el-form-item label="出单渠道">
              <el-select v-model="value" placeholder="请选择" style="width: 80%">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="险种类型">
              <el-select v-model="value" placeholder="请选择" style="width:80%">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="业务来源">
              <el-select v-model="value" placeholder="请选择" style="width:80%">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="车牌号码">
              <el-input
                v-model="value"
                style="width:80%"
                type="textarea"
                rows="4"
                placeholder="请输入内容"
              />
            </el-form-item>
            <el-form-item label="">
              <el-button type="primary" style="width: 80%" @click="onSubmit">下一步</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="刷卡日期" name="3">
          <el-form label-width="70px" :model="formLabelAlign" style="text-align: left;margin-left: 10%">
            <el-form-item label="刷卡日期">
              <el-date-picker
                v-model="value2"
                type="daterange"
                :picker-options="pickerOptions"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期" format="yyyy-MM-dd"
                align="left"  style="width:100%"
              />
            </el-form-item>
            <el-form-item label="保险公司">
              <el-select v-model="value" placeholder="请选择" style="width:100%">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="">
              <el-button type="primary" style="width: 80%" @click="onSubmit">获取保单</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BatchCapture',
  components: {},
  data() {
    return {
      activeName: '1',
      options: [{
        value: '1',
        label: '太平洋保险'
      }, {
        value: '2',
        label: '人民保险'
      }, {
        value: '3',
        label: '平安车险'
      }],
      value: '',
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      value2: ''
    }
  }

}
</script>

<style scoped>
  .home{
    text-align: center;
    padding: 2em;
    display: flex;
    justify-content: center;
  }
  .center{
    padding-top: 1em;
    width: 500px;
    text-align: center;
  }
  .row{
    display: flex;
    align-items: center;
    height: 3.5em;
    text-align: left;
  }
  .row1{
    display: flex;
    align-items: center;
    text-align: left;
  }
  .row el-rol{
    text-align: right;
    color: red;
  }
</style>
