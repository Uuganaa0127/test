import { useLocation } from "react-router-dom";

export default function Msg() {
    const params = useLocation();
    console.log('param====>',params.state.notification.body);
    return (
      <main style={{ padding: "1rem 0" }}>
          <h1>title</h1>
        <h2>{params.state.notification.title}</h2>
        <h1>body</h1>
        <h2>{ <h2>{params.state.notification.body}</h2>}</h2>

      </main>
    );
  }