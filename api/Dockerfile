FROM node:14
WORKDIR /home/node/app
COPY *.json yarn.lock ./
COPY ./ /home/node/app/
RUN yarn
RUN npx prisma migrate dev --name init
RUN npx prisma generate
CMD yarn start
EXPOSE 5000

