/*
 * @Author: sunfangyuan
 * @Date: 2021-07-16 16:45:31
 * @LastEditors: sunfangyuan
 * @LastEditTime: 2021-07-28 14:18:07
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
    port: 8002
  },
  chainWebpack(memo){
    memo.output.publicPath('auto');
    memo.plugin('ModuleFederationPlugin').use(ModuleFederationPlugin,[{
        name: "host",
        remotes: {
          'remote': 'remote@//localhost:8001/remoteEntry.js'
        },
        filename: 'remoteEntry.js',
        exposes:{
          './Input': './src/components/Input'
        },
        shared: ['react']
    }])
  }
});
