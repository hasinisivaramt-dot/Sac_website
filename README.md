# SAC Campus Websites

This project contains three independent campus websites, one shared admin panel, and one backend.

## Final structure

```text
SAC_Campus_Websites_Complete/
│
├── aziz-nagar/
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/       # direct .jsx files
│   │   │   ├── sections/     # direct .jsx files
│   │   │   └── common/       # direct .jsx files
│   │   ├── pages/             # direct page .jsx files
│   │   ├── campus/
│   │   │   └── data/          # campus data files
│   │   ├── config/
│   │   ├── context/
│   │   ├── hooks/
│   │   └── utils/
│   └── ...
│
├── bachupally/
│   └── same structure
│
├── gbs/
│   └── same structure
│
├── admin-panel/
│   ├── src/
│   │   ├── components/        # direct .jsx files
│   │   ├── pages/             # direct .jsx files
│   │   ├── context/
│   │   └── services/
│   └── ...
│
└── backend/
    ├── config/
    ├── controllers/            # direct .js files
    ├── middleware/             # direct .js files
    ├── models/                 # direct .js files
    ├── routes/                 # direct .js files
    └── server.js
```

No TypeScript files are used. The project uses JavaScript/JSX.

## Local campus ports

- Aziz Nagar: http://localhost:5173
- Bachupally: http://localhost:5174
- GBS: http://localhost:5175
- Admin Panel: http://localhost:5176
- Backend API: http://localhost:5000

Each campus has a fixed Vite port so startup order does not matter.

## Install

Run `npm install` separately inside each of the five applications:
`aziz-nagar`, `bachupally`, `gbs`, `admin-panel`, and `backend`.
