<template>
  <div class="home">
    <div class="center">
      <el-tabs v-model="activeName" stretch @tab-click="handleClick">
        <el-tab-pane label="保单号" name="1">
          <div style="text-align: center">

            <el-row class="row">
              <el-col span="4">
                渠道:
              </el-col>
              <el-col span="20">
                <el-select v-model="value" placeholder="请选择" style="width: 300px">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-col>
            </el-row>
            <el-row class="row">
              <el-col span="4">
                险种:
              </el-col>
              <el-col span="20">
                <el-select v-model="value" placeholder="请选择" style="width: 300px">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-col>
            </el-row>
            <el-row class="row">
              <el-col span="4">
                保单号:
              </el-col>
              <el-col span="20">
                <el-input v-model="input" placeholder="请输入内容" style="width: 300px" />
              </el-col>
            </el-row>
            <el-row class="row">
              <el-col span="4">
                业务来源:
              </el-col>
              <el-col span="20">
                <el-select v-model="value" placeholder="请选择" style="width: 300px">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-col>
            </el-row>
            <el-row class="row">
              <el-col offset="4" span="20">
                <el-button type="primary" @click="onSubmit"  style="width: 300px;">获取保单</el-button>
              </el-col>
            </el-row>
            <el-row class="row">
              <el-col offset="4" span="20" style="color: #99a9bf; font-size: 14px;text-align: center">
                <p>同一家保险公司支持绑定多个渠道获取台账</p>
              </el-col>
            </el-row>
          </div>
        </el-tab-pane>
        <el-tab-pane label="车牌号" name="2">
          <div style="text-align: center">
            <el-row class="row">
              <el-col span="4">
                渠道:
              </el-col>
              <el-col span="20">
                <el-select v-model="value" placeholder="请选择" style="width: 300px">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-col>
            </el-row>
            <el-row class="row">
              <el-col span="4">
                险种:
              </el-col>
              <el-col span="20">
                <el-select v-model="value" placeholder="请选择" style="width: 300px">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-col>
            </el-row>
            <el-row class="row">
              <el-col span="4">
                车牌号:
              </el-col>
              <el-col span="20">
                <el-input v-model="input" placeholder="请输入内容" style="width: 300px" />
              </el-col>
            </el-row>
            <el-row class="row">
              <el-col span="4">
                业务来源:
              </el-col>
              <el-col span="20">
                <el-select v-model="value" placeholder="请选择" style="width: 300px">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-col>
            </el-row>
            <el-row class="row">
              <el-col offset="4" span="20">
                <el-button type="primary" @click="onSubmit"  style="width: 300px;">获取保单</el-button>
              </el-col>
            </el-row>
            <el-row class="row">
              <el-col offset="4" span="20" style="color: #99a9bf; font-size: 14px;text-align: center">
                <p>同一家保险公司支持绑定多个渠道获取台账</p>
              </el-col>
            </el-row>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>

  </div>
</template>

<script>
export default {
  name: 'OneEntry',
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
      value: ''
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
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
  width: 400px;
}
  .row{
    display: flex;
    align-items: center;
    height: 3.5em;
    text-align: left;
  }
  .row el-rol{
    text-align: right;
    color: red;
  }
</style>
