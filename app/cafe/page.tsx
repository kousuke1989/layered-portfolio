"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const colors = {
  bg: "#1a0f0a",
  bgLight: "#fcfaf2",
  accent: "#a33b2e",
  text: "#fafafa",
  textDark: "#1a1a1a",
};

// 共通の浮き上がりアニメーション
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
  },
};

// メニュー個別のアイテム（軽量化版）
const MenuItem = ({ item, isNight }: { item: any; isNight: boolean }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.98 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.98 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
  >
    <div
      style={{
        width: "100%",
        aspectRatio: "1/1",
        marginBottom: "20px",
        overflow: "hidden",
        border: `1px solid ${isNight ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"}`,
        backgroundColor: isNight ? "#1a1a1a" : "#eee",
      }}
    >
      <motion.img
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.6 }}
        src={item.img}
        alt={item.name}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        marginBottom: "8px",
      }}
    >
      <h4
        style={{ fontSize: "16px", fontWeight: 600, letterSpacing: "0.05em" }}
      >
        {item.name}
      </h4>
      <span style={{ fontSize: "14px", color: colors.accent, fontWeight: 700 }}>
        ¥{item.price}
      </span>
    </div>
    <p style={{ fontSize: "12px", opacity: 0.6, lineHeight: "1.6" }}>
      {item.desc}
    </p>
  </motion.div>
);

export default function SpinsCoffeeLP() {
  const [isNight, setIsNight] = useState(false);

  const menuData = {
    day: {
      drinks: [
        {
          name: "Midnight Blend",
          price: "650",
          desc: "深煎りのコクと静寂な後味",
          img: "/images/menu/day/day_blend-coffee.jpg",
        },
        {
          name: "Vinyl Latte",
          price: "700",
          desc: "きめ細やかな泡とエスプレッソ",
          img: "/images/menu/day/day_cafe-latte.jpg",
        },
        {
          name: "Night Dew Cold Brew",
          price: "680",
          desc: "12時間抽出したクリアな味わい",
          img: "/images/menu/day/day_cold-brew.jpg",
        },
        {
          name: "Spinning Espresso",
          price: "550",
          desc: "濃厚なアロマが凝縮された一杯",
          img: "/images/menu/day/day_espresso.jpg",
        },
        {
          name: "Iced Tea",
          price: "600",
          desc: "香り高い茶葉を使用した爽やかな一杯",
          img: "/images/menu/day/day_iced-tea.jpg",
        },
        {
          name: "Craft Cola",
          price: "650",
          desc: "スパイスが香る自家製シロップのコーラ",
          img: "/images/menu/day/day_cola.png",
        },
      ],
    },
    night: {
      drinks: [
        {
          name: "Craft Beer",
          price: "900",
          desc: "タップから注ぐ鮮やかな香りの一杯",
          img: "/images/menu/night/night_craft-beer.jpg",
        },
        {
          name: "Gin & Tonic",
          price: "850",
          desc: "プレミアムジンと厳選ライムの爽快感",
          img: "/images/menu/night/night_gin-tonic.jpg",
        },
        {
          name: "Highball",
          price: "800",
          desc: "ウイスキーの香りが引き立つ強炭酸仕上げ",
          img: "/images/menu/night/night_highball.jpg",
        },
        {
          name: "Red Wine",
          price: "950",
          desc: "料理に寄り添う深みのあるフルボディ",
          img: "/images/menu/night/night_red-wine.jpg",
        },
      ],
    },
    foods: [
      {
        name: "Gourmet Hamburger",
        price: "1,450",
        desc: "肉汁溢れるパティと自家製ソースの本格バーガー",
        img: "/images/menu/common/food_hamburger.jpg",
      },
      {
        name: "Pastrami Sandwich",
        price: "1,200",
        desc: "スパイスを効かせた肉厚パストラミの贅沢サンド",
        img: "/images/menu/common/food_pastrami-sandwich.jpg",
      },
      {
        name: "Fish & Chips",
        price: "1,100",
        desc: "外はカリッと、中はふっくら仕上げた本場スタイル",
        img: "/images/menu/common/food_fish-chips.jpg",
      },
      {
        name: "Baked Cheesecake",
        price: "750",
        desc: "低温でじっくり焼き上げた濃厚でしっとりな食感",
        img: "/images/menu/common/food_cheesecake.jpg",
      },
      {
        name: "Classic Tiramisu",
        price: "800",
        desc: "自家製エスプレッソを染み込ませた大人の味わい",
        img: "/images/menu/common/food_tiramisu.jpg",
      },
    ],
  };

  return (
    <div
      style={{
        backgroundColor: colors.bg,
        color: colors.text,
        fontFamily: "sans-serif",
        overflowX: "hidden",
      }}
    >
      {/* --- HEADER (見切れ解消版) --- */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          padding: "0 5%",
          height: "80px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 100,
          backgroundColor: isNight
            ? "rgba(13,13,13,0.85)"
            : "rgba(26,15,10,0.85)",
          backdropFilter: "blur(12px)",
          transition: "0.8s ease",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            fontWeight: 900,
            letterSpacing: "0.15em",
            fontSize: "18px",
            whiteSpace: "nowrap",
          }}
        >
          SPINS <span style={{ color: colors.accent }}>◎</span> COFFEE
        </div>
        <nav style={{ display: "flex", gap: "25px" }}>
          {["CONCEPT", "MENU", "ACCESS"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ opacity: 0.5 }}
              style={{
                fontSize: "10px",
                letterSpacing: "0.2em",
                textDecoration: "none",
                color: "inherit",
                fontWeight: 400,
                whiteSpace: "nowrap",
              }}
            >
              {item}
            </motion.a>
          ))}
        </nav>
      </header>

      {/* --- HERO --- */}
      <section
        style={{
          height: "100dvh",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.5,
          }}
        >
          <source src="/videos/hero-vinyl-loop.mp4" type="video/mp4" />
        </video>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(to bottom, transparent 60%, ${colors.bg})`,
            zIndex: 1,
          }}
        />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          style={{ position: "relative", zIndex: 2, textAlign: "center" }}
        >
          <p
            style={{
              letterSpacing: "1em",
              fontSize: "10px",
              opacity: 0.6,
              marginBottom: "30px",
            }}
          >
            SOUNDS OF MID-NIGHT BEANS
          </p>
          <h1
            style={{
              fontSize: "clamp(4rem, 15vw, 10rem)",
              fontWeight: 900,
              lineHeight: 0.8,
              letterSpacing: "-0.02em",
            }}
          >
            SPINS
            <br />
            <span style={{ color: colors.accent, fontWeight: 100 }}>
              COFFEE
            </span>
          </h1>
        </motion.div>
      </section>

      {/* --- CONCEPT (アニメーション強化) --- */}
      <section
        id="concept"
        style={{ padding: "150px 10vw", backgroundColor: colors.bg }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "80px",
            alignItems: "center",
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <h2
              style={{
                fontSize: "28px",
                color: colors.accent,
                marginBottom: "40px",
                fontWeight: 600,
              }}
            >
              目黒川のほとり、
              <br />
              レコードが刻む静寂。
            </h2>
            <p
              style={{
                lineHeight: "2.4",
                opacity: 0.8,
                fontSize: "15px",
                fontWeight: 300,
              }}
            >
              中目黒の喧騒から少し離れた場所に、spinscoffeeはあります。
              <br />
              深煎りの豆を挽く音と、針が落ちる瞬間のノイズが混ざり合う、
              <br />
              アナログな時間が流れる空間。バリスタが一杯ずつ丁寧に、
              <br />
              あなたの夜をドリップします。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            style={{
              aspectRatio: "4/5",
              overflow: "hidden",
              border: `1px solid ${colors.accent}33`,
            }}
          >
            <motion.img
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 2.5, ease: "easeOut" }}
              src="/images/atmosphere-barista-handdrip.jpg"
              alt="Barista"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </motion.div>
        </div>
      </section>

      {/* --- MENU (爆速切り替え・もたつき解消版) --- */}
      <section
        id="menu"
        style={{
          padding: "120px 10vw",
          transition: "background-color 0.6s ease",
          backgroundColor: isNight ? "#0d0d0d" : colors.bgLight,
          color: isNight ? colors.text : colors.textDark,
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "100px" }}>
          <h2
            style={{
              fontSize: "36px",
              fontWeight: 900,
              letterSpacing: "0.3em",
            }}
          >
            THE LIST
          </h2>
          <div
            style={{
              marginTop: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <span
              style={{
                fontSize: "12px",
                opacity: isNight ? 0.3 : 1,
                transition: "0.3s",
              }}
            >
              DAY TIME
            </span>
            <button
              onClick={() => setIsNight(!isNight)}
              style={{
                width: "50px",
                height: "24px",
                borderRadius: "12px",
                backgroundColor: isNight ? colors.accent : "#ccc",
                border: "none",
                cursor: "pointer",
                position: "relative",
              }}
            >
              <motion.div
                animate={{ x: isNight ? 26 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  backgroundColor: "#fff",
                  position: "absolute",
                  top: "2px",
                  left: "2px",
                }}
              />
            </button>
            <span
              style={{
                fontSize: "12px",
                opacity: isNight ? 1 : 0.3,
                transition: "0.3s",
              }}
            >
              NIGHT SHIFT
            </span>
          </div>
        </div>

        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={isNight ? "night" : "day"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "60px 40px",
              }}
            >
              {(isNight ? menuData.night.drinks : menuData.day.drinks).map(
                (item) => (
                  <MenuItem key={item.name} item={item} isNight={isNight} />
                ),
              )}
              {menuData.foods.map((item) => (
                <MenuItem key={item.name} item={item} isNight={isNight} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* --- ACCESS (Googleマップ修正版) --- */}
      <section
        id="access"
        style={{ padding: "150px 10vw", backgroundColor: colors.bg }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "80px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              height: "450px",
              width: "100%",
              border: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.06214539659!2d139.702847576251!3d35.65171723164936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b4469608933%3A0x7d283f30999052b3!2z5Luj5a6Y5bGxVC1TSVRF!5e0!3m2!1sja!2sjp!4v1712822400000!5m2!1sja!2sjp"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "grayscale(1) invert(0.9) contrast(1.2)",
              }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          <div>
            <h3
              style={{
                color: colors.accent,
                letterSpacing: "0.4em",
                fontSize: "12px",
                marginBottom: "30px",
              }}
            >
              LOCATION
            </h3>
            <p
              style={{
                fontSize: "22px",
                fontWeight: 800,
                marginBottom: "20px",
              }}
            >
              SPINS COFFEE NAKAMEGURO
            </p>
            <div
              style={{
                opacity: 0.7,
                lineHeight: "2.2",
                fontSize: "14px",
                fontWeight: 300,
              }}
            >
              <p>
                〒153-0051 東京都目黒区上目黒 1-XX-X
                <br />
                Analog Bldg 1F
              </p>
              <p style={{ marginTop: "30px" }}>
                Open: 11:00 — 24:00
                <br />
                Closed: Monday
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer
        style={{
          padding: "100px 5vw",
          textAlign: "center",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          backgroundColor: colors.bg,
        }}
      >
        <p style={{ fontSize: "10px", opacity: 0.3, letterSpacing: "0.3em" }}>
          © 2026 SPINS COFFEE. CURATED BY KOUSUKE SHIMAMOTO.
        </p>
      </footer>
    </div>
  );
}
