# 替换成node20
FROM node:20-alpine

WORKDIR /app

# 先复制依赖文件缓存层
COPY package*.json ./
RUN npm install --registry=https://registry.npmmirror.com

# 复制全部源码
COPY . .

# 现在Node20满足Next.js版本要求，构建不会报错
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]