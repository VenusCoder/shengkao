module.exports = (config) => {
  // 验证配置
  if (!config || !config.assets || !config.assets.imageBaseUrl) {
    throw new Error('无效的配置对象，缺少 assets.imageBaseUrl')
  }

  const baseUrl = config.assets.imageBaseUrl

  // 确保URL格式正确
  if (!baseUrl.startsWith('http')) {
    throw new Error(`无效的图片基础URL: ${baseUrl}`)
  }

  // 返回标准化数据
  return [
    {
      iid: 0,
      title: '广东省考技巧网',
      content:
        '本网站旨在为用户提供高质量的图片存储和分享服务，支持多种格式上传和在线预览。我们致力于打造一个安全、稳定、高效的图片管理平台，让用户能够随时随地访问和管理自己的图片资源。',
      image: `${baseUrl}/uploads/1748313310663-ed61acbb0c6b7fe551d47c7c9c894e30.png`,
      connectInformation: '联系方式：电话：400-123-4567，邮箱：support@imagehost.com',
    },
    {
      iid: 1,
      title: '我们的使命',
      content: '为用户提供简单易用的图片管理工具，让图片存储和分享变得轻松愉快。',
      image: `${baseUrl}/uploads/1748313310663-ed61acbb0c6b7fe551d47c7c9c894e30.png`,
      connectInformation: '商务合作：cooperation@imagehost.com',
    },
    {
      iid: 2,
      title: '技术优势',
      content:
        '采用先进的分布式存储架构，确保图片访问速度快、存储安全可靠。支持高并发访问，满足各种规模的需求。',
      image: `${baseUrl}/uploads/1748313310663-ed61acbb0c6b7fe551d47c7c9c894e30.png`,
      connectInformation: '技术支持：tech@imagehost.com',
    },
  ]
}
