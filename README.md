# webpac-require-context-dynamic-inject

#### 按需打包方案
##### 使用方式

1. 在 `yarn serve` 或 `yarn build` 时在指令最后添加`--FileName=[modeName]` 指令
2. 如只打包A模块的组件，则`FileName`为`A`  `yarn build --FileName=A`
3. webpack将只打包`router/modules`下`A.js`里的组件
4. 以此实现按需打包

##### 原理
1. 基于 `webpack.DefinePlugin` 和 `require.context` 的联动实现按需打包。
2. 通过`webpack.DefinePlugin`注入自定义变量可以绕开webpack的静态检测，实现动态正则！
3. 在 `vue.config.js`中注入`Define_FileName`，从指令中获取
4. 在`router/index.js`中做参数接受，挂在`require.context`的第三个参数上。
5. 根据正则实现按需加载路由文件，借此进行按需打包

##### 实践
1. demo里有A和B两个文件，其中一个有50M+的gif图片
2. 执行yarn build --FileName=A 进行打包,查看包大小，只打包了A模块
3. 执行yarn build --FileName=B 进行打包,查看包大小，只打包了B模块
4. 执行yarn serve --FileName=B 同理，只有B模块的路由生效

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```