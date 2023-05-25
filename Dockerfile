# Base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# # Install project dependencies
RUN yarn

# Copy the rest of the project files to the container
COPY . .

# Build the Next.js application
RUN yarn build

# Expose the desired port (e.g., 3000) for the Next.js application
EXPOSE 3000

# Start the Next.js application
CMD ["yarn", "start"]