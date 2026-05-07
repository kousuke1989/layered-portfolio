"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import Image from "next/image"; // 画像表示用

export default function EtherLP() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#e0f2f1", "#b2dfdb", "#e0f2f1"],
  );

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const productData = [
    { name: "MIST", desc: "Gentle Aura", img: "/mist.jpg" }, // 実際の画像パスへ
    { name: "DEW", desc: "Luminous Purity", img: "/dew.jpg" },
    { name: "LEAF", desc: "Botanical Breath", img: "/leaf.jpg" },
  ];

  return (
    <motion.div
      ref={containerRef}
      style={{
        backgroundColor: bgColor,
        color: "#2d4a47",
        minHeight: "auto",
        fontFamily: "'Public Sans', sans-serif",
        fontWeight: 200,
        overflowX: "hidden",
        position: "relative",
      }}
    >
      {/* 1. 背景アニメーション */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 10, 0],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "fixed",
          top: "10%",
          right: "-10%",
          width: "80vw",
          height: "80vw",
          background:
            "radial-gradient(circle, rgba(160, 200, 190, 0.6) 0%, transparent 70%)",
          filter: "blur(80px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* 2. ヒーローセクション */}
      <section
        style={{
          height: "100dvh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          style={{ textAlign: "center" }}
        >
          <span
            style={{
              letterSpacing: "1.2em",
              fontSize: "12px",
              opacity: 0.6,
              display: "block",
              marginBottom: "30px",
              marginLeft: "1.2em",
            }}
          >
            THE SCENT OF AIR
          </span>
          <h1
            style={{
              fontSize: "clamp(3rem, 15vw, 10rem)",
              letterSpacing: "0.6em",
              fontWeight: 100,
              lineHeight: 1,
              marginLeft: "0.6em",
            }}
          >
            AETHER
          </h1>
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            position: "absolute",
            bottom: "8vh",
            fontSize: "10px",
            letterSpacing: "0.4em",
            opacity: 0.4,
          }}
        >
          SCROLL
        </motion.div>
      </section>

      {/* 3. コンセプトセクション */}
      <section
        style={{
          padding: "20vh 10vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
          position: "relative",
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          style={{ maxWidth: "700px", textAlign: "center" }}
        >
          <h2
            style={{
              fontSize: "20px",
              letterSpacing: "0.5em",
              marginBottom: "60px",
              fontWeight: 300,
            }}
          >
            植物の生命を、一滴の透明に。
          </h2>
          <p
            style={{
              lineHeight: "3",
              fontSize: "15px",
              letterSpacing: "0.15em",
              color: "rgba(45, 74, 71, 0.8)",
            }}
          >
            私たちは、循環する自然から生まれた
            <br />
            サステナブル・フレグランスを提案します。
            <br />
            100%天然香料、ヴィーガン処方、再生ガラス。
            <br />
            まとうのは、香りではなく、澄み切った大気そのもの。
          </p>
        </motion.div>
      </section>

      {/* 4. コレクションセクション (画像挿入) */}
      <section
        style={{
          padding: "100px 10vw",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "40px",
          zIndex: 1,
          position: "relative",
        }}
      >
        {productData.map((scent, i) => (
          <motion.div
            key={scent.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 1 }}
            style={{
              backgroundColor: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(15px)",
              border: "1px solid rgba(255,255,255,0.2)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            {/* 画像エリア */}
            <div
              style={{
                width: "100%",
                height: "400px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* プレースホルダーの背景色。画像がある場合はImageタグを使用 */}
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(255,255,255,0.1)",
                }}
              />
              <Image
                src={scent.img}
                alt={scent.name}
                fill
                style={{ objectFit: "cover", opacity: 0.9 }}
              />
            </div>
            {/* テキストエリア */}
            <div style={{ padding: "40px", textAlign: "center" }}>
              <span
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.5em",
                  opacity: 0.4,
                  display: "block",
                  marginBottom: "15px",
                }}
              >
                COLLECTION 0{i + 1}
              </span>
              <h3
                style={{
                  fontSize: "22px",
                  letterSpacing: "0.8em",
                  marginLeft: "0.8em",
                  marginBottom: "10px",
                }}
              >
                {scent.name}
              </h3>
              <p
                style={{
                  fontSize: "12px",
                  opacity: 0.6,
                  letterSpacing: "0.2em",
                }}
              >
                {scent.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* 5. アクセスセクション (架空の代官山住所) */}
      <section
        style={{ padding: "150px 10vw", zIndex: 1, position: "relative" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "80px",
            alignItems: "center",
          }}
        >
          {/* 左側：実際のGoogleマップ (代官山周辺) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            style={{
              height: "400px",
              width: "100%",
              backgroundColor: "rgba(45, 74, 71, 0.05)",
              border: "1px solid rgba(45, 74, 71, 0.1)",
              overflow: "hidden", // 地図を枠内に収める
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.747975468374!2d139.700877!3d35.648833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b4490f23021%3A0x6a0f128e64024354!2z5Luj5a6Y5bGx6aeF!5e0!3m2!1sja!2sjp!4v1713000000000!5m2!1sja!2sjp"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "grayscale(0.6) opacity(0.8) contrast(1.1)", // サイトに合わせて彩度を落とす
              }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

          {/* 右側：住所情報 (変更なし) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            style={{ textAlign: "left" }}
          >
            <h2
              style={{
                fontSize: "18px",
                letterSpacing: "0.4em",
                marginBottom: "40px",
              }}
            >
              ATELIER
            </h2>
            <div
              style={{
                fontSize: "14px",
                lineHeight: "2.5",
                letterSpacing: "0.1em",
                opacity: 0.8,
              }}
            >
              <p>AETHER Atelier Daikanyama</p>
              <p style={{ marginBottom: "20px" }}>
                150-0034 東京都渋谷区代官山1-15-8
                <br />
                1-15-8 Daikanyama, Shibuya-ku, Tokyo
              </p>
              <p>
                Open: 11:00 — 19:00
                <br />
                Closed: Monday, Tuesday
              </p>
            </div>
            <Link
              href="https://maps.google.com/?q=代官山駅"
              target="_blank"
              style={{
                display: "inline-block",
                marginTop: "40px",
                fontSize: "12px",
                letterSpacing: "0.2em",
                borderBottom: "1px solid #2d4a47",
                paddingBottom: "5px",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              VIEW ON GOOGLE MAPS
            </Link>
          </motion.div>
        </div>
      </section>
      {/* 6. フッター */}
      <footer
        style={{
          padding: "100px 10vw 40px",
          textAlign: "center",
          opacity: 0.4,
          fontSize: "10px",
          letterSpacing: "0.3em",
          zIndex: 1,
          position: "relative",
        }}
      >
        © 2026 AETHER. Curated by Kousuke Shimamoto.
      </footer>

      {/* ナビゲーション（固定） */}
      <Link
        href="/"
        style={{
          position: "fixed",
          top: "40px",
          left: "40px",
          fontSize: "10px",
          color: "#2d4a47",
          textDecoration: "none",
          letterSpacing: "0.2em",
          zIndex: 100,
        }}
      >
        ← LAYERED
      </Link>
    </motion.div>
  );
}
