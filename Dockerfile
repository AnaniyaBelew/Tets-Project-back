# Use an official Node runtime as the base image
FROM node:16

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json into the directory
COPY package*.json ./

# Install the application dependencies inside the Docker image
RUN npm install

# Bundle the app source inside the Docker image
# (Make sure you have a .dockerignore file to avoid copying node_modules)
COPY . .

# Compile TypeScript to JavaScript
RUN npm run build

# Expose port 3000 for the app to be accessible
EXPOSE 2000

# Define the command to run the app
CMD [ "npm", "start" ]
