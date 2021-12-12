FROM node:14
WORKDIR /home/node/app
COPY *.json yarn.lock ./
COPY ./ /home/node/app/
RUN yarn
RUN npx prisma generate
CMD yarn start
EXPOSE 5000

