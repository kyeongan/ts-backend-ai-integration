# 🍽️ TypeScript ESM Backend – ML Recommendation Service

A modern **Node.js + TypeScript (ESM)** backend that simulates AI-powered meal recommendations. This project demonstrates clean architecture, ES module support, and mock ML integration—perfect for portfolio or interview prep.

---

## 🚀 Features

- **TypeScript-first** backend
- **Express.js** REST API
- **ES module** support (`type: module`)
- Modular structure: `routes/`, `services/`, `types/`
- Mock ML/user services (easy to swap for real APIs)

---

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install & Run

```sh
npm install
npm run dev
```

Server starts at: [http://localhost:3000](http://localhost:3000)

---

## 📚 API Endpoints

### `GET /recommendations/:userId`

Get meal recommendations for a user.

**Example:**

```sh
curl http://localhost:3000/recommendations/1
```

**Sample Response:**

```json
{
  "userId": 1,
  "recommendations": [
    { "meal": "Quinoa Salad", "reason": "High protein and vegan-friendly" },
    { "meal": "Avocado Toast", "reason": "Rich in healthy fats" }
  ]
}
```

---

## 📁 Project Structure

```
src/
	index.ts                # Entry point
	routes/
		recommendations.ts    # API route
	services/
		userService.ts        # Mock user data
		mlService.ts          # Mock meal recommendation logic
	types/
		index.ts              # TypeScript types
```

---

## 📝 Notes

- Uses ES modules (`type: module` in package.json)
- All imports must use explicit `.js` extensions
- For production, consider compiling to JavaScript and running from `dist/`
