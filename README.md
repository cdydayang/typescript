# typescript

## ts是js的超集，是一个可选的，静态的类型系统（对代码中的所有标识符进行类型检查）

## 如何在node环境中搭建ts环境?

- 默认情况下，ts会做出下面几种假设：
  - 1、当前代码的执行环境是dom浏览器环境；
  - 2、如果代码中没有使用模块化语句（import、export），便会认为代码是全局执行；
  - 3、默认的编译目标代码是ES3（最大可能的兼容各个js版本）;
  ----
- 上述的假设会对我们的开造成困扰，有两种的方式更改以上假设：
  - 1、使用`tsc`命令的时候，添加选项参数
  - 2、使用ts的配置文件，更改编译选项
    - 自己手动添加配置文件，`tsconfig.json`文件
    - 使用`tsc --init`命令生成`tsconfig.json`文件
    
  -----

- 使用配置文件
    - 基本配置文件如下（后续会视情况自行添加）：
    ![](https://lark-assets-prod-aliyun.oss-cn-hangzhou.aliyuncs.com/yuque/0/2021/png/2558822/1610344646340-resources/10907269/png/8365ce14-02a4-435b-870b-c4b2de059e91.png?OSSAccessKeyId=LTAI4GGhPJmQ4HWCmhDAn4F5&Expires=1610346466&Signature=1l3u3OPPhVa%2FUWQ8euCOJIkiWm0%3D)
    - *注意：使用了配置文件后，使用`tsc`命令就不可以跟上文件名了，如果跟上文件名的话，就会忽略配置文件。*
    - 配置上`"lib": ["ES2016"]`这个配置，会发现在ts文件中，连`console.log`已经不能使用了，解决办法就是安装`@types/node`库（ts的一个官方的库，其中包含了许多对js代码的类型描述），就可解决
    `npm i -D @types/node`

  ---

- 配置项目目录结构
  - 添加`src`专门存放ts文件，配置是`include`
  - 添加`dist`专门存放编译结果文件，配置是`outDir`

  ---
- 第三方库简化编译流程
  - ts-node 将ts代码在内存中完成编译，并进行运行
    `ts-node ./src/index.ts`
  - nodemon 用于监测文件变化 `nodemon --exec ts-node ./src/index.ts`
