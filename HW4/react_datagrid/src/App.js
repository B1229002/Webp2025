// src/App.js
import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { TextField, Container, Typography } from "@mui/material";

const API_URL =
  "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6";

function App() {
  const [data, setData] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  const filtered = data.filter((item) =>
    item.title.includes(searchKeyword)
  );

  const rows = filtered.map((item, index) => ({
    id: index,
    title: item.title,
    location: item.showInfo[0]?.location || "無資料",
    price: item.showInfo[0]?.price || "免費",
  }));

  const columns = [
    { field: "title", headerName: "名稱", width: 300 },
    { field: "location", headerName: "地點", width: 300 },
    { field: "price", headerName: "票價", width: 150 },
  ];

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        景點觀光展覽資訊
      </Typography>
      <TextField
        fullWidth
        margin="normal"
        label="請輸入名稱關鍵字搜尋"
        variant="outlined"
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
      <div style={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
        />
      </div>
    </Container>
  );
}

export default App;
