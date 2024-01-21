FROM node:18.18.0 AS base

WORKDIR /app

COPY ["package.json", "package-lock*", "./"]

FROM base AS dev
RUN npm install --frozen-lockfile
COPY . .
CMD ["npm", "run", "start:dev"]

FROM base AS prod
RUN npm install --frozen-lockfile --production
COPY . .
RUN npm install -g @nestjs/cli
RUN npm run build
CMD ["npm", "run", "start:prod"]