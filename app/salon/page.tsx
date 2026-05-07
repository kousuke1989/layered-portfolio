"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function SalonLP() {
  const sharpFadeIn = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div
      style={{
        backgroundColor: "#f7f3f0", // サンドベージュ
        color: "#111",
        minHeight: "100vh",
        fontFamily: "'Public Sans', sans-serif",
        fontWeight: 100,
        overflowX: "hidden",
        position: "relative",
      }}
    >
      {/* 背景の揺らめき：淡いグリーン */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [-20, 40, -20],
          y: [-20, 60, -20],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "fixed",
          top: "-10%",
          left: "-10%",
          width: "90vw",
          height: "90vw",
          background:
            "radial-gradient(circle, rgba(180, 210, 1 green, 0.7) 0%, rgba(247, 243, 240, 0) 70%)",
          filter: "blur(100px)",
          zIndex: -1,
          pointerEvents: "none",
        }}
      />

      {/* 1. ヒーローセクション */}
      <section
        style={{
          height: "100dvh",
          width: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#000",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/hair-hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center 20%",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(0,0,0,0.4), transparent)",
            zIndex: 1,
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 10,
            flex: 1,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            paddingRight: "10vw",
          }}
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={sharpFadeIn}
            style={{ textAlign: "right", color: "white" }}
          >
            <h2
              style={{
                fontSize: "clamp(4rem, 12vw, 10rem)",
                letterSpacing: "0.8em",
                textTransform: "uppercase",
                margin: 0,
                lineHeight: 0.9,
              }}
            >
              SILENCE
            </h2>
            <p
              style={{
                letterSpacing: "0.5em",
                fontSize: "11px",
                color: "#aaa",
                marginTop: "40px",
              }}
            >
              MINIMAL HAIR DESIGN STUDIO
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. ビジュアルセクション（ワーク画像） */}
      <section
        style={{
          padding: "200px 0 100px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "100px",
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sharpFadeIn}
          style={{
            width: "80%",
            maxWidth: "700px",
            aspectRatio: "3/2",
            backgroundImage: "url('/hair-work.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "grayscale(100%) contrast(1.1)",
            boxShadow: "0 30px 60px rgba(0,0,0,0.12)",
          }}
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={sharpFadeIn}
          style={{ maxWidth: "450px", textAlign: "center" }}
        >
          <p
            style={{
              lineHeight: "3.5",
              fontSize: "14px",
              letterSpacing: "0.2em",
              fontWeight: 200,
              color: "#444",
            }}
          >
            無駄を削ぎ落とし、骨格と毛流れが描く直線の美しさを引き出す。形が整うとき、心もまた静寂を取り戻す。髪を整えることは、余白を整えること。
          </p>
        </motion.div>
      </section>

      {/* 3. メニューとアクセスのセクション */}
      <section
        style={{
          padding: "100px 15vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "120px",
        }}
      >
        {/* メニュー項目 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={sharpFadeIn}
          style={{ width: "100%", maxWidth: "600px" }}
        >
          <h3
            style={{
              fontSize: "10px",
              letterSpacing: "0.6em",
              color: "#999",
              textAlign: "center",
              marginBottom: "60px",
            }}
          >
            MENU
          </h3>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            {[
              { name: "CUT", price: "¥5,500" },
              { name: "COLOR", price: "¥6,600 —" },
              { name: "PERM", price: "¥7,700 —" },
              { name: "TREATMENT", price: "¥4,900 —" },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingBottom: "15px",
                  borderBottom: "1px solid rgba(0,0,0,0.06)",
                }}
              >
                <span style={{ fontSize: "13px", letterSpacing: "0.3em" }}>
                  {item.name}
                </span>
                <span style={{ fontSize: "11px", color: "#666" }}>
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
        {/* 3.5 ヘアカタログセクション（ローカル画像最適化版） */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sharpFadeIn}
          style={{ width: "100%", maxWidth: "900px", margin: "120px auto" }}
        >
          <h3
            style={{
              fontSize: "10px",
              letterSpacing: "0.6em",
              color: "#999",
              textAlign: "center",
              marginBottom: "60px",
            }}
          >
            CATALOG
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "40px",
            }}
          >
            {[
              {
                url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800",
                title: "MINIMAL SHORT",
              },
              {
                url: "/natural-straight.jpg",
                title: "NATURAL STRAIGHT",
              },
              {
                url: "/silence-bob.jpg",
                title: "SILENCE BOB",
              },
              {
                url: "/shadow-layer.jpg",
                title: "SHADOW LAYER",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                style={{ position: "relative", cursor: "pointer" }}
              >
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "4/5",
                    overflow: "hidden",
                    backgroundColor: "#e0dbd7", // 画像読み込み前のベースカラー
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05, filter: "grayscale(0%)" }}
                    style={{
                      width: "100%",
                      height: "100%",
                      // パスを確実に文字列としてurl()に流し込む
                      backgroundImage: `url('${item.url}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      filter: "grayscale(100%) contrast(1.1)",
                      transition: "filter 0.6s ease, transform 0.6s ease",
                    }}
                  />
                </div>
                <div
                  style={{
                    marginTop: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                  }}
                >
                  <span
                    style={{
                      fontSize: "11px",
                      letterSpacing: "0.2em",
                      fontWeight: 300,
                      color: "#333",
                    }}
                  >
                    {item.title}
                  </span>
                  <span style={{ fontSize: "9px", color: "#ccc" }}>
                    00{i + 1}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* 地図と住所の追加（実店舗感の強調） */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={sharpFadeIn}
          style={{ width: "100%", maxWidth: "800px", textAlign: "center" }}
        >
          <h3
            style={{
              fontSize: "10px",
              letterSpacing: "0.6em",
              color: "#999",
              marginBottom: "40px",
            }}
          >
            ACCESS
          </h3>
          <div
            style={{
              width: "100%",
              height: "400px",
              filter: "grayscale(100%) invert(0.05) contrast(1.1)", // 地図をモノクロにしてなじませる
              opacity: 0.8,
              marginBottom: "40px",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.747975468373!2d139.7013303!3d35.666235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ca5f8d95105%3A0x67966957a07c130b!2z56We5a6u5YmN!5e0!3m2!1sja!2sjp!4v1713780000000!5m2!1sja!2sjp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
            />
          </div>
          <p
            style={{
              fontSize: "12px",
              letterSpacing: "0.2em",
              lineHeight: "2",
              fontWeight: 200,
            }}
          >
            東京都渋谷区神宮前 0-0-0
            <br />
            JINGUMAE, SHIBUYA, TOKYO
          </p>
        </motion.div>
      </section>

      {/* 4. クロージング */}
      <section
        style={{
          height: "40dvh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h3 style={{ fontSize: "11px", letterSpacing: "1.5em", color: "#bbb" }}>
          SILENCE
        </h3>
      </section>

      {/* ナビゲーション */}
      <Link
        href="/"
        style={{
          position: "fixed",
          top: "40px",
          left: "40px",
          fontSize: "10px",
          color: "#999",
          textDecoration: "none",
          letterSpacing: "0.2em",
          zIndex: 100,
        }}
      >
        ← LAYERED
      </Link>
    </div>
  );
}
