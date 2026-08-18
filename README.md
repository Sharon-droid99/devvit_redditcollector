# Reddit Collector

## Overview

This collector connects to Reddit, retrieves live posts and comments from football-related subreddits, and serves as the Reddit data acquisition component for the larger analytics system.

---

## Features

* Live Reddit integration using Devvit
* Fetch subreddit posts
* Fetch post comments
* Collect multiple comments from live discussions
* Foundation for sentiment analysis pipelines
* Can be integrated with n8n automation workflows

---

## Current Status

Verified:

* Reddit authentication through Devvit
* Live subreddit access
* Live post retrieval
* Live comment retrieval
* Collection of multiple comments from a post

Example workflow:

Reddit
↓
Subreddit
↓
Post
↓
Comments
↓
Sentiment Analysis Pipeline

---

## Installation

### Prerequisites

* Node.js
* npm
* Reddit account
* Devvit CLI

### Install Devvit CLI

```bash
npm install -g @devvit/cli
```

### Login

```bash
npx devvit login
```

### Verify Login

```bash
npx devvit whoami
```

---

## Running the Project

Install dependencies:

```bash
npm install
```

Start playtest mode:

```bash
npm run dev
```

After deployment, Devvit will provide a playtest URL.

Open the URL and refresh the page.

---

## Testing Comment Collection

1. Open the generated playtest subreddit.
2. Click:

```
...
Create a new post
```

3. The application will:

   * Fetch a live football-related Reddit post
   * Fetch comments
   * Print comments to the terminal

---

## Project Structure

```text
src/
├── client/
├── server/
│   ├── core/
│   │   └── post.ts
│   └── routes/
└── shared/
```

---

## Team Integration

This repository is intended to serve as the Reddit collection module for the larger World Cup Intelligence platform.

Planned integration:

Reddit Collector
↓
n8n Automation
↓
Sentiment Analysis API
↓
Database
↓
Dashboard

---

