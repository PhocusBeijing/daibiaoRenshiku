import Vue from 'vue'

/**
 * 失败操作提示
 */
Vue.prototype.error = function (param) {
  let msg = '操作失败'
  if (param) {
    msg = param
  }
  this.$message({
    type: 'error',
    message: msg
  })
}
/**
 * 成功操作提示
 */
Vue.prototype.success = function (param) {
  let msg = '操作成功'
  if (param) {
    msg = param
  }
  this.$message({
    type: 'success',
    message: msg
  })
}
/**
 * 检测邮箱格式
 * @param [email] 邮箱
 * @return [boolean] true || false
 */
Vue.prototype.isEmail = function (email) {
  var judge = /^[A-Za-z0-9](\.?[A-Za-z0-9_-]){0,}@[A-Za-z0-9-]+\.([A-Za-z]{1,6}\.)?[A-Za-z]{2,6}$/g
  if (judge.test(email)) {
    return true
  } else {
    return false
  }
}
/**
 * 子节点递归（根据pid找到子级）
 * 列表，id键名，pid键名，当前pid
 */
Vue.prototype.node_merge = function (data, idKey, pidKey, pid) {
  let list = []
  for (let ind in data) {
    let item = data[ind]
    if (item[idKey] === item[pidKey]) {
      let children = this.node_merge(data.filter(i => i[idKey] !== item[idKey]), idKey, pidKey, item[idKey])
      if (children && children.length) item.children = children
      list.push(item)
    } else {
      if (item[pidKey] === pid) {
        let children = this.node_merge(data.filter(i => i[idKey] !== item[idKey]), idKey, pidKey, item[idKey])
        if (children && children.length) item.children = children
        list.push(item)
      }
    }
  }
  return list
}
/**
 * 确认弹框
 * @title [string] 确认弹框标题
 * @content [string] 确认信息
 * @callback [function] 确认后回调方法
 */
Vue.prototype.confirm = function (title, content, callback) {
  let t = '删除提示'
  let c = '此操作将永久删除该文件, 是否继续?'
  if (title) {
    t = title
  }
  if (content) {
    c = content
  }
  this.$confirm(c, t, {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    callback()
  }).catch(() => {})
}
/**
 * 路由跳转
 * @param [string] 路由
 * @return [null]
 */
Vue.prototype.router = function (param) {
  this.$router.push(param, () => {})
}
/**
 * 获取窗口屏幕高度
 * @param string 需要获取的名称
 * @return number
 */
Vue.prototype.size = function (param) {
  let res = ''
  if (param) {
    switch (param) {
      case 'innerWidth':
        res = window.innerWidth
        break
      case 'innerHeight':
        res = window.innerHeight
        break
      case 'screenWidth':
        res = window.screen.width
        break
      case 'screenHeight':
        res = window.screenHeight
        break
    }
  }
  return res
}
