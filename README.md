# Skip Hire Selection Page

A sleek and responsive skip selection interface built with **React** and **Tailwind CSS**.

## 🚀 Features

- Display skip cards with size, price, and attributes
- Select a skip card with visual feedback
- Highlight selected card
- Responsive 4-column layout
- Single mention of the hire period to avoid redundancy
- Smooth card hover animations

## 📸 Preview

![Preview Screenshot](./assets/skip1.jpg)
![Preview Screenshot](./assets/skip2.jpg)

## 🧰 Tech Stack

- React
- Tailwind CSS
- CSS Transitions & Animations

## 📁 Folder Structure

/skippage
│
├── public/
│ └── assets/
│ └── skipimage.png
│
├── src/
│ ├── components/
│ │ └── SkipCard.js
│ ├── mockData/
│ │ └── skips.json
│ ├── App.js
│ └── index.js
│
├── tailwind.config.js
├── postcss.config.js
└── README.md

## 🧪 Local Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/antcreator/skippage.git
   cd skippage

🔧 Custom Styling Notes
Each card scales on hover (hover:scale-105) and includes a subtle shadow.

The cards animate with a fade-in-up effect when rendered.

Hire period info is displayed once above the card grid, not per card.

📦 Future Improvements
Add filter options for skip size or road permissions

Integrate backend API to fetch skip data

Add loading states and form submission

👨‍💻 Author
GitHub: @antcreator

📄 License
This project is licensed under the MIT License.