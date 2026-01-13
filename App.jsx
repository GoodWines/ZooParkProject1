import { useEffect, useState } from "react";

export default function App() {
  // 1️⃣ state для квитка
  const [ticket, setTicket] = useState(null);

  // 2️⃣ "база даних" квитків
  const tickets = {
    adult: { name: "🐾 Дорослий квиток", price: 150 },
    child: { name: "🐶 Дитячий квиток", price: 80 },
    family: { name: "🐘 Сімейний квиток", price: 350 },
    feeding: { name: "🦒 Годування тварин", price: 50 },
  };

  // 3️⃣ читаємо URL при завантаженні
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const type = params.get("ticket");

    if (tickets[type]) {
      setTicket(tickets[type]);
    }
  }, []);

  // 4️⃣ кнопка оплати
  function pay() {
    alert(`😎 Оплата квитка: ${ticket.name} на ${ticket.price} грн`);
  }

  // 5️⃣ якщо квиток ще не завантажився
  if (!ticket) {
    return <h2>❌ Квиток не знайдено</h2>;
  }

  return (
    <div style={styles.box}>
      <h1>{ticket.name}</h1>
      <div style={styles.price}>{ticket.price} грн</div>
      <button style={styles.button} onClick={pay}>
        Оплатити
      </button>
    </div>
  );
}

// стилі (щоб не плодити файли)
const styles = {
  box: {
    maxWidth: "400px",
    margin: "80px auto",
    padding: "25px",
    borderRadius: "12px",
    background: "#fff",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  },
  price: {
    fontSize: "26px",
    margin: "15px 0",
    color: "#4caf50",
  },
  button: {
    width: "100%",
    padding: "14px",
    fontSize: "18px",
    background: "#3366f3",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};
