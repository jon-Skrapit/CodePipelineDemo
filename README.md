# CodePipelineDemo
### note
在`code`最终部署的机器上安装`codedeploy-agent`可以在日志中看到部署过程的`info`、`error`

日志文件在 `/var/log/aws/codedeploy-agen/codedeploy-agent.log`

#### 如何安装`codedeploy-agent`

[安装或重新安装适用于 Ubuntu Server 的 AWS CodeDeploy 代理](https://docs.aws.amazon.com/zh_cn/codedeploy/latest/userguide/codedeploy-agent-operations-install-ubuntu.html)

`sudo service codedeploy-agent status`

`sudo service codedeploy-agent start`

#### 注意
