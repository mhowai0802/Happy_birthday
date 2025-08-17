#!/bin/bash

# 🚀 Durian and Carol Project Deployment Script
# This script helps you deploy your project to GitHub Pages

echo "🥭 Durian and Carol Project Deployment"
echo "======================================"

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "📁 Initializing Git repository..."
    git init
fi

# Add all files
echo "📝 Adding files to Git..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Update: Durian and Carol project"

# Check if remote origin exists
if ! git remote get-url origin &> /dev/null; then
    echo "🌐 No remote origin found."
    echo "Please add your GitHub repository as remote origin:"
    echo "git remote add origin https://github.com/mhowai0802/Happy_birthday.git"
    echo ""
    echo "Then run this script again."
    exit 1
fi

# Push to GitHub
echo "🚀 Pushing to GitHub..."
git push origin main

echo ""
echo "✅ Deployment complete!"
echo ""
echo "📋 Next steps:"
echo "1. Go to your GitHub repository"
echo "2. Click 'Settings'"
echo "3. Scroll down to 'Pages' section"
echo "4. Select 'Deploy from a branch'"
echo "5. Choose 'main' branch"
echo "6. Click 'Save'"
echo ""
echo "🌐 Your site will be available at:"
echo "git remote add origin https://github.com/mhowai0802/Happy_birthday.git"
echo ""
echo "⏱️  It may take a few minutes for changes to appear."
