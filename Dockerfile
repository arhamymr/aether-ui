# Stage 1: Builder - Build Angular demo app
FROM node:20-alpine AS builder

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm exec ng build demo --configuration=production

# Stage 2: Production - Serve static files with http-server
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/dist/apps/demo/browser /app

RUN npm install -g http-server

EXPOSE 4200

CMD ["http-server", "/app", "-p", "4200", "-c-1"]
