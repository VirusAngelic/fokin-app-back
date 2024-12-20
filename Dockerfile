FROM node:20.17.0 AS base
LABEL authors="virus"

#Stage 1: Install dependencies
FROM base AS deps
WORKDIR /home
COPY package.json yarn.lock ./
RUN corepack enable yarn && yarn install --frozen-lockfile

#Stage 2: Build the NestJs App
FROM base AS builder
WORKDIR /home
COPY --from=deps /home/node_modules ./node_modules
COPY . .
RUN corepack enable yarn && yarn run build

#Stage 3: Production image
FROM node:current-alpine AS prod
WORKDIR /app
COPY --from=builder /home/node_modules ./node_modules
COPY --from=builder /home/dist /app

EXPOSE 3000

CMD ["node", "main"]
