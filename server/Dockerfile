FROM node:latest
RUN mkdir -p /crimehero
WORKDIR /crimehero/
COPY . /crimehero
RUN ln -sf /dev/stdout /crimehero/config-stdout.log
RUN ln -sf /dev/stderr /crimehero/config-stderr.log
RUN ["yarn", "global", "add", "pm2", "--prefix", "/usr/local"]
RUN yarn
EXPOSE 3005
CMD ["pm2-runtime", "ecosystem.config.js"]