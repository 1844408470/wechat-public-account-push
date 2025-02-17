/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx2c4329ff789e8764',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'ae61e47c76b7fd3bbe3c51527074092a',

  PROVINCE: '湖南',
  CITY: '湘潭',

  USERS: [
    {
      // 想要发送的人的名字
      name: '楠楠宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o13Zs5pzbbW9nCHdntBCo3qJkKo8',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'GNs09IoAY2klfvXjhUTERg7j0b6AzOeetO5I08LUyHE',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '10-02',
      festivals: [
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '10-05',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-10-05' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'Qyf6-yw3F28pXqHjjkj4Ka4gURF8_7FOYiFH9QA3w2s',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o13Zs5jdjN4iAnfphsrxlLShI0-g',
    }
  ],

}

module.exports = USER_CONFIG

