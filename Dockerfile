FROM ubuntu:latest
LABEL authors="virus"

WORKDIR /home/ubuntu

RUN apt-get update && apt-get install -y \
    git

RUN git clone -b feature https://github.com/VirusAngelic/fokin-app-back.git

EXPOSE 4000 3000

RUN cd fokin-app-back && \
    apt-get install -y \
    npm && \
    npm install && \
    npm start

