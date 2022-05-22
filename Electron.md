## 安装electron 失败，设置淘宝镜像
npm config set ELECTRON_MIRROR "https://cdn.npm.taobao.org/dist/electron/"

## 主要问题
因为没有设置时，项目安装的时候回显示如下url无法下载包
```
npm ERR! code 1
npm ERR! path D:\xxx\xxx\node_modules\electron
npm ERR! command failed
npm ERR! command C:\WINDOWS\system32\cmd.exe /d /s /c node install.js
npm ERR! HTTPError: Response code 404 (Not Found) for http://npm.taobao.org/mirrors/electronv18.1.0/electron-v18.1.0-win32-x64.zip
npm ERR!     at EventEmitter.<anonymous> 
npm ERR!     at EventEmitter.emit (node:events:526:28)
npm ERR!     at module.exports 
npm ERR!     at ClientRequest.handleResponse 
npm ERR!     at Object.onceWrapper (node:events:646:26)
npm ERR!     at ClientRequest.emit (node:events:538:35)
npm ERR!     at ClientRequest.origin.emit 
npm ERR!     at HTTPParser.parserOnIncomingClient [as onIncoming] (node:_http_client:618:27)
npm ERR!     at HTTPParser.parserOnHeadersComplete (node:_http_common:128:17)
npm ERR!     at TLSSocket.socketOnData (node:_http_client:482:22)

npm ERR! A complete log of this run can be found in:
npm ERR!
```

打开 http://npm.taobao.org/mirrors/electronv18.1.0/electron-v18.1.0-win32-x64.zip
没有显示包，并且自动跳转到了 https://cdn.npmmirror.com/binaries/electronv18.1.0/electron-v18.1.0-win32-x64.zip

但是正常url是 https://registry.npmmirror.com/binary.html?path=electron/v18.1.0/


### packge
https://www.jianshu.com/p/ced115ccab75
```
electron-packager . --overwrite --electron-zip-dir=./electron-zip
```