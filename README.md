# Blogfolio

joe.sputh.me

Blogfolio is my personal portfolio website that integrates a blog, an about page, and a contact form. It allows me to share my thoughts through blog posts, showcase their skills and experiences on the about page, and provide a convenient way for visitors to get in touch via the contact form. The backend is powered by FastAPI, ensuring a modern, efficient, and scalable API-driven architecture.

## Features

Blog Posts: Create, read, update, and delete blog posts to share your thoughts and updates.
About Page: Display personal information, skills, experiences, or project highlights.
Contact Form: Enable visitors to send messages directly from the website.
Backend API: Built with FastAPI for high-performance backend services.

## Tech Stack

Backend: FastAPI (Python)
Frontend: React+Vite
Database:JSON file hosted at a private VPS
Other Tools: sputh.me mail service API


to access the website : joe.sputh.me
api: api.joe.sputh.me

Setup Instruction (for development)

Backend Setup

Clone the repository:
git clone https://github.com/yourusername/blogfolio.git
cd blogfolio/backend


Create and activate a virtual environment:
python -m venv venv
source venv/bin/activate  # On Windows, use `venv\Scripts\activate`


Install dependencies:
pip install -r requirements.txt


Run the FastAPI server:
uvicorn main:app --reload



Frontend Setup
[If your project includes a separate frontend, provide the following steps. Otherwise, adjust accordingly.]

Navigate to the frontend directory:
cd ../frontend


Install dependencies:
npm install 


Run the development server:
npm run dev 


