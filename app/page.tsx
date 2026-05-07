"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  // メニューアイテムの定義（KINETICSを含む全プロジェクト）
  const menuItems = [
    { label: "About", action: () => setShowAbout(true) },
    { label: "SILENCE (Salon)", path: "/salon" },
    { label: "AETHER (Perfume)", path: "/ether" },
    { label: "SPINS ◎ COFFEE (Cafe)", path: "/cafe" },
    { label: "KINETICS (Creative Tech Lab)", path: "/kinetics" },
    { label: "Contact", path: "#" },
  ];

  // 実績データ（カラー表示を想定した最新リスト）
  const screenshots = [
    {
      url: "/images/slide-salon.png",
      title: "SILENCE",
      category: "Hair Salon",
      path: "/salon",
    },
    {
      url: "/images/slide-perfume.png",
      title: "AETHER",
      category: "Perfume Brand",
      path: "/ether",
    },
    {
      url: "/images/slide-cafe.png",
      title: "SPINS COFFEE",
      category: "DJ & Coffee",
      path: "/cafe",
    },
    {
      url: "/images/slide-kinetics.png",
      title: "KINETICS",
      category: "Creative Tech Lab",
      path: "/kinetics",
    },
  ];

  const displayItems = [...screenshots, ...screenshots, ...screenshots];

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100dvh",
        backgroundColor: "white",
        color: "black",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* 1. ハンバーガーボタン（状態に応じて挙動を自動変化） */}
      <button
        onClick={() => {
          if (showAbout) setShowAbout(false);
          else setIsOpen(!isOpen);
        }}
        style={{
          position: "fixed",
          top: "40px",
          right: "40px",
          zIndex: 2000,
          width: "52px",
          height: "52px",
          backgroundColor: "#111",
          borderRadius: "50%",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // 念のためボタン全体が削れないよう overflow を設定
          overflow: "visible",
        }}
      >
        {/* コンテナの高さは偶数(16px)で維持 */}
        <div style={{ position: "relative", width: "20px", height: "16px" }}>
          <motion.span
            animate={{
              // 交差をきれいにするため y軸の移動量を 7 -> 7.25 等で微調整するか、
              // origin を指定して中心回転させます
              rotate: isOpen || showAbout ? 45 : 0,
              y: isOpen || showAbout ? 7.25 : 0,
            }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "2px", // 1.5pxから2pxに変更（削れ防止の最も確実な方法）
              backgroundColor: "white",
              transformOrigin: "center center", // 回転軸を中心に固定
            }}
          />
          <motion.span
            animate={{ opacity: isOpen || showAbout ? 0 : 1 }}
            style={{
              position: "absolute",
              top: "7px", // 中央配置
              left: 0,
              width: "100%",
              height: "2px", // 2pxに統一
              backgroundColor: "white",
            }}
          />
          <motion.span
            animate={{
              rotate: isOpen || showAbout ? -45 : 0,
              y: isOpen || showAbout ? -7.25 : 0,
            }}
            style={{
              position: "absolute",
              bottom: 0, // ここが削れる場合、bottom: "1px" などで浮かせるのも手です
              left: 0,
              width: "100%",
              height: "2px", // 2pxに統一
              backgroundColor: "white",
              transformOrigin: "center center", // 回転軸を中心に固定
            }}
          />
        </div>
      </button>
      {/* 2. メインロゴ */}
      <header
        style={{
          flex: "1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 50,
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{
            fontSize: "15vw",
            fontWeight: "900",
            textTransform: "uppercase",
            letterSpacing: "-0.06em",
            margin: 0,
            lineHeight: 0.8,
            textAlign: "center",
            fontFamily: "sans-serif",
          }}
        >
          LAYERED
        </motion.h1>
      </header>

      {/* 3. 無限スクロールコンテナ（カラー表示版） */}
      <div
        style={{
          width: "100%",
          height: "32vh",
          overflow: "hidden",
          position: "relative",
          marginBottom: "10vh",
          zIndex: 40,
        }}
      >
        <motion.div
          animate={{ x: ["0%", "-33.333%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
          style={{
            display: "flex",
            width: "max-content",
            gap: "50px",
            paddingLeft: "50px",
          }}
        >
          {displayItems.map((item, index) => (
            <Link
              href={item.path}
              key={index}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4 }}
                style={{ position: "relative", width: "450px" }}
              >
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "16/9",
                    backgroundColor: "#f8f8f8",
                    backgroundImage: `url(${item.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "none", // カラーで表示
                  }}
                />
                <div
                  style={{
                    marginTop: "15px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                  }}
                >
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                    }}
                  >
                    {item.title}
                  </span>
                  <span
                    style={{
                      fontSize: "8px",
                      letterSpacing: "0.2em",
                      opacity: 0.3,
                    }}
                  >
                    {item.category}
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>

      {/* 4. フッター */}
      <footer
        style={{
          position: "absolute",
          bottom: "40px",
          left: 0,
          width: "100%",
          padding: "0 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxSizing: "border-box",
          zIndex: 50,
        }}
      >
        <p style={{ fontSize: "9px", letterSpacing: "0.2em", color: "#ccc" }}>
          © 2026 LAYERED. CURATED BY K. SHIMAMOTO
        </p>
      </footer>

      {/* 5. メニューオーバーレイ（KINETICS リンク追加） */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "white",
              zIndex: 900,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <nav
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "30px",
                textAlign: "center",
              }}
            >
              {menuItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {item.path ? (
                    <Link
                      href={item.path}
                      style={{
                        fontSize: "clamp(2rem, 5vw, 3rem)",
                        fontWeight: "900",
                        textTransform: "uppercase",
                        letterSpacing: "0.15em",
                        color: "black",
                        textDecoration: "none",
                      }}
                      onClick={() => setIsOpen(false)}
                    >
                      <motion.span whileHover={{ x: 15, color: "#999" }}>
                        {item.label}
                      </motion.span>
                    </Link>
                  ) : (
                    <div
                      style={{
                        fontSize: "clamp(2rem, 5vw, 3rem)",
                        fontWeight: "900",
                        textTransform: "uppercase",
                        letterSpacing: "0.15em",
                        color: "black",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        item.action?.();
                        setIsOpen(false);
                      }}
                    >
                      <motion.span whileHover={{ x: 15, color: "#999" }}>
                        {item.label}
                      </motion.span>
                    </div>
                  )}
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 6. ABOUT プロフィール（ストーリー重視・フラットな技術解説） */}
      <AnimatePresence>
        {showAbout && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "white",
              zIndex: 1500,
              overflowY: "auto",
              padding: "160px 40px",
            }}
          >
            <div
              style={{
                maxWidth: "1000px",
                margin: "0 auto",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
                gap: "100px",
                alignItems: "start",
              }}
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "4/5",
                    backgroundColor: "#f0f0f0",
                    backgroundImage: "url('/images/profile.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "grayscale(1)",
                  }}
                />
                <div
                  style={{
                    marginTop: "20px",
                    fontSize: "10px",
                    letterSpacing: "0.3em",
                    color: "#ccc",
                  }}
                >
                  DIRECTOR / K. SHIMAMOTO
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <h3
                  style={{
                    fontSize: "9px",
                    letterSpacing: "0.8em",
                    color: "#999",
                    marginBottom: "40px",
                  }}
                >
                  THE LOGIC OF FLUIDITY
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "2.4",
                    color: "#333",
                    fontWeight: 300,
                    textAlign: "justify",
                    letterSpacing: "0.05em",
                  }}
                >
                  LAYEREDのプラットフォームは、React および Next.js
                  を基盤としたモダンな開発環境で構築されています。
                  <br />
                  <br />
                  TypeScript による堅牢な設計と、Framer Motion
                  によるアニメーション。これらを組み合わせることで、ヘアデザイン、香水、コーヒー、そしてクリエイティブスタジオといった異なるLPを、ストレスのないシームレスな体験として統合しました。
                  <br />
                  <br />
                </p>
                <div
                  style={{
                    marginTop: "80px",
                    borderTop: "1px solid #f0f0f0",
                    paddingTop: "30px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "11px",
                      letterSpacing: "0.1em",
                      color: "#666",
                    }}
                  >
                    嶋本 幸将 / Kousuke Shimamoto
                    <br />
                    <span style={{ fontSize: "9px", color: "#999" }}>
                      Director
                    </span>
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
