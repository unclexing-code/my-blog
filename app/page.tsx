'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    fetch('/api/hello')
      .then(response => response.json())
      .then(data => setApiData(data))
      .catch(error => console.error('Error fetching API:', error));
  }, []);

  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "40px 20px" }}>
      <h1 style={{ fontSize: "2.5rem" }}>我的个人博客</h1>
      <hr style={{ margin: "20px 0" }} />
      <div>
        <h2>简介（已完成https配置）</h2>
        <h2>Leon Zhou</h2>
        <h3>文章列表</h3>
        <p>1. Next.js 全栈博客最简部署</p>
        <p>2. Docker + Nginx 搭建个人站点</p>
        <p>3. GitHub Actions 自动CI/CD</p>
      </div>
      <hr style={{ margin: "20px 0" }} />
      <div>
        <h3>API 测试</h3>
        {apiData ? (
          <p>API 响应: {JSON.stringify(apiData)}</p>
        ) : (
          <p>正在加载 API 数据...</p>
        )}
      </div>

      {/* ICP Filing Number */}
      <footer style={{ marginTop: "60px", paddingTop: "20px", borderTop: "1px solid #eaeaea", textAlign: "center", color: "#666", fontSize: "14px" }}>
        <p>
          <a 
            href="https://beian.miit.gov.cn/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: "#666", textDecoration: "none" }}
          >
            京ICP备2026026571号
          </a>
        </p>
      </footer>
    </main>
  );
}