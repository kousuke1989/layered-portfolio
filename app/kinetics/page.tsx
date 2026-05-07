"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const theme = {
  black: "#000000",
  electricBlue: "#0055FF",
  glowBlue: "rgba(0, 85, 255, 0.6)",
  gridLine: "rgba(0, 85, 255, 0.15)",
  textMain: "#FFFFFF",
  textDim: "rgba(255, 255, 255, 0.4)",
};

export default function KineticsFinalProduction() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      style={{
        backgroundColor: theme.black,
        color: theme.textMain,
        minHeight: "100vh",
        fontFamily: "'JetBrains Mono', monospace",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      {/* 1. 背景マウスグロウ */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `radial-gradient(${theme.gridLine} 1.5px, transparent 1.5px)`,
            backgroundSize: "35px 35px",
          }}
        />
        <motion.div
          animate={{ x: mousePos.x - 300, y: mousePos.y - 300 }}
          transition={{
            type: "spring",
            damping: 25,
            stiffness: 120,
            mass: 0.5,
          }}
          style={{
            position: "absolute",
            width: "600px",
            height: "600px",
            background: `radial-gradient(circle, ${theme.glowBlue} 0%, transparent 70%)`,
            filter: "blur(60px)",
            mixBlendMode: "screen",
          }}
        />
      </div>

      {/* 2. 固定ヘッダー & ハンバーガーボタン (ここを強化) */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 9999,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            padding: "40px 50px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontWeight: 900,
              fontSize: "24px",
              color: theme.electricBlue,
              pointerEvents: "auto",
            }}
          >
            KINETICS_
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              width: "60px",
              height: "60px",
              backgroundColor: theme.black, // 背景を黒で塗りつぶす
              border: `2px solid ${theme.electricBlue}`,
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              pointerEvents: "auto", // ボタン自体のクリックを有効に
              boxShadow: `0 0 20px ${theme.electricBlue}44`,
              transition: "0.3s",
            }}
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 8 : 0 }}
              style={{ width: "30px", height: "2px", backgroundColor: "white" }}
            />
            <motion.div
              animate={{ opacity: isMenuOpen ? 0 : 1 }}
              style={{ width: "30px", height: "2px", backgroundColor: "white" }}
            />
            <motion.div
              animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -8 : 0 }}
              style={{ width: "30px", height: "2px", backgroundColor: "white" }}
            />
          </button>
        </div>
      </header>

      {/* 3. フルスクリーンメニュー */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.98)",
              zIndex: 9000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: "blur(20px)",
            }}
          >
            <nav
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                gap: "30px",
              }}
            >
              {["WORKS", "CAPABILITIES", "STUDIO", "CONTACT"].map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  onClick={() => setIsMenuOpen(false)}
                  whileHover={{ color: theme.electricBlue, scale: 1.1, x: 10 }}
                  style={{
                    fontSize: "6vw",
                    fontWeight: 900,
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  {item}_
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main style={{ position: "relative", zIndex: 10 }}>
        {/* 4. HERO SECTION */}
        <section
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            padding: "0 10vw",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1
              style={{
                fontSize: "clamp(3.5rem, 12vw, 10rem)",
                fontWeight: 900,
                lineHeight: 0.8,
                letterSpacing: "-0.08em",
                margin: 0,
              }}
            >
              <span style={{ display: "block", color: "white" }}>IDEAS</span>
              <span
                style={{
                  display: "block",
                  color: "transparent",
                  WebkitTextStroke: `2px ${theme.electricBlue}`,
                  textShadow: `0 0 30px ${theme.electricBlue}`,
                  paddingLeft: "10px",
                }}
              >
                ENGINEERED
              </span>
            </h1>
          </motion.div>
        </section>

        {/* 5. PHOTO ARCHIVE */}
        <section style={{ padding: "0 5vw 150px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              gap: "20px",
            }}
          >
            <div
              style={{
                gridColumn: "span 8",
                height: "600px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "grayscale(1) contrast(1.1)",
                }}
              />
              <div
                style={{ position: "absolute", bottom: "40px", left: "40px" }}
              >
                <h3 style={{ fontSize: "32px", fontWeight: 900 }}>
                  TEAM_DYNAMIC
                </h3>
              </div>
            </div>
            <div
              style={{
                gridColumn: "span 4",
                height: "600px",
                border: `1px solid ${theme.electricBlue}`,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000')",
                  backgroundSize: "cover",
                  opacity: 0.4,
                }}
              />
            </div>
          </div>
        </section>

        {/* 6. SERVICE LIST */}
        <section style={{ padding: "100px 10vw" }}>
          <h2
            style={{
              fontSize: "14px",
              fontWeight: 900,
              color: theme.electricBlue,
              letterSpacing: "0.5em",
              marginBottom: "60px",
            }}
          >
            SERVICE_CAPABILITIES
          </h2>
          <div style={{ borderTop: `1px solid ${theme.gridLine}` }}>
            {["WEB APP ARCHITECTURE", "AI WORKFLOWS", "INTERFACE STRATEGY"].map(
              (title, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 20 }}
                  style={{
                    padding: "50px 0",
                    borderBottom: `1px solid ${theme.gridLine}`,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <h4 style={{ fontSize: "2.5vw", fontWeight: 900 }}>
                    {title}
                  </h4>
                  <div style={{ color: theme.electricBlue, fontSize: "24px" }}>
                    ↗
                  </div>
                </motion.div>
              ),
            )}
          </div>
        </section>

        {/* 7. FOOTER */}
        <footer
          style={{
            padding: "100px 10vw 50px",
            borderTop: `1px solid ${theme.gridLine}`,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div>
            <div
              style={{
                fontWeight: 900,
                fontSize: "24px",
                color: theme.electricBlue,
              }}
            >
              KNTCS_
            </div>
            <p style={{ fontSize: "12px", opacity: 0.4, marginTop: "10px" }}>
              ENGINEERING CREATIVE MOMENTUM
            </p>
          </div>
          <p style={{ fontSize: "10px", opacity: 0.2 }}>
            © 2026 KINETICS. ALL RIGHTS RESERVED.
          </p>
        </footer>
      </main>
    </div>
  );
}
