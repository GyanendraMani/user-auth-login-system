# 🧱 Project Architecture & Codebase Overview

Welcome to the backend service documentation for our Node.js application. This document serves as a foundational guide to help new developers, contributors, and reviewers understand the overall code architecture, folder responsibilities, and best practices we follow.

---

## 📂 Folder Structure Overview

Our backend is structured around a clean, modular, and layered architecture, focused on separation of concerns and scalability.

---

## 🧩 Folder Responsibilities Explained

| Folder          | Responsibility                                                                 |
|------------------|---------------------------------------------------------------------------------|
| **route/**       | Defines HTTP routes and maps them to corresponding controller methods.          |
| **controller/**  | Acts as the entry point for requests: handles validation, responses, and calls to the biz layer. |
| **biz/**         | Contains the core business logic and flow orchestration for each feature.       |
| **repository/**  | Handles all direct interactions with the database (read/write operations).       |
| **helper/**      | Holds domain-specific helpers like token generation, email utils, etc.          |
| **utils/**       | Houses global utilities such as loggers, response formatters, custom errors, etc. |

Each folder plays a critical role in maintaining code readability, reusability, and testability.

---

## 🚦 Request Lifecycle Example

To help you understand how a feature flows through this architecture, here’s a high-level overview:

1. **Route Layer**
   - Defines endpoint: `POST /api/auth/login`
   - Routes request to `auth.controller.login()`

2. **Controller Layer**
   - Extracts credentials from the request body
   - Calls `auth.biz.loginUser(credentials)`

3. **Business Logic Layer (Biz)**
   - Validates the user data
   - Calls `user.repository.findByEmail()`
   - Verifies password using `helper/token.helper.ts`
   - Generates JWT token

4. **Repository Layer**
   - Executes DB query to fetch user by email
   - Returns user object or null

5. **Helper / Utils Layer**
   - Handles password verification, token creation
   - Logs actions, formats standardized response

---

## 🧠 Feature LLD Documentation Flow

Each feature (e.g., **Authentication**, **User Management**, **Password Reset**) will have its own dedicated Low-Level Design (LLD) file following this standard.

LLD files should contain:
- Feature Overview
- API List with Details
- Component Interactions (Controller → Biz → Repo)
- DB Models (if any)
- Helper/Utility Functions Used
- Sequence Flow Diagrams *(optional)*

📄 Example file: `docs/auth-feature-lld.md`

---

## ✍️ Contribution Notes

- Follow modular separation: keep logic isolated by responsibility.
- Avoid business logic in controllers or route files.
- Use helpers for repeated logic, and keep `utils/` as generic as possible.

---

## 🏁 Summary

This architecture lays a solid foundation for building scalable, testable, and maintainable applications. Whether you're debugging, adding features, or documenting the system — this structure ensures that everything has its place.

> "Simplicity is the soul of efficiency." – Austin Freeman

---

For any questions or onboarding help, feel free to reach out to the lead developers or refer to specific LLD documents in the `docs/` folder.