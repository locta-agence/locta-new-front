import Link from "next/link";
import ScrollGallery from "./components/ScrollGallery";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero text */}
      <section className="flex flex-col items-center justify-center text-center px-8 py-16 gap-6">
        <h1
          style={{
            textAlign: "center",
            fontFamily: 'var(--Heading, "Armin Soft")',
            fontSize: "72px",
            fontWeight: 600,
            lineHeight: "100%",
            letterSpacing: "-1.44px",
            textTransform: "uppercase",
            color: "#000",
          }}
        >
          LOCTA MÉDIA<br />INDÉPENDANT LYONNAIS
        </h1>
        <Link
          href="/media/contact"
          style={{
            fontFamily: 'var(--Text, "Armin Soft")',
            fontSize: "var(--Text-Small, 14px)",
            fontWeight: 600,
            lineHeight: "normal",
            textDecoration: "underline",
            color: "#000",
          }}
        >
          Nous contacter
        </Link>
      </section>

      {/* Video with logo overlay */}
      <section className="w-full px-10 pb-10">
        <div
          className="relative w-full overflow-hidden"
          style={{ height: "550px" }}
        >
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/video/ski.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Logo overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="300"
            height="289"
            viewBox="0 0 300 289"
            fill="none"
            style={{ width: "clamp(120px, 20vw, 300px)", height: "auto" }}
          >
            <path
              d="M299.996 195.546V195.937C283.425 220.107 263.156 242.518 239.722 260.211C229.899 267.622 212.552 279.358 200.269 280.606C188.853 281.764 170.869 273.284 160.22 268.677C139.538 259.735 119.506 249.086 98.4018 241.113C77.2974 233.14 65.9304 229.05 46.4961 242.644C29.4186 254.585 16.4085 272.449 3.86981 288.812H3.09315L0 286.68C25.9349 248.821 50.6532 210.074 77.0011 172.502C84.0763 162.415 91.2682 152.431 99.0662 142.877C99.2548 142.123 98.8642 142.406 98.5903 142.213C83.0617 131.156 65.6925 122.684 50.716 110.823C28.2738 93.0546 21.8586 77.5035 35.5376 50.5989C48.4893 25.1084 75.0393 1.64268 104.7 0.0669212C140.988 -1.86349 166.963 38.4822 195.34 54.8009C216.997 67.2543 230.846 48.7717 244.624 34.2847C248.534 30.1769 252.256 25.8223 256.076 21.6202L256.853 21.6337L259.511 23.9771C238.967 50.2622 215.6 82.2532 179.385 85.2386L178.801 85.8223L178.756 222.154C191.591 238.464 205.98 251.376 228.292 249.553C245.993 248.107 267.143 226.675 278.824 214.204C285.033 207.578 290.716 200.435 296.893 193.773L297.419 193.634L300 195.546H299.996ZM164.759 209.921V82.6573C138.379 68.3318 117.531 30.9536 86.0157 26.9446C59.165 23.5282 39.991 47.6225 61.5713 68.875C79.8923 86.9132 111.313 98.5001 132.633 113.23L134.052 114.904L70.716 204.866C74.2312 203.402 77.468 201.306 80.9473 199.748C99.2413 191.564 117.67 191.663 136.691 197.382C146.536 200.341 155.906 204.776 164.763 209.921H164.759Z"
              fill="white"
              style={{ mixBlendMode: "difference" }}
            />
          </svg>
        </div>
        </div>
      </section>

      <ScrollGallery />

      {/* Talents section */}
      <section style={{ display: "flex", height: "641.925px", padding: "40px 70px", flexDirection: "column", justifyContent: "center", alignItems: "flex-end", gap: "12px", alignSelf: "stretch" }}>
        <div style={{ display: "flex", maxWidth: "900px", flexDirection: "column", alignItems: "flex-start", gap: "12px" }}>
        <p
          style={{
            fontFamily: 'var(--Heading, "Armin Soft")',
            fontSize: "var(--Heading-H3, 32px)",
            fontWeight: 600,
            lineHeight: "100%",
            textTransform: "uppercase",
            color: "#000",
            alignSelf: "stretch",
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Felis amet ultricies gravida quam tortor. Ut elementum vulputate vivamus varius hac.
        </p>
        <Link
          href="#"
          style={{
            fontFamily: 'var(--Text, "Armin Soft")',
            fontSize: "var(--Text-Small, 14px)",
            fontWeight: 600,
            lineHeight: "normal",
            textDecoration: "underline",
            color: "#000",
          }}
        >
          Tous les talents
        </Link>
        </div>
      </section>

      {/* Articles section */}
      <section style={{ display: "flex", padding: "0 var(--Margin-margin, 24px) 32px var(--Margin-margin, 24px)", alignItems: "flex-end", gap: "var(--Gutter, 8px)", alignSelf: "stretch" }}>
        {/* Card 1 */}
        <div
          style={{
            display: "flex",
            height: "580.978px",
            minWidth: "450px",
            minHeight: "570px",
            padding: "20px",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flex: "1 0 0",
            aspectRatio: "9/16",
            backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0, 0.30) 0%, rgba(51, 51, 51, 0.00) 50%, rgba(0, 0, 0, 0.30) 100%), url(/images/134f8f4eb69029543e7dce8d7ab181d3b98565d6.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <span style={{ display: "inline-flex", padding: "4px 8px", border: "1px solid #fff", fontFamily: 'var(--Heading, "Armin Soft")', fontSize: "12px", fontWeight: 600, color: "#fff", textTransform: "uppercase" }}>
            Event
          </span>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <p style={{ fontFamily: 'var(--Heading, "Armin Soft")', fontSize: "20px", fontWeight: 600, color: "#fff", textTransform: "uppercase", lineHeight: "100%" }}>
              Lorem ipsum dolor
            </p>
            <p style={{ fontFamily: 'var(--Text, "Armin Soft")', fontSize: "14px", fontWeight: 300, color: "#fff", lineHeight: "normal" }}>
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div
          style={{
            display: "flex",
            height: "580.978px",
            minWidth: "450px",
            minHeight: "570px",
            padding: "20px",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flex: "1 0 0",
            aspectRatio: "9/16",
            backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0, 0.30) 0%, rgba(51, 51, 51, 0.00) 50%, rgba(0, 0, 0, 0.30) 100%), url(/images/source_imgi_69_442171572_983153753516259_113050789989027832_n.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <span style={{ display: "inline-flex", padding: "4px 8px", border: "1px solid #fff", fontFamily: 'var(--Heading, "Armin Soft")', fontSize: "12px", fontWeight: 600, color: "#fff", textTransform: "uppercase" }}>
            Event
          </span>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <p style={{ fontFamily: 'var(--Heading, "Armin Soft")', fontSize: "20px", fontWeight: 600, color: "#fff", textTransform: "uppercase", lineHeight: "100%" }}>
              Lorem ipsum dolor
            </p>
            <p style={{ fontFamily: 'var(--Text, "Armin Soft")', fontSize: "14px", fontWeight: 300, color: "#fff", lineHeight: "normal" }}>
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>

        {/* Derniers articles */}
        <div
          style={{
            display: "flex",
            padding: "40px 0",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "12px",
            flex: "1 0 0",
            alignSelf: "stretch",
          }}
        >
          <p style={{ fontFamily: 'var(--Heading, "Armin Soft")', fontSize: "64px", fontWeight: 600, lineHeight: "100%", textTransform: "uppercase", color: "#000", textAlign: "center" }}>
            Derniers articles
          </p>
          <Link
            href="#"
            style={{ fontFamily: 'var(--Text, "Armin Soft")', fontSize: "var(--Text-Small, 14px)", fontWeight: 600, lineHeight: "normal", textDecoration: "underline", color: "#000" }}
          >
            Tous les articles
          </Link>
        </div>
      </section>

      {/* Full-width photo section */}
      <div style={{ display: "flex", padding: "0 var(--Margin-margin, 24px)", flexDirection: "column", alignItems: "flex-start", gap: "10px", alignSelf: "stretch" }}>
        <div
          style={{
            display: "flex",
            height: "750px",
            padding: "24px var(--Margin-margin, 24px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "12px",
            alignSelf: "stretch",
            background: "url(/images/134f8f4eb69029543e7dce8d7ab181d3b98565d6.jpg) lightgray 0px -655px / 100% 232% no-repeat",
          }}
        />
      </div>
      {/* À propos section */}
      <div style={{ display: "flex", padding: "32px var(--Margin-margin, 24px)", alignItems: "flex-end", gap: "var(--Gutter, 8px)", alignSelf: "stretch" }}>
        {/* Left block */}
        <div style={{ display: "flex", maxWidth: "458px", padding: "40px 32px", flexDirection: "column", alignItems: "flex-start", gap: "18px", flex: "1 0 0", alignSelf: "stretch" }}>
          <p style={{ fontFamily: 'var(--Heading, "Armin Soft")', fontSize: "var(--Heading-H2, 56px)", fontWeight: 600, lineHeight: "100%", textTransform: "uppercase", alignSelf: "stretch", color: "#000" }}>
            À propos du média
          </p>
          <p style={{ fontFamily: 'var(--Text, "Armin Soft")', fontSize: "var(--Text-Small, 14px)", fontWeight: 300, lineHeight: "normal", alignSelf: "stretch", color: "#000" }}>
            Lorem ipsum dolor sit amet consectetur. Felis amet ultricies gravida quam tortor. Ut elementum vulputate vivamus varius hac.
          </p>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
            <Link
              href="#"
              style={{ fontFamily: 'var(--Text, "Armin Soft")', fontSize: "var(--Text-Small, 14px)", fontWeight: 600, lineHeight: "normal", textDecoration: "underline", color: "#000" }}
            >
              En savoir plus
            </Link>
          </div>
        </div>

        {/* Right block: photo */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "8px", flex: "1 0 0" }}>
          <div
            style={{
              height: "616.925px",
              alignSelf: "stretch",
              background: "url(/images/img-21.png) lightgray 50% / cover no-repeat",
            }}
          />
        </div>
      </div>
      {/* Social media section */}
      <div style={{ display: "flex", width: "100%", padding: "120px var(--Margin-margin, 24px)", flexDirection: "column", justifyContent: "flex-end", alignItems: "stretch", gap: "20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", alignSelf: "stretch" }}>

          {/* Small image standalone */}
          <div style={{ display: "flex", height: "175px", padding: "0px", justifyContent: "center", alignItems: "center", gap: "12px", flex: "1 0 0", aspectRatio: "118.67/157.99", background: "url(/images/beeb9bba61fc7e58eeabf6a446cdc5f64b22af7b.png) lightgray -24.822px -13.734px / 141.834% 131.814% no-repeat" }} />

          {/* Instagram group */}
          <div style={{ display: "flex", height: "266.274px", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", gap: "16px" }}>
            <div style={{ display: "flex", height: "25px", justifyContent: "center", alignItems: "center", gap: "8px", flexShrink: 0 }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ width: "16px", height: "16px", aspectRatio: "1/1" }}>
                <path d="M8 1.44103C10.1387 1.44103 10.3903 1.44675 11.2366 1.48678C12.0143 1.52109 12.4432 1.65261 12.7234 1.76126C13.0951 1.90422 13.3638 2.08149 13.644 2.36169C13.9242 2.64189 14.0958 2.91065 14.2445 3.28235C14.3531 3.56255 14.4846 3.9857 14.5189 4.76912C14.559 5.61544 14.5647 5.86705 14.5647 8.00572C14.5647 10.1444 14.559 10.396 14.5189 11.2423C14.4846 12.02 14.3531 12.4489 14.2445 12.7291C14.1015 13.1008 13.9242 13.3696 13.644 13.6498C13.3638 13.93 13.0951 14.1015 12.7234 14.2502C12.4432 14.3588 12.02 14.4904 11.2366 14.5247C10.3903 14.5647 10.1387 14.5704 8 14.5704C5.86133 14.5704 5.60972 14.5647 4.7634 14.5247C3.9857 14.4904 3.55683 14.3588 3.27663 14.2502C2.90493 14.1072 2.63617 13.93 2.35597 13.6498C2.07577 13.3696 1.90422 13.1008 1.75554 12.7291C1.64689 12.4489 1.51537 12.0257 1.48106 11.2423C1.44103 10.396 1.43531 10.1444 1.43531 8.00572C1.43531 5.86705 1.44103 5.61544 1.48106 4.76912C1.51537 3.99142 1.64689 3.56255 1.75554 3.28235C1.8985 2.91065 2.07577 2.64189 2.35597 2.36169C2.63617 2.08149 2.90493 1.90994 3.27663 1.76126C3.55683 1.65261 3.97999 1.52109 4.7634 1.48678C5.60972 1.44675 5.86133 1.44103 8 1.44103ZM8 0C5.82702 0 5.55254 0.0114378 4.7005 0.045748C3.84846 0.0857766 3.26519 0.217298 2.75625 0.417441C2.23016 0.623302 1.78413 0.897784 1.3381 1.3381C0.892066 1.78413 0.617584 2.23016 0.417441 2.75625C0.217298 3.26519 0.0857756 3.84846 0.045747 4.7005C0.00571839 5.55254 0 5.82702 0 8C0 10.173 0.0114368 10.4475 0.045747 11.2995C0.0857756 12.1515 0.217298 12.7348 0.417441 13.2437C0.623302 13.7698 0.897784 14.2159 1.3381 14.6619C1.78413 15.1079 2.23016 15.3824 2.75625 15.5826C3.26519 15.7827 3.84846 15.9142 4.7005 15.9543C5.55254 15.9943 5.82702 16 8 16C10.173 16 10.4475 15.9886 11.2995 15.9543C12.1515 15.9142 12.7348 15.7827 13.2437 15.5826C13.7698 15.3767 14.2159 15.1022 14.6619 14.6619C15.1079 14.2159 15.3824 13.7698 15.5826 13.2437C15.7827 12.7348 15.9142 12.1515 15.9543 11.2995C15.9943 10.4475 16 10.173 16 8C16 5.82702 15.9886 5.55254 15.9543 4.7005C15.9142 3.84846 15.7827 3.26519 15.5826 2.75625C15.3767 2.23016 15.1022 1.78413 14.6619 1.3381C14.2159 0.892066 13.7698 0.617584 13.2437 0.417441C12.7348 0.217298 12.1515 0.0857766 11.2995 0.045748C10.4475 0.00571942 10.173 0 8 0Z" fill="black"/>
                <path d="M7.99966 3.89421C5.72947 3.89421 3.88816 5.73553 3.88816 8.00572C3.88816 10.2759 5.72947 12.1172 7.99966 12.1172C10.2699 12.1172 12.1112 10.2759 12.1112 8.00572C12.1112 5.73553 10.2699 3.89421 7.99966 3.89421ZM7.99966 10.6762C6.52433 10.6762 5.32919 9.48106 5.32919 8.00572C5.32919 6.53038 6.52433 5.33524 7.99966 5.33524C9.475 5.33524 10.6701 6.53038 10.6701 8.00572C10.6701 9.48106 9.475 10.6762 7.99966 10.6762Z" fill="black"/>
                <path d="M12.2712 4.69478C12.8018 4.69478 13.2319 4.26467 13.2319 3.7341C13.2319 3.20352 12.8018 2.77341 12.2712 2.77341C11.7407 2.77341 11.3106 3.20352 11.3106 3.7341C11.3106 4.26467 11.7407 4.69478 12.2712 4.69478Z" fill="black"/>
              </svg>
              <span style={{ textAlign: "center", fontFamily: 'var(--Heading, "Armin Soft")', fontSize: "var(--Heading-H4, 18px)", fontWeight: 600, lineHeight: "100%", textTransform: "uppercase", color: "#000" }}>@LO.CTA</span>
            </div>
            <div style={{ display: "flex", width: "200px", height: "266.274px", padding: "24px var(--Margin-margin, 24px)", justifyContent: "center", alignItems: "center", gap: "12px", flexShrink: 0, aspectRatio: "169/225", background: "url(/images/img-21.png) lightgray -18.678px 0px / 118.678% 110.293% no-repeat" }} />
          </div>

          {/* 2 small images */}
          <div style={{ display: "flex", height: "175px", padding: "0px", justifyContent: "center", alignItems: "center", gap: "12px", flex: "1 0 0", aspectRatio: "118.67/157.99", background: "url(/images/1bf71634184186caa805f3c32ce4e9bbc631740c.jpg) lightgray -24.822px -13.734px / 141.834% 131.814% no-repeat" }} />
          <div style={{ display: "flex", height: "175px", padding: "0px", justifyContent: "center", alignItems: "center", gap: "12px", flex: "1 0 0", aspectRatio: "118.67/157.99", background: "url(/images/134f8f4eb69029543e7dce8d7ab181d3b98565d6-1.jpg) lightgray -24.822px -13.734px / 141.834% 131.814% no-repeat" }} />

          {/* LinkedIn group */}
          <div style={{ display: "flex", height: "266.274px", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", gap: "16px" }}>
            <div style={{ display: "flex", height: "25px", justifyContent: "center", alignItems: "center", gap: "8px", flexShrink: 0 }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ width: "16px", height: "16px" }}>
                <path d="M3.58052 15.993H0.259765V5.31225H3.58052V15.993ZM1.92365 3.85068C0.863538 3.85068 0 2.98638 0 1.92534C0 0.864294 0.856517 0 1.92365 0C2.99079 0 3.8473 0.864294 3.8473 1.92534C3.8473 2.98638 2.98377 3.85068 1.92365 3.85068ZM16 15.993H12.6863V10.8002C12.6863 9.56346 12.6652 7.96838 10.9592 7.96838C9.25318 7.96838 8.97236 9.31752 8.97236 10.7088V15.993H5.65862V5.31225H8.83897V6.77382H8.88109C9.32339 5.93764 10.4046 5.05226 12.0193 5.05226C15.3752 5.05226 15.993 7.2657 15.993 10.1397V16L16 15.993Z" fill="black"/>
              </svg>
              <span style={{ textAlign: "center", fontFamily: 'var(--Heading, "Armin Soft")', fontSize: "var(--Heading-H4, 18px)", fontWeight: 600, lineHeight: "100%", textTransform: "uppercase", color: "#000" }}>LOCTA</span>
            </div>
            <div style={{ display: "flex", width: "200px", height: "266.274px", padding: "24px var(--Margin-margin, 24px)", justifyContent: "center", alignItems: "center", gap: "12px", flexShrink: 0, aspectRatio: "169/225", background: "url(/images/source_imgi_69_442171572_983153753516259_113050789989027832_n.jpg) lightgray -18.678px 0px / 118.678% 110.293% no-repeat" }} />
          </div>

          {/* Small image before TikTok */}
          <div style={{ display: "flex", height: "175px", padding: "0px", justifyContent: "center", alignItems: "center", gap: "12px", flex: "1 0 0", aspectRatio: "118.67/157.99", background: "url(/images/134f8f4eb69029543e7dce8d7ab181d3b98565d6-1.jpg) lightgray -24.822px -13.734px / 141.834% 131.814% no-repeat" }} />

          {/* TikTok group */}
          <div style={{ display: "flex", height: "266.274px", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", gap: "16px" }}>
            <div style={{ display: "flex", height: "25px", justifyContent: "center", alignItems: "center", gap: "8px", flexShrink: 0 }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none" style={{ width: "14px", height: "16px" }}>
                <path d="M13.6922 6.44306C13.5652 6.4541 13.4327 6.4541 13.3057 6.44306C11.8647 6.44306 10.5176 5.71981 9.72809 4.5107V11.136C9.72809 13.8247 7.55279 16 4.86404 16C2.17529 16 0 13.8247 0 11.136C0 8.4472 2.17529 6.27191 4.86404 6.27191H5.18979V8.69565C3.83713 8.48033 2.56177 9.40235 2.34645 10.755C2.13112 12.1077 3.05314 13.383 4.40579 13.5983C4.50517 13.6149 4.59903 13.6259 4.69841 13.6259H4.89717C6.27191 13.6259 7.39821 12.5383 7.45342 11.1691L7.49206 0H9.7833C10.0041 2.05383 11.6605 3.64941 13.7198 3.804L13.6922 3.78192V6.44306Z" fill="black"/>
              </svg>
              <span style={{ textAlign: "center", fontFamily: 'var(--Heading, "Armin Soft")', fontSize: "var(--Heading-H4, 18px)", fontWeight: 600, lineHeight: "100%", textTransform: "uppercase", color: "#000" }}>LO.CTA</span>
            </div>
            <div style={{ display: "flex", width: "200px", height: "266.274px", padding: "24px var(--Margin-margin, 24px)", justifyContent: "center", alignItems: "center", gap: "12px", flexShrink: 0, aspectRatio: "169/225", background: "url(/images/134f8f4eb69029543e7dce8d7ab181d3b98565d6.jpg) lightgray -18.678px 0px / 118.678% 110.293% no-repeat" }} />
          </div>

          {/* 2 small images */}
          <div style={{ display: "flex", height: "175px", padding: "0px", justifyContent: "center", alignItems: "center", gap: "12px", flex: "1 0 0", aspectRatio: "118.67/157.99", background: "url(/images/beeb9bba61fc7e58eeabf6a446cdc5f64b22af7b.png) lightgray -24.822px -13.734px / 141.834% 131.814% no-repeat" }} />
          <div style={{ display: "flex", height: "175px", padding: "0px", justifyContent: "center", alignItems: "center", gap: "12px", flex: "1 0 0", aspectRatio: "118.67/157.99", background: "url(/images/img-21.png) lightgray -24.822px -13.734px / 141.834% 131.814% no-repeat" }} />
        </div>
      </div>
    </div>
  );
}
