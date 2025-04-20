from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from fastapi.middleware.trustedhost import TrustedHostMiddleware
import json
import os

app = FastAPI()

app.add_middleware(
    TrustedHostMiddleware, allowed_hosts=["api.joe.sputh.me"]
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://joe.sputh.me","https://www.joe.sputh.me"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class BlogPostCreate(BaseModel):
    title: str
    content: str

POSTS_FILE = os.path.dirname(__file__)+"/posts.json"

if not os.path.exists(POSTS_FILE):
    with open(POSTS_FILE, "w") as f:
        json.dump([], f)

def read_posts():
    with open(POSTS_FILE, "r") as f:
        return json.load(f)

def write_posts(posts):
    with open(POSTS_FILE, "w") as f:
        json.dump(posts, f, indent=2)

@app.post("/posts")
def create_post(post: BlogPostCreate):
    posts = read_posts()
    token = f"blog{len(posts) + 1}"
    
    new_post = {
        "token": token,
        "title": post.title,
        "content": post.content
    }
    posts.append(new_post)
    write_posts(posts)
    return new_post

@app.get("/posts")
def get_all_posts():
    return read_posts()

@app.get("/posts/{token}")
def get_post(token: str):
    posts = read_posts()
    for post in posts:
        if post["token"] == token:
            return post
    raise HTTPException(status_code=404, detail="Post not found")