/*
 * @Description:
 * @Author: xxqq
 * @Date: 2022-03-10 21:16:43
 * @LastEditTime: 2022-04-08 22:32:05
 * @LastEditors: xq
 */
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
//@ts-ignore
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
    base: './', //打包路径
    plugins: [
        vue(),
        Components({
            resolvers: [NaiveUiResolver()],
        }),
        // gzip压缩 生产环境生成 .gz 文件
        viteCompression({
            verbose: true,
            disable: false,
            threshold: 10240,
            algorithm: 'gzip',
            ext: '.gz',
        }),
    ],
    // 配置别名
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "@/assets/style/mian.scss";',
            },
        },
    },
    //启动服务配置
    server: {
        host: '0.0.0.0',
        port: 8000,
        open: true,
        https: false,
        proxy: {},
    },
    // 生产环境打包配置
    //去除 console debugger
    build: {
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
            },
        },
    },
})
