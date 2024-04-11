# Update system packages and install Node.js and npm
sudo apt update && sudo apt install nodejs npm

# Install pm2 globally
sudo npm install -g pm2

# Stop the pm2 process named "example_app"
pm2 stop example_app

# Navigate to the ExampleApplication directory
cd DevOpsProject/

# Install npm dependencies
npm install
echo $PRIVATE_KEY > privatekey.pem
echo $SERVER > server.crt

# Start the pm2 process for your application
pm2 start ./bin/www --name example_app