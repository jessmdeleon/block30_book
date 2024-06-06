export default function Home() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: "1rem",
        }}
      >
        <h1
          style={{
            color: "#4286f4",
            fontFamily: "Arial",
            fontSize: "50px",
            textAlign: "center",
          }}
        >
          Welcome to Book Buddy
        </h1>
        <p
          style={{
            textAlign: "center",
            fontSize: "1.5rem",
            color: "#4286f4",
          }}
        >
          This is a simple application that allows you to view books and their
          details. You can also add new books to the list.
        </p>
      </div>
    );
  }