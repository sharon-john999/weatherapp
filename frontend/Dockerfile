# === Step 1: Build the app === 
FROM node:24-alpine AS builder
WORKDIR /app 
COPY package*.json  ./ 
 
RUN npm install 

RUN npm install -D esbuild@0.21.5

COPY . . 


RUN npm run build 

FROM nginx:alpine 
  # Copy build output from builder stage 
COPY --from=builder /app/dist /usr/share/nginx/html 
EXPOSE 80 
CMD ["nginx", "-g", "daemon off;"]
