# 基础插件安装
yarn add react-router-dom axios less less-loader@4.0.1 antd

# 引入Less
1. ### `yarn eject`  暴露webpack
2. 找到 config/webpack.config.js 在其中添加一以下代码

![img_1.png](./project-imgs/img_1.png)
3. 找到 getStyleLoaders 方法,添加以下代码

![img_2.png](./project-imgs/img_2.png)

4. 最后找到如下代码处,添加less支持

![img_3.png](./project-imgs/img_3.png)

5. ###`yarn start` 重启项目