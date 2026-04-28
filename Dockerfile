# Use official Playwright image with browsers preinstalled
# FROM mcr.microsoft.com/playwright:v1.45.0-jammy    //its heavy image than focal
FROM mcr.microsoft.com/playwright:v1.59.1-focal
# Set working directory inside container
WORKDIR /app

# Copy dependency files first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of your project
COPY . .
#RUN npx playwright install --with-deps
# Default command (can be overridden in Jenkins pipeline)
CMD ["npx", "playwright", "test"]
