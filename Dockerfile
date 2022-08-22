FROM node:18-slim

RUN apt update && apt install -y chromium && apt clean

RUN mkdir -p /home/test

COPY package.json /home/test/

WORKDIR /home/test

RUN npm i

COPY src /home/test/src/

CMD ["npm", "run", "reboot"]

