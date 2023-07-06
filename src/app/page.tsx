import { css } from "../../styled-system/css";

export default function Home() {
  return (
    <div
      className={css({
        minH: "100vh",
        display: "grid",
        gridTemplateRows: "auto 1fr",
      })}
    >
      <header className={css({ bgColor: "gray.100", h: 12 })}>
        some header
      </header>
      <div
        className={css({ display: "grid", gridTemplateColumns: "auto 1fr" })}
      >
        <aside className={css({ w: 80, bgColor: "blue.100" })}>
          sidebar navigation
        </aside>
        <div className={css({ fontSize: "2xl", fontWeight: "bold" })}>
          Hello 🐼!
        </div>
      </div>
    </div>
  );
}

// export default function Home() {
//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         display: "grid",
//         gridTemplateRows: "auto 1fr",
//       }}
//     >
//       <header style={{ backgroundColor: "gray", height: "48px" }}>
//         some header
//       </header>
//       <div style={{ display: "grid", gridTemplateColumns: "auto 1fr" }}>
//         <aside style={{ width: "320px", backgroundColor: "skyblue" }}>
//           sidebar navigation
//         </aside>
//         <div style={{ fontSize: "2xl", fontWeight: "bold" }}>Hello 🐼!</div>
//       </div>
//     </div>
//   );
// }
