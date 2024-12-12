# Use the official Deno image as the base image
FROM denoland/deno:alpine-1.28.3

# Set the working directory
WORKDIR /app

# Copy dependency files
COPY deno.lock .
COPY deno.json .

# Copy the rest of the application code
COPY . .

# Copy the environment file
COPY .env .env

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["run", "--allow-net", "--allow-env", "app.ts"]
