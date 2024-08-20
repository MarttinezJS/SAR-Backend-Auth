
FROM oven/bun:1.1.22-debian AS base
WORKDIR /usr/app

FROM base AS install
RUN mkdir -p /temp/prod
COPY package.json /temp/prod/
RUN cd /temp/prod && bun install --frozen-lockfile --production

FROM install AS prerelease
COPY . .

FROM base AS release
COPY --from=install /temp/prod/node_modules node_modules
COPY --from=prerelease /usr/app/ .
RUN bunx prisma generate
RUN chmod 777 node_modules

ENTRYPOINT [ "bun", "run", "src/index.ts" ]
