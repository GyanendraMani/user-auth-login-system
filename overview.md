# 🧱 Project Architecture & Codebase Overview

Welcome to the backend service documentation for our Node.js application. This document provides a complete overview of our folder structure, architecture decisions, and code layering principles. It's intended for onboarding new team members, supporting contributors, and maintaining architectural consistency across features.

---

## 📂 Folder Structure

Our backend project follows a modular, layered architecture for better separation of concerns, testability, and maintainability.

---

## 🧩 Responsibilities of Each Layer

| Layer/Folder      | Purpose |
|-------------------|---------|
| `route/`          | Declares API routes and maps them to controller methods. Each route corresponds to a REST endpoint. |
| `controller/`     | Handles incoming HTTP requests, validates input, and delegates business logic to the `biz` layer. Also formats the final response. |
| `biz/`            | Contains the core business logic for each feature (e.g., login, registration). This layer is responsible for coordinating data flow between controller, repository, and helper layers. |
| `repository/`     | Interacts directly with the database. Contains all DB queries, inserts, updates, and deletes. |
| `helper/`         | Holds reusable, feature-specific logic like JWT generation, password hashing, OTP helpers, etc. |
| `utils/`          | Stores generic, non-feature-specific utilities like loggers, date formatters, error handlers, and constants. |

---

## 🔁 Typical Request Flow

To understand how these layers interact, here's an example of a complete request-response cycle (e.g., **Login API**):

1. **Client Request** → `POST /api/auth/login`
2. **Route** maps the endpoint to `auth.controller.login()`
3. **Controller** extracts request data and calls `auth.biz.loginUser()`
4. **Biz** verifies input, calls `user.repository.findByEmail()`, then verifies password and generates token
5. **Helper** handles password comparison and token creation
6. **Controller** returns response with token to client

Each layer plays a specific role and never crosses boundaries to maintain clean, testable code.

---

## 📘 Feature Documentation Guidelines

Each feature (e.g., `auth`, `user`, `dashboard`, etc.) should have its own **LLD (Low-Level Design)** file that includes:

- ✅ Feature Overview
- ✅ API Endpoints & Request/Response
- ✅ File Flow (route → controller → biz → repository)
- ✅ DB Models / Tables Used
- ✅ Helpers/Utilities Involved
- ✅ Edge Cases / Error Handling
- ✅ Sequence Flow (if necessary)

📄 Sample file: `docs/auth-feature-lld.md`

> We recommend documenting one `.md` file per feature for simplicity and clarity.

---

## 🧠 Developer Tips

- Place all business logic in the `biz/` layer — not in controllers or routes.
- Keep controllers lean and focused only on input/output handling.
- Use helpers for reusable logic within a feature (e.g., OTP generator).
- Use `utils/` for shared logic across all modules (e.g., logging, constants).
- Reuse repository functions wherever possible to avoid duplicate queries.

---

## 🧪 Testing & Extensibility

This architecture is designed to:
- Make testing each layer independently easier.
- Support clean code principles (Separation of Concerns, DRY).
- Scale easily as new features are added.
- Enable junior developers to onboard quickly by following consistent structure.

---

## 📌 Summary

This architecture lays the foundation for a clean and scalable backend. All team members are expected to follow this structure when adding or modifying features.

> “Good architecture enables good teams to do great work.” — Unknown

For any questions or suggestions, please reach out to the team leads or refer to feature-specific LLDs in the `docs/` folder.