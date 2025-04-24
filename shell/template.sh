#!/usr/bin/env bash  
# 上面这一行意思是是使用/usr/bin/env bash 来执行这个脚本
# 如果你的脚本只使用了 POSIX 标准的 shell 特性，不依赖 bash 的扩展功能，那么可以使用 #!/bin/sh。这样的脚本具有更好的通用性
# 也就是 #!/bin/sh
set -o errexit  # 发生错误时停止脚本执行
set -o nounset  # 将未设置的变量视为错误
set -o pipefail # 管道中任何命令的失败都会导致整个管道失败

firstargument="${1:-somedefaultvalue}"  # 如果没有传入参数，则使用默认值 somedefaultvalue

echo "$firstargument"
