#! /usr/bin/env node

const { program } = require('commander')

// 下载进程
// const ora = require('ora')
// 下载仓库代码
const download = require('download-git-repo')

// 设置版本号 可以使用 pageage.json .name -V获取
program.version('1.0.0')

// 必须以这种格式, 否则下载不了 会报 status: 128

const templates = {
  url: 'https://github.com/ZYSpro/init-template',
  downloadUrl: `https://github.com:ZYSpro/init-template#main`,
  description: 'vue init'
}

program
  .command('init <project>')
  .description('初始化项目模版')
  .action((templateName, projectName) => {
    // const spinner = ora('正在下载模版...').start()
    download(templates.downloadUrl, templateName, { clone: true }, (err) => {
      if(err) {
        // spinner.fail()
        console.log('下载失败', err)
      } else {
        // spinner.succeed()
        console.log('下载成功')
      }
    })
  })

// 解析命令 只能放在这个位置
program.parse(process.argv)
