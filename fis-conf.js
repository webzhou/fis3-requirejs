fis.hook('amd',{
  baseUrl: 'js/lib',
  paths: {
    "jquery": "jquery-1.10.1.min",
    "superslide": "jquery.SuperSlide",  
  },
  shim:{
    'superslide':['jquery']
  }
});

fis.match('js/lib/**', {  
  isMod: true
});
fis.match('*.{png,jpg,gif,js,css,html}', {
  release: '/templets/default/$0'
});

fis.match('::package', {
  spriter: fis.plugin('csssprites')
})
fis.match('*.css', {
  // 给匹配到的文件分配属性 `useSprite`
  useSprite: true
});
// 清除其他配置，只保留如下配置
fis.match('*.js', {
  // fis-optimizer-uglify-js 插件进行压缩，已内置
  optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
  // fis-optimizer-clean-css 插件进行压缩，已内置
  optimizer: fis.plugin('clean-css')
});
fis.match('::package', {  
  postpackager: fis.plugin('loader', {
    sourceMap: true, //是否生成依赖map文件
    useInlineMap: true //是否将sourcemap作为内嵌脚本输出
  })
});
