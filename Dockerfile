FROM node:24-bookworm-slim

WORKDIR /app/backend

COPY backend/package.json backend/package-lock.json ./
RUN npm ci --omit=dev

COPY backend/src ./src
COPY backend/migrations ./migrations
COPY frontend /app/frontend

CMD ["sh", "-c", "npm run migrate && npm run seed && exec npm start"]
