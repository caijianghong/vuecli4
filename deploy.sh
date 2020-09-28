# deploy.sh
# 错误时停止
set -e
 
# 打包
npm run build
 
# 进入目标文件夹
cd dist
 
# 提交到本地仓库
 
git init
git add -A
git commit -m 'deploy'
 
# 提交到 https://github.com/caijianghong/vuecli4.git 项目的 gh-pages 分支
git push -f https://github.com/caijianghong/vuecli4.git master:gh-pages
 
cd -
