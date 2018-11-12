/** @format */

/* 手机号验证 */
const isValidateMobile = str => {
  const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
  return reg.test(str)
}

const validateMobile = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入手机号'))
  } else {
    if (!isValidateMobile(value)) {
      callback(new Error('请输入正确的手机号'))
    } else {
      callback()
    }
  }
}

/* 验证rules */
const validateRules = item => {
  let rules = []
  // item.required：是否必填
  // item.requiredItem：必填项(如：请输入'密码')
  if (item.required && item.requiredItem) {
    rules.push({
      required: true,
      message: '请输入' + item.requiredItem,
      trigger: 'blur'
    })
  }
  // 验证类型
  if (item.type) {
    switch (item.type) {
      case 'email':
        rules.push({
          type: 'email',
          message: '请输入正确的邮箱地址',
          trigger: ['blur', 'change']
        })
        break
      case 'mobile':
        rules.push({
          validator: validateMobile,
          trigger: ['blur', 'change']
        })
        break
      default:
        rules.push({})
        break
    }
  }
  return rules
}
export default validateRules
