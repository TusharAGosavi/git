#!/bin/bash
cd /home/ec2-user/your-repo
git pull origin main
npm install
npm run build
sudo rm -rf /usr/share/nginx/html/*
sudo cp -r build/* /usr/share/nginx/html/
sudo systemctl restart nginx
