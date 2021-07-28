/*
 * @Author: sunfangyuan
 * @Date: 2021-07-16 16:45:31
 * @LastEditors: sunfangyuan
 * @LastEditTime: 2021-07-28 14:06:38
 * @Description: 暂无描述
 */
import { defineConfig } from 'umi';
const { ModuleFederationPlugin } = require("webpack").container;

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
  webpack5:{},
  dynamicImport:{},
  runtimePublicPath: true,
  devServer:{
    port: 8001
  },
  chainWebpack(memo){
    memo.output.publicPath('auto');
    memo.plugin('ModuleFederationPlugin').use(ModuleFederationPlugin,[{
        name: "remote",
        filename: 'remoteEntry.js',
        exposes:{
          './Button': './src/components/Button'
        },
        remotes: {
          'host': 'host@//localhost:8002/remoteEntry.js'
        },
        shared: ['react']
    }])
  }
});
