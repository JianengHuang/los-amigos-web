FROM node:18-alpine AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY . /app
WORKDIR /app

RUN ln .env ./apps/client/.env

RUN pnpm i
RUN pnpm lint

ARG CLIENT_PORT
ARG API_PORT
EXPOSE ${CLIENT_PORT} ${API_PORT}
CMD [ "pnpm", "start" ]