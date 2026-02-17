import { FaShoppingCart, FaSearch, FaUser } from "react-icons/fa";
import furnihaven from "../assets/furnihaven.png";

const Navbar = () => {
  const userName = "";

  return (
    <div style={{ backgroundColor: "#131921", width: "100%" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "0 60px",
          height: "220px",
          color: "white"
        }}
      >
        {/* 🔥 LEFT SECTION */}
        <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
          
          {/* ROUND LOGO */}
          <div
            style={{
              width: "160px",
              height: "160px",
              borderRadius: "50%",
              overflow: "hidden",
              backgroundColor: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <img
              src={furnihaven}
              alt="logo"
              style={{
                width: "150%",
                height: "160%",
                objectFit: "cover"
              }}
            />
          </div>

          {/* BRAND NAME */}
          <div
            style={{
              fontSize: "60px",
              fontWeight: "900",
              whiteSpace: "nowrap"
            }}
          >
            
          </div>
        </div>

        {/* 🔥 SEARCH SECTION (FULL FILL) */}
        <div
          style={{
            display: "flex",
            flex: 1,              // 🔥 takes all remaining space
            margin: "0 60px"      // small balanced gap
          }}
        >
          <input
            type="text"
            placeholder="Search Furni Haven ..."
            style={{
              flex: 1,
              height: "100px",
              padding: "0 40px",
              fontSize: "36px",
              fontWeight: "700",
              border: "none",
              outline: "none",
              borderTopLeftRadius: "12px",
              borderBottomLeftRadius: "12px"
            }}
          />

          <button
            style={{
              backgroundColor: "#febd69",
              border: "none",
              padding: "0 120px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderTopRightRadius: "12px",
              borderBottomRightRadius: "12px"
            }}
          >
            <FaSearch size={50} color="black" />
          </button>
        </div>

        {/* 🔥 RIGHT SECTION */}
        <div style={{ display: "flex", alignItems: "center", gap: "50px" }}>

          {/* ACCOUNT */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              cursor: "pointer"
            }}
          >
            <div
              style={{
                width: "90px",
                height: "90px",
                borderRadius: "50%",
                backgroundColor: "#febd69",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <FaUser size={40} color="black" />
            </div>

            <div
              style={{
                fontSize: "34px",
                fontWeight: "800"
              }}
            >
              {userName}
            </div>
          </div>

          {/* CART */}
          <FaShoppingCart size={60} color="white" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
