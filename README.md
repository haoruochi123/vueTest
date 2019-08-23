vue + ant-design 可重用前端快速搭建项目 yarn install  ， yarn run serve


vscode调试配置
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "chrome",
            "request": "launch",
            "name": "vuejs: chrome",
            "url": "http://localhost:8080",
            "webRoot": "${workspaceFolder}/src",
            "breakOnLoad": true,
            "sourceMapPathOverrides": {
                "webpack:///src/*": "${webRoot}/*",
                "webpack:///./src/*": "${webRoot}/*"
            }
        },
    ]
}
