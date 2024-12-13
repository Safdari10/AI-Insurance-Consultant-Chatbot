# Use the official Deno image as the base image
FROM denoland/deno:latest

# Set the working directory
WORKDIR /app

# Copy dependency files
COPY deno.json .
COPY deno.lock .

# Cache the dependencies using Deno cache with mount
RUN --mount=type=cache,target=/root/.deno/cache deno cache deno.json

# Copy the rest of the application code
COPY . .

# Copy the environment file
COPY .env .env

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["deno", "run", "--allow-net", "--allow-env", "--allow-read", "main.ts"]
