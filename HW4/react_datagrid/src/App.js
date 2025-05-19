// src/App.js
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Container, TextField, Typography, Box } from "@mui/material";

const API_URL =
  "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6";

function App() {
  const [dataset, setDataset] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // 取得 API 資料
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setDataset(data);
        setFilteredData(data);
      });
  }, []);

  // 搜尋功能
  useEffect(() => {
    const matched = dataset.filter((item) =>
      item.title.includes(searchKeyword)
    );
    setFilteredData(
      searchKeyword === "" || matched.length === 0 ? dataset : matched
    );
    setCurrentPage(1); // 每次搜尋重設頁數
  }, [searchKeyword, dataset]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const pageRows = filteredData
    .slice(start, start + itemsPerPage)
    .map((item, index) => ({
      id: start + index,
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
        label="請輸入名稱關鍵字搜尋"
        fullWidth
        margin="normal"
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
      />

      <div style={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={pageRows}
          columns={columns}
          disableColumnFilter
          disableColumnMenu
          hideFooterPagination
          hideFooter
          pageSizeOptions={[]}
        />
      </div>

      <Box
        className="d-flex"
        mt={2}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          上一頁
        </Button>
        <Typography>{`第 ${currentPage} 頁 / 共 ${totalPages} 頁`}</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          下一頁
        </Button>
      </Box>
    </Container>
  );
}

export default App;
