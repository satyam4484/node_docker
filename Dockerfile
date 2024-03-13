FROM node:slim
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 3000
CMD node index.js

# docker build -t satyam4484/basic_node:0.0.2.RELEASE .
# docker run -d -p 8000:3000 <image_name>